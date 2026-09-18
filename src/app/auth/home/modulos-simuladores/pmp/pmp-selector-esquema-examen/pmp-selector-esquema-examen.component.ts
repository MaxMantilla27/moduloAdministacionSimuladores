import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { pmpEsquemaExamenDTO } from 'src/app/Models/Pmp/EsquemaExamenDTO';
import { PmpEsquemaExamenService } from 'src/app/shared/Services/Pmp/Pmp-EsquemaExamen/pmp-esquema-examen.service';

/**
 * Combo del esquema del contenido del examen (ECO) que se coloca junto al boton "Añadir" de
 * categorias, subcategorias y preguntas. Al cambiarlo, el servicio avisa a esas pantallas y
 * ellas recargan sus listas con el contenido del esquema elegido.
 *
 * Si todavia no hay ninguno seleccionado, elige el esquema activo, que es el que usan las
 * simulaciones nuevas del alumno.
 *
 * La lista tambien se vuelve a consultar cuando la pantalla de configuracion de esquemas avisa
 * que se creo, edito, activo o elimino uno, porque los tabs del simulador se crean una sola vez
 * al abrir la pantalla y este combo no se volveria a enterar.
 */
@Component({
  selector: 'app-pmp-selector-esquema-examen',
  templateUrl: './pmp-selector-esquema-examen.component.html',
  styleUrls: ['./pmp-selector-esquema-examen.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PmpSelectorEsquemaExamenComponent implements OnInit, OnDestroy {
  constructor(private _EsquemaExamen: PmpEsquemaExamenService) {}

  public listaEsquemas: Array<pmpEsquemaExamenDTO> = [];
  public IdPmpEsquemaExamen = 0;
  private suscripcion = new Subscription();

  ngOnInit(): void {
    this.suscripcion.add(
      this._EsquemaExamen.EsquemaSeleccionado$.subscribe((Id: number) => {
        this.IdPmpEsquemaExamen = Id;
      })
    );
    this.suscripcion.add(
      this._EsquemaExamen.ListaEsquemasActualizada$.subscribe(() => {
        this.ObtenerEsquemas();
      })
    );
    this.ObtenerEsquemas();
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

  ObtenerEsquemas() {
    this._EsquemaExamen.Obtener().subscribe({
      next: (x: any) => {
        this.listaEsquemas = x != null ? x : [];

        /* Solo elige por su cuenta si no hay nada seleccionado o si el esquema que estaba
           seleccionado ya no existe, para no cambiarle el esquema al administrador. */
        const IdSeleccionado = this._EsquemaExamen.IdEsquemaSeleccionado;
        const SigueExistiendo =
          this.listaEsquemas.find(
            (y) => y.idPmpEsquemaExamen == IdSeleccionado
          ) != undefined;
        if (IdSeleccionado != 0 && SigueExistiendo) {
          return;
        }

        const activo = this.listaEsquemas.find((y) => y.activo == true);
        if (activo != undefined) {
          this._EsquemaExamen.SeleccionarEsquema(activo.idPmpEsquemaExamen);
        } else if (this.listaEsquemas.length > 0) {
          this._EsquemaExamen.SeleccionarEsquema(
            this.listaEsquemas[0].idPmpEsquemaExamen
          );
        }
      },
    });
  }

  CambiarEsquema(IdPmpEsquemaExamen: number) {
    this._EsquemaExamen.SeleccionarEsquema(IdPmpEsquemaExamen);
  }
}
