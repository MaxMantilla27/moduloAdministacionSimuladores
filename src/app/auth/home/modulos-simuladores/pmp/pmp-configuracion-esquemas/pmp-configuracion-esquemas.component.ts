import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  pmpEsquemaExamenResumenDTO,
  pmpEsquemaExamenValidacionDTO,
} from 'src/app/Models/Pmp/EsquemaExamenDTO';
import { AlertaService } from 'src/app/shared/Services/Alerta/alerta.service';
import { PmpEsquemaExamenService } from 'src/app/shared/Services/Pmp/Pmp-EsquemaExamen/pmp-esquema-examen.service';
import { PmpModalAgregarEsquemaComponent } from './pmp-modal-agregar-esquema/pmp-modal-agregar-esquema.component';

/**
 * Configuracion de los esquemas del contenido del examen (ECO) del simulador PMP.
 *
 * Cada esquema es una version del contenido: sus categorias, subcategorias, preguntas,
 * porcentaje minimo de aprobacion y rangos de nivel. Las simulaciones nuevas del alumno toman
 * el esquema activo; las que ya existen conservan el suyo, por eso el historial no se altera.
 */
@Component({
  selector: 'app-pmp-configuracion-esquemas',
  templateUrl: './pmp-configuracion-esquemas.component.html',
  styleUrls: ['./pmp-configuracion-esquemas.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PmpConfiguracionEsquemasComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private _EsquemaExamen: PmpEsquemaExamenService,
    private alertaService: AlertaService
  ) {}

  public listaEsquemas: Array<pmpEsquemaExamenResumenDTO> = [];
  public IdPmpEsquemaExamenActivo = 0;

  ngOnInit(): void {
    this.ObtenerEsquemas();
  }

  ObtenerEsquemas() {
    this._EsquemaExamen.ObtenerResumen().subscribe({
      next: (x: any) => {
        this.listaEsquemas = x != null ? x : [];
        const activo = this.listaEsquemas.find((y) => y.activo == true);
        this.IdPmpEsquemaExamenActivo =
          activo != undefined ? activo.idPmpEsquemaExamen : 0;

        /* Los combos de esquema de categorias, subcategorias y preguntas se crean una sola vez
           al abrir el simulador: si no se les avisa, no muestran el esquema recien creado. */
        this._EsquemaExamen.NotificarCambioListaEsquemas();
      },
    });
  }

  Agregar() {
    const dialogRef = this.dialog.open(PmpModalAgregarEsquemaComponent, {
      width: '60%',
      panelClass: 'dialog-agregar-esquema',
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe(() => {
      this.ObtenerEsquemas();
    });
  }

  Editar(data: pmpEsquemaExamenResumenDTO) {
    const dialogRef = this.dialog.open(PmpModalAgregarEsquemaComponent, {
      width: '60%',
      panelClass: 'dialog-agregar-esquema',
      data: [data],
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe(() => {
      this.ObtenerEsquemas();
    });
  }

  /**
   * Antes de activar pregunta al backend si el esquema esta completo. Si le falta contenido,
   * muestra que falta y no activa nada.
   */
  Activar(data: pmpEsquemaExamenResumenDTO) {
    if (data.activo == true) {
      return;
    }
    this._EsquemaExamen
      .ObtenerValidacionActivacion(data.idPmpEsquemaExamen)
      .subscribe({
        next: (x: pmpEsquemaExamenValidacionDTO) => {
          if (x == null) {
            return;
          }
          if (x.puedeActivar == false) {
            this.alertaService.customMensaje({
              title: 'No se puede activar el esquema',
              icon: 'warning',
              html: this.ArmarHtmlValidacion(x),
              allowOutsideClick: false,
            });
            return;
          }
          this.ConfirmarActivacion(data, x);
        },
      });
  }

  ConfirmarActivacion(
    data: pmpEsquemaExamenResumenDTO,
    validacion: pmpEsquemaExamenValidacionDTO
  ) {
    this.alertaService
      .customMensaje({
        title: '¿Activar el esquema "' + data.nombre + '"?',
        icon: 'warning',
        html:
          this.ArmarHtmlValidacion(validacion) +
          '<p class="text-start">Las simulaciones nuevas usaran este contenido. ' +
          'Las simulaciones que ya existen conservan el suyo.</p>',
        showCancelButton: true,
        confirmButtonColor: '#4C5FC0',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Aceptar',
        allowOutsideClick: false,
      })
      .then((result) => {
        if (result.isConfirmed) {
          this._EsquemaExamen.Activar(data.idPmpEsquemaExamen).subscribe({
            next: (x: any) => {
              if (x != null && x.exito == false) {
                this.alertaService.mensajeIcon('Aviso', x.mensaje, 'warning');
              } else {
                this.alertaService.mensajeExitoso('El esquema se activó');
              }
            },
            error: (e) => {
              this.alertaService.mensajeError(e);
            },
            complete: () => {
              this.ObtenerEsquemas();
            },
          });
        }
      });
  }

  Eliminar(data: pmpEsquemaExamenResumenDTO) {
    if (data.sePuedeEliminar == false) {
      return;
    }
    this.alertaService.mensajeEliminarTemporal().then((result) => {
      if (result.isConfirmed) {
        this._EsquemaExamen.Eliminar(data.idPmpEsquemaExamen).subscribe({
          next: (x: any) => {
            if (x != null && x.exito == false) {
              this.alertaService.mensajeIcon('Aviso', x.mensaje, 'warning');
            } else {
              this.alertaService.mensajeExitoso('El esquema se eliminó');
            }
          },
          error: (e) => {
            this.alertaService.mensajeError(e);
          },
          complete: () => {
            this.ObtenerEsquemas();
          },
        });
      }
    });
  }

  /** Arma el texto de la validacion con los mensajes que envia el backend. */
  ArmarHtmlValidacion(validacion: pmpEsquemaExamenValidacionDTO): string {
    if (validacion.mensajes == null || validacion.mensajes.length == 0) {
      return '';
    }
    let html = '<ul class="text-start">';
    validacion.mensajes.forEach((mensaje: string) => {
      html = html + '<li>' + mensaje + '</li>';
    });
    return html + '</ul>';
  }
}
