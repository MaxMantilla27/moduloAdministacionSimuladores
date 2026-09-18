import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { PmpModalAgregarSubcategoriaComponent } from './pmp-modal-agregar-subcategoria/pmp-modal-agregar-subcategoria.component';
import { PmpModalAgregarCategoriaComponent } from './pmp-modal-agregar-categoria/pmp-modal-agregar-categoria.component';
import { PmpCategoriasService } from 'src/app/shared/Services/Pmp/Pmp-Categorias/pmp-categorias.service';
import { PmpTareaService } from 'src/app/shared/Services/Pmp/Pmp-Tarea/pmp-tarea.service';
import { AlertaService } from 'src/app/shared/Services/Alerta/alerta.service';
import { filtro } from 'src/app/Models/Pmp/TipoRespuesta';
import { PmpEsquemaExamenService } from 'src/app/shared/Services/Pmp/Pmp-EsquemaExamen/pmp-esquema-examen.service';

@Component({
  selector: 'app-pmp-configuracion-categorias',
  templateUrl: './pmp-configuracion-categorias.component.html',
  styleUrls: ['./pmp-configuracion-categorias.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PmpConfiguracionCategoriasComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['id', 'nombre', 'cantidad', 'proporcion'];

  constructor(
    public dialog: MatDialog,
    private _TipoDominio: PmpCategoriasService,
    private _tarea: PmpTareaService,
    private _EsquemaExamen: PmpEsquemaExamenService,
    private alertaService: AlertaService
  ) {}

  public listaCategorias: any;
  public listaSubCategorias: any;
  public CantTotalPreguntasPorExamenCategoria = 0;
  public CantTotalPreguntasPorExamenSubCategoria = 0;
  public isNew = false;
  /** Esquema del contenido del examen (ECO) que el administrador tiene seleccionado. */
  public IdPmpEsquemaExamen = 0;
  private suscripcion = new Subscription();

  //------Nombre Categoria -------//
  searchValue = '';
  visible = false;
  listOfDisplayData: any = [];

  //---- Id Categoria ---------///

  searchValue2 = '';
  visible2 = false;

  //------Id SubCategoria -------//
  searchValue3 = '';
  visible3 = false;
  listOfDisplayData2: any = [];

  //---- Nombre Subcategoria ---------///

  searchValue4 = '';
  visible4 = false;

  //---- Categoria ---------///

  searchValue5 = '';
  visible5 = false;

  ngOnInit(): void {
    this.suscripcion.add(
      this._EsquemaExamen.EsquemaSeleccionado$.subscribe((Id: number) => {
        if (Id > 0) {
          this.IdPmpEsquemaExamen = Id;
          this.ObtenerCategorias();
          this.ObtenerSubCategorias();
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

  openDialogSub() {
    const dialogRef = this.dialog.open(PmpModalAgregarSubcategoriaComponent, {
      width: '60%',
      panelClass: 'dialog-agregar-sub-categoria',
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }

  ObtenerCategorias() {
    this.CantTotalPreguntasPorExamenCategoria = 0;
    this._TipoDominio.ObtenerCategorias(this.IdPmpEsquemaExamen).subscribe({
      next: (x: any) => {
        this.listaCategorias = x != null ? x : [];
        this.listOfDisplayData = this.listaCategorias;
        this.listaCategorias.forEach((y: any) => {
          this.CantTotalPreguntasPorExamenCategoria =
            this.CantTotalPreguntasPorExamenCategoria +
            y.cantidadPreguntasPorExamen;
        });
        this.listaCategorias.forEach((y: any) => {
          /* Un esquema recien creado no tiene preguntas por examen todavia. */
          var auxProporcion =
            this.CantTotalPreguntasPorExamenCategoria > 0
              ? (y.cantidadPreguntasPorExamen /
                  this.CantTotalPreguntasPorExamenCategoria) *
                100
              : 0;
          y.proporcion = Math.round(auxProporcion);
        });
      },
    });
  }

  ObtenerSubCategorias() {
    this.CantTotalPreguntasPorExamenSubCategoria=0;
    this._tarea.ObtenerTareas(this.IdPmpEsquemaExamen).subscribe({
      next: (x: any) => {
        this.listaSubCategorias = x != null ? x : [];
        this.listOfDisplayData2 = this.listaSubCategorias
        this.listaSubCategorias.forEach((y: any) => {
          this.CantTotalPreguntasPorExamenSubCategoria =
            this.CantTotalPreguntasPorExamenSubCategoria +
            y.cantidadPreguntasPorExamen;
        });
        /* La proporcion de una subcategoria se mide dentro de su propia categoria. */
        this.listaSubCategorias.forEach((y: any) => {
          var totalCategoria = 0;
          this.listaSubCategorias.forEach((z: any) => {
            if (z.idSimuladorPmpDominio == y.idSimuladorPmpDominio) {
              totalCategoria = totalCategoria + z.cantidadPreguntasPorExamen;
            }
          });
          var auxProporcion =
            totalCategoria > 0
              ? (y.cantidadPreguntasPorExamen / totalCategoria) * 100
              : 0;
          y.proporcion = Math.round(auxProporcion);
        });
      },
    });
  }

  agregar() {
    this.isNew = false;
    const dialogRef = this.dialog.open(PmpModalAgregarCategoriaComponent, {
      width: '60%',
      panelClass: 'dialog-agregar-categoria',
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.ObtenerCategorias();
    });
  }

  agregarSubCategoria() {
    this.isNew = false;
    const dialogRef = this.dialog.open(PmpModalAgregarSubcategoriaComponent, {
      width: '60%',
      panelClass: 'dialog-agregar-sub-categoria',
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.ObtenerSubCategorias();
    });
  }

  EditarCategoria(data: any) {
    console.log(data);
    // Editar Categoria
    this.isNew = false;
    const dialogRef = this.dialog.open(PmpModalAgregarCategoriaComponent, {
      width: '60%',
      panelClass: 'dialog-agregar-categoria',
      data: [data],
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.ObtenerCategorias();
    });
  }

  EditarSubCategoria(data: any) {
    console.log(data);
    // Editar Categoria
    this.isNew = false;
    const dialogRef = this.dialog.open(PmpModalAgregarSubcategoriaComponent, {
      width: '60%',
      panelClass: 'dialog-agregar-sub-categoria',
      data: [data],
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.ObtenerSubCategorias();
    });
  }

  EliminarCategoria(data: any) {
    this.alertaService.mensajeEliminarTemporal().then((result) => {
      if (result.isConfirmed) {
        this._TipoDominio.EliminarCategoria(data.id).subscribe({
          next: (x) => {},
          error: (e) => {},
          complete: () => {
            this.ObtenerCategorias();
          },
        });
      }
    });
  }

  EliminarSubCategoria(data: any) {
    this.alertaService.mensajeEliminarTemporal().then((result) => {
      if (result.isConfirmed) {
        this._tarea.EliminarCategoria(data.id).subscribe({
          next: (x) => {},
          error: (e) => {},
          complete: () => {
            this.ObtenerSubCategorias();
          },
        });
      }
    });
  }

  reset(): void {
    this.listOfDisplayData = this.listaCategorias;
    this.searchValue = '';
    this.search();
  }

  search(): void {
    console.log(this.searchValue);
    this.visible = false;
    this.listOfDisplayData = this.listaCategorias.filter(
      (item: filtro) =>
        item.nombre &&
        item.nombre != null &&
        item.nombre.indexOf(this.searchValue) !== -1
    );
    console.log(this.listOfDisplayData);
  }

  reset2(): void {
    this.listOfDisplayData = this.listaCategorias;
    this.searchValue2 = '';
    this.search();
  }

  search2(): void {
    console.log(this.searchValue2);
    this.visible = false;
    this.listOfDisplayData = this.listaCategorias.filter(
      (item: filtro) =>
        item.id.toString().indexOf(this.searchValue2) !== -1
    );
    console.log(this.listOfDisplayData);
  }

  reset3(): void {
    this.listOfDisplayData2 = this.listaSubCategorias;
    this.searchValue3 = '';
    this.search();
  }

  search3(): void {
    console.log(this.searchValue3);
    this.visible3 = false;
    this.listOfDisplayData2 = this.listaSubCategorias.filter(
      (item: filtro) =>
        item.nombre &&
        item.nombre != null &&
        item.nombre.indexOf(this.searchValue3) !== -1
    );
  }

  reset4(): void {
    this.listOfDisplayData2 = this.listaSubCategorias;
    this.searchValue4 = '';
    this.search();
  }

  search4(): void {
    console.log(this.searchValue4);
    this.visible4 = false;
    this.listOfDisplayData2 = this.listaSubCategorias.filter(
      (item: filtro) =>
        item.id.toString().indexOf(this.searchValue4) !== -1
    );
  }

  reset5(): void {
    this.listOfDisplayData2 = this.listaSubCategorias;
    this.searchValue5 = '';
    this.search();
  }

  search5(): void {
    console.log(this.searchValue5);
    this.visible5 = false;
    this.listOfDisplayData2 = this.listaSubCategorias.filter(
      (item: filtro) =>
        item.categoria &&
        item.categoria != null &&
        item.categoria.indexOf(this.searchValue5) !== -1
    );

  }
}
