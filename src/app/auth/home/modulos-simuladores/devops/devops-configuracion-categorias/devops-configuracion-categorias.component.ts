import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { filtro } from 'src/app/Models/Devops/DevopsTipoRespuesta';
import { AlertaService } from 'src/app/shared/Services/Alerta/alerta.service';
import { DevopsCategoriasService } from 'src/app/shared/Services/Devops/Devops-Categorias/devops-categorias.service';
import { DevopsTareaService } from 'src/app/shared/Services/Devops/Devops-Tarea/devops-tarea.service';
import { DevopsModalAgregarCategoriaComponent } from './devops-modal-agregar-categoria/devops-modal-agregar-categoria.component';

@Component({
  selector: 'app-devops-configuracion-categorias',
  templateUrl: './devops-configuracion-categorias.component.html',
  styleUrls: ['./devops-configuracion-categorias.component.scss']
})
export class DevopsConfiguracionCategoriasComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombre', 'cantidad', 'proporcion'];

  constructor(
    public dialog: MatDialog,
    private _TipoDominio: DevopsCategoriasService,
    private _tarea: DevopsTareaService,
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
    const dialogRef = this.dialog.open(DevopsModalAgregarCategoriaComponent, {
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
    const dialogRef = this.dialog.open(DevopsModalAgregarCategoriaComponent, {
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
    const dialogRef = this.dialog.open(DevopsModalAgregarCategoriaComponent, {
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