import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AlertaService } from 'src/app/shared/Services/Alerta/alerta.service';
import {
  actualizarTipoRespuestaDTO,
  filtradoPreguntaDTO,
  filtro,
} from 'src/app/Models/Pmp/TipoRespuesta';
import { MatDialog } from '@angular/material/dialog';
import { PacpModalAgregarCategoriaComponent } from './pacp-modal-agregar-categoria/pacp-modal-agregar-categoria.component';
import { PacpCategoriasService } from 'src/app/shared/Services/Pacp/Pacp-Categorias/pacp-categorias.service';
import { PacpTareaService } from 'src/app/shared/Services/Pacp/Pacp-Tarea/pacp-tarea.service';


@Component({
  selector: 'app-pacp-configuracion-categorias',
  templateUrl: './pacp-configuracion-categorias.component.html',
  styleUrls: ['./pacp-configuracion-categorias.component.scss']
})
export class PacpConfiguracionCategoriasComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombre', 'cantidad', 'proporcion'];

  constructor(
    public dialog: MatDialog,
    private _TipoDominio: PacpCategoriasService,
    private _tarea: PacpTareaService,
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


  ngOnInit(): void {
    this.ObtenerCategorias();
  }

  openDialogSub() {
    const dialogRef = this.dialog.open(PacpModalAgregarCategoriaComponent, {
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
        console.log(x)
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


  agregar() {
    this.isNew = false;
    const dialogRef = this.dialog.open(PacpModalAgregarCategoriaComponent, {
      width: '60%',
      panelClass: 'dialog-agregar-categoria',
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.ObtenerCategorias();
    });
  }



  EditarCategoria(data: any) {
    console.log(data);
    // Editar Categoria
    this.isNew = false;
    const dialogRef = this.dialog.open(PacpModalAgregarCategoriaComponent, {
      width: '60%',
      panelClass: 'dialog-agregar-categoria',
      data: [data],
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.ObtenerCategorias();
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

 

}
