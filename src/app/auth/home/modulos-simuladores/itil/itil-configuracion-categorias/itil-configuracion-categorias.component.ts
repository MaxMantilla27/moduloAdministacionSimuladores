import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ItilModalAgregarSubcategoriaComponent } from './itil-modal-agregar-subcategoria/itil-modal-agregar-subcategoria.component';
import { ItilModalAgregarCategoriaComponent } from './itil-modal-agregar-categoria/itil-modal-agregar-categoria.component';
import { ItilCategoriasService } from 'src/app/shared/Services/Itil/Itil-Categorias/itil-categorias.service';
import { ItilTareaService } from 'src/app/shared/Services/Itil/Itil-Tarea/itil-tarea.service';
import { AlertaService } from 'src/app/shared/Services/Alerta/alerta.service';
import { filtro } from 'src/app/Models/Itil/ItilTipoRespuesta';

@Component({
  selector: 'app-itil-configuracion-categorias',
  templateUrl: './itil-configuracion-categorias.component.html',
  styleUrls: ['./itil-configuracion-categorias.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ItilConfiguracionCategoriasComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nombre', 'cantidad', 'proporcion'];

  constructor(
    public dialog: MatDialog,
    private _TipoDominio: ItilCategoriasService,
    private _tarea: ItilTareaService,
    private alertaService: AlertaService
  ) {}

  public listaCategorias: any;
  public listaSubCategorias: any;
  public CantTotalPreguntasPorExamenCategoria = 0;
  public CantTotalPreguntasPorExamenSubCategoria = 0;
  public isNew = false;

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
    this.ObtenerCategorias();
    this.ObtenerSubCategorias();
  }

  openDialogSub() {
    const dialogRef = this.dialog.open(ItilModalAgregarSubcategoriaComponent, {
      width: '60%',
      panelClass: 'dialog-agregar-sub-categoria',
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }

  ObtenerCategorias() {
    this.CantTotalPreguntasPorExamenCategoria = 0;
    this._TipoDominio.ObtenerCategorias().subscribe({
      next: (x: any) => {
        this.listaCategorias = x;
        this.listOfDisplayData = this.listaCategorias;
        this.listaCategorias.forEach((y: any) => {
          this.CantTotalPreguntasPorExamenCategoria =
            this.CantTotalPreguntasPorExamenCategoria +
            y.cantidadPreguntasPorExamen;
        });
        this.listaCategorias.forEach((y: any) => {
          var auxProporcion =
            (y.cantidadPreguntasPorExamen /
              this.CantTotalPreguntasPorExamenCategoria) *
            100;
          y.proporcion = Math.round(auxProporcion);
        });
      },
    });
  }

  ObtenerSubCategorias() {
    this._tarea.ObtenerTareas().subscribe({
      next: (x: any) => {
        console.log(x);
        this.listaSubCategorias = x;
        this.listOfDisplayData2 = this.listaSubCategorias
        this.listaSubCategorias.forEach((y: any) => {
          this.CantTotalPreguntasPorExamenSubCategoria =
            this.CantTotalPreguntasPorExamenSubCategoria +
            y.cantidadPreguntasPorExamen;
        });
        this.listaSubCategorias.forEach((y: any) => {
          var auxProporcion =
            (y.cantidadPreguntasPorExamen /
              this.CantTotalPreguntasPorExamenSubCategoria) *
            100;
          y.proporcion = Math.round(auxProporcion);
        });
      },
    });
  }

  agregar() {
    this.isNew = false;
    const dialogRef = this.dialog.open(ItilModalAgregarCategoriaComponent, {
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
    const dialogRef = this.dialog.open(ItilModalAgregarSubcategoriaComponent, {
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
    const dialogRef = this.dialog.open(ItilModalAgregarCategoriaComponent, {
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
    const dialogRef = this.dialog.open(ItilModalAgregarSubcategoriaComponent, {
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
