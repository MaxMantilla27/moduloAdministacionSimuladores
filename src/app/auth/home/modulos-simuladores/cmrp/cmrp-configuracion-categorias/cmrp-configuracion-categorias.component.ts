import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CmrpModalAgregarSubcategoriaComponent } from './cmrp-modal-agregar-subcategoria/cmrp-modal-agregar-subcategoria.component';
import { CmrpModalAgregarCategoriaComponent } from './cmrp-modal-agregar-categoria/cmrp-modal-agregar-categoria.component';
import { CmrpCategoriasService } from 'src/app/shared/Services/Cmrp/Cmrp-Categorias/cmrp-categorias.service';
import { CmrpTareaService } from 'src/app/shared/Services/Cmrp/Cmrp-Tarea/cmrp-tarea.service';
import { AlertaService } from 'src/app/shared/Services/Alerta/alerta.service';
import { filtro } from 'src/app/Models/Cmrp/CmrpTipoRespuesta';

@Component({
  selector: 'app-cmrp-configuracion-categorias',
  templateUrl: './cmrp-configuracion-categorias.component.html',
  styleUrls: ['./cmrp-configuracion-categorias.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CmrpConfiguracionCategoriasComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nombre', 'cantidad', 'proporcion'];

  constructor(
    public dialog: MatDialog,
    private _TipoDominio: CmrpCategoriasService,
    private _tarea: CmrpTareaService,
    private alertaService: AlertaService
  ) {}

  public listaCategorias: any;
  public listaSubCategorias: any;
  public CantTotalPreguntasPorExamenCategoria = 0;
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
    const dialogRef = this.dialog.open(CmrpModalAgregarSubcategoriaComponent, {
      width: '1000px',
      maxHeight: '90vh',
      panelClass: 'dialog-gestor',
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
      },
    });
  }

  agregar() {
    this.isNew = false;
    const dialogRef = this.dialog.open(CmrpModalAgregarCategoriaComponent, {
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
    const dialogRef = this.dialog.open(CmrpModalAgregarSubcategoriaComponent, {
      width: '60%',
      panelClass: 'dialog-agregar-categoria',
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
    const dialogRef = this.dialog.open(CmrpModalAgregarCategoriaComponent, {
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
    const dialogRef = this.dialog.open(CmrpModalAgregarSubcategoriaComponent, {
      width: '60%',
      panelClass: 'dialog-agregar-categoria',
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
