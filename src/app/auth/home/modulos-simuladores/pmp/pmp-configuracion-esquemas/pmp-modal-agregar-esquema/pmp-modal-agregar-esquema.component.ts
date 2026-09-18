import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { forkJoin, Observable } from 'rxjs';
import {
  pmpEsquemaExamenActualizarDTO,
  pmpEsquemaExamenDTO,
  pmpEsquemaExamenRegistrarDTO,
} from 'src/app/Models/Pmp/EsquemaExamenDTO';
import { actualizarParametrosNivel } from 'src/app/Models/Pmp/TipoRespuesta';
import { AlertaService } from 'src/app/shared/Services/Alerta/alerta.service';
import { PmpEsquemaExamenService } from 'src/app/shared/Services/Pmp/Pmp-EsquemaExamen/pmp-esquema-examen.service';
import { PmpTipoRespuestaService } from 'src/app/shared/Services/Pmp/Pmp-Tipo-Respuesta/pmp-tipo-respuesta.service';

/**
 * Alta y edicion de un esquema del contenido del examen (ECO).
 *
 * Al crear solo se piden nombre, descripcion y porcentaje minimo de aprobacion: el esquema
 * nace vacio y sus rangos de nivel se siembran copiando los del esquema activo. Al editar se
 * muestran ademas esos rangos, porque el nivel del alumno se calcula por esquema.
 */
@Component({
  selector: 'app-pmp-modal-agregar-esquema',
  templateUrl: './pmp-modal-agregar-esquema.component.html',
  styleUrls: ['./pmp-modal-agregar-esquema.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PmpModalAgregarEsquemaComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<PmpModalAgregarEsquemaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private alertaService: AlertaService,
    private _EsquemaExamen: PmpEsquemaExamenService,
    private _TipoRespuesta: PmpTipoRespuestaService
  ) {}

  public formEsquema: FormGroup = this.formBuilder.group({
    IdPmpEsquemaExamen: [0],
    Nombre: ['', [Validators.required]],
    Descripcion: [''],
    PorcentajeMinimoAprobacion: [0, [Validators.required]],
  });

  public ParametrosNivel: any = [];
  public jsonEnvio: pmpEsquemaExamenRegistrarDTO = {
    Nombre: '',
    Descripcion: '',
    PorcentajeMinimoAprobacion: 0,
  };
  public jsonActualizar: pmpEsquemaExamenActualizarDTO = {
    IdPmpEsquemaExamen: 0,
    Nombre: '',
    Descripcion: '',
    PorcentajeMinimoAprobacion: 0,
  };

  ngOnInit(): void {
    if (this.data != undefined) {
      this.formEsquema
        .get('IdPmpEsquemaExamen')
        ?.setValue(this.data[0].idPmpEsquemaExamen);
      this.formEsquema.get('Nombre')?.setValue(this.data[0].nombre);
      this.formEsquema.get('Descripcion')?.setValue(this.data[0].descripcion);
      this.ObtenerPorcentajeMinimoAprobacion();
      this.ObtenerParametrosNivel();
    }
  }

  /**
   * El resumen de la grilla no trae el porcentaje minimo de aprobacion, asi que se toma de la
   * lista de esquemas.
   */
  ObtenerPorcentajeMinimoAprobacion() {
    this._EsquemaExamen.Obtener().subscribe({
      next: (x: any) => {
        const lista: Array<pmpEsquemaExamenDTO> = x != null ? x : [];
        const esquema = lista.find(
          (y) => y.idPmpEsquemaExamen == this.data[0].idPmpEsquemaExamen
        );
        if (esquema != undefined) {
          this.formEsquema
            .get('PorcentajeMinimoAprobacion')
            ?.setValue(esquema.porcentajeMinimoAprobacion);
        }
      },
    });
  }

  ObtenerParametrosNivel() {
    this._TipoRespuesta
      .ObtenerParametrosNivelEntity(this.data[0].idPmpEsquemaExamen)
      .subscribe({
        next: (x: any) => {
          this.ParametrosNivel = x != null ? x : [];
        },
      });
  }

  Cancelar() {
    this.dialogRef.close();
  }

  Agregar() {
    this.jsonEnvio.Nombre = this.formEsquema.get('Nombre')?.value;
    this.jsonEnvio.Descripcion = this.formEsquema.get('Descripcion')?.value;
    this.jsonEnvio.PorcentajeMinimoAprobacion = this.formEsquema.get(
      'PorcentajeMinimoAprobacion'
    )?.value;

    this._EsquemaExamen.Registrar(this.jsonEnvio).subscribe({
      next: (x: any) => {
        if (x != null && x.exito == false) {
          this.alertaService.mensajeIcon('Aviso', x.mensaje, 'warning');
        } else {
          this.alertaService.mensajeIcon(
            'Aviso',
            'El esquema se agregó correctamente. Está vacío: agrégale categorías, ' +
              'subcategorías y preguntas antes de activarlo.',
            'success'
          );
        }
      },
      error: (e) => {
        this.alertaService.mensajeError(e);
      },
      complete: () => {
        this.dialogRef.close();
      },
    });
  }

  /** Guarda los datos del esquema y, si cambiaron, los rangos de nivel. */
  Editar() {
    this.jsonActualizar.IdPmpEsquemaExamen =
      this.data[0].idPmpEsquemaExamen;
    this.jsonActualizar.Nombre = this.formEsquema.get('Nombre')?.value;
    this.jsonActualizar.Descripcion =
      this.formEsquema.get('Descripcion')?.value;
    this.jsonActualizar.PorcentajeMinimoAprobacion = this.formEsquema.get(
      'PorcentajeMinimoAprobacion'
    )?.value;

    const peticiones: Array<Observable<any>> = [
      this._EsquemaExamen.Actualizar(this.jsonActualizar),
    ];
    this.ParametrosNivel.forEach((nivel: any) => {
      const envio: actualizarParametrosNivel = {
        id: nivel.id,
        fechaModificacion: new Date(),
        valorMinimo: nivel.valorMinimo,
        valorMaximo: nivel.valorMaximo,
      };
      peticiones.push(this._TipoRespuesta.actualizarParametrosNivel(envio));
    });

    forkJoin(peticiones).subscribe({
      next: (x: any) => {
        if (x != null && x[0] != null && x[0].exito == false) {
          this.alertaService.mensajeIcon('Aviso', x[0].mensaje, 'warning');
        } else {
          this.alertaService.mensajeIcon(
            'Aviso',
            'El esquema se actualizó correctamente',
            'success'
          );
        }
      },
      error: (e) => {
        this.alertaService.mensajeError(e);
      },
      complete: () => {
        this.dialogRef.close();
      },
    });
  }
}
