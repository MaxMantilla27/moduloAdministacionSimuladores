import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { filtradoPreguntaDTO } from 'src/app/Models/Tog/TogTipoRespuesta';
import { AlertaService } from 'src/app/shared/Services/Alerta/alerta.service';
import { TogPreguntaService } from 'src/app/shared/Services/Tog/Tog-Pregunta/tog-pregunta.service';
import Swal from 'sweetalert2';
import { TogModalAgregarPreguntasComponent } from './tog-modal-agregar-preguntas/tog-modal-agregar-preguntas.component';

@Component({
  selector: 'app-tog-configuracion-preguntas',
  templateUrl: './tog-configuracion-preguntas.component.html',
  styleUrls: ['./tog-configuracion-preguntas.component.scss'],
})
export class TogConfiguracionPreguntasComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private _Pregunta: TogPreguntaService,
    public alertaService:AlertaService,
  ){

  }
  datasource: any = [];
  searchValue = '';
  visible = false;
  searchValue2 = '';
  visible2 = false;
  searchValue3 = '';
  visible3 = false;
  searchValue4 = '';
  visible4 = false;
  searchValue5 = '';
  visible5 = false;
  listOfDisplayData: any = [];



  displayedColumns: string[] = [
    'id',
    'enunciado',
    'idcategoria',
    'nombrecategoria',
    'nombresubcategoria',
  ];

  ngOnInit(): void {
    this.ObtenerPreguntasTog();
  }

  ObtenerPreguntasTog() {
    this.listOfDisplayData=undefined;
    this._Pregunta.ObtenerPregunta().subscribe({
      next: (x: any) => {
        this.datasource = x;
        this.listOfDisplayData = this.datasource;
      },
    });
  }

  agregarPregunta() {
    var isNew = true;
    var IdPregunta=undefined;
    const dialogRef = this.dialog.open(TogModalAgregarPreguntasComponent, {
      panelClass: 'dialog-abrir-pregunta',
      data: [isNew, IdPregunta]
    });
    dialogRef.afterClosed().subscribe((Recargar:boolean) => {
      if(Recargar==true){
        this.ObtenerPreguntasTog();
      }
    });
  }

  editarPregunta(IdPregunta: any) {
    var isNew = false
    console.log(IdPregunta);
    const dialogRef = this.dialog.open(TogModalAgregarPreguntasComponent, {
      panelClass: 'dialog-abrir-pregunta',
      data: [isNew, IdPregunta],
    });
    dialogRef.afterClosed().subscribe((Recargar:boolean) => {
      if(Recargar==true){
        this.ObtenerPreguntasTog();
      }
    });
  }

  reset(): void {
    this.listOfDisplayData = this.datasource
    this.searchValue = '';
    this.searchValue2 = '';
    this.searchValue3 = '';
    this.searchValue4 = '';
    this.searchValue5 = '';
    this.search();
  }

  search(): void {
    console.log(this.searchValue)
    this.visible = false;
    this.listOfDisplayData = this.datasource.filter(
      (item: filtradoPreguntaDTO) =>
        (item.categoria && item.categoria!=null && item.categoria.indexOf(this.searchValue) !== -1)
    );
    console.log(this.listOfDisplayData)
  }

  search2(): void {
    console.log(this.searchValue)
    this.visible2 = false;
    this.listOfDisplayData = this.datasource.filter(
      (item: filtradoPreguntaDTO) =>
        item.id.toString().indexOf(this.searchValue2) !== -1
    );
  }
  search3(): void {
    console.log(this.searchValue)
    this.visible3 = false;
    this.listOfDisplayData = this.datasource.filter(
      (item: filtradoPreguntaDTO) =>
        (item.enunciado && item.enunciado!=null && item.enunciado.indexOf(this.searchValue3) !== -1)
    );
    console.log(this.listOfDisplayData)
  }


  search4(): void {
    console.log(this.searchValue)
    this.visible4 = false;
    this.listOfDisplayData = this.datasource.filter(
      (item: filtradoPreguntaDTO) =>
       (item.idCategoria && item.idCategoria!=null && item.idCategoria.toString().indexOf(this.searchValue4) !== -1)
    );
    console.log(this.listOfDisplayData)
  }

  search5(): void {
    console.log(this.searchValue)
    this.visible5 = false;
    this.listOfDisplayData = this.datasource.filter(
      (item: filtradoPreguntaDTO) =>
        (item.subcategoria && item.subcategoria!=null && item.subcategoria.indexOf(this.searchValue5) !== -1)
    );
    console.log(this.listOfDisplayData)
  }

  mostrarMensajeEliminarPregunta(IdPregunta: number) {
    Swal.fire({
      title: 'Est seguro de eliminar el registro?',
      text: 'No podrás revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#4C5FC0',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminalo!',
      allowOutsideClick: false
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(IdPregunta)
        this.EliminarPreguntaTog(IdPregunta);
      }
    });
  }

  EliminarPreguntaTog(IdPregunta:number){
    this._Pregunta.EliminarPreguntaTog(IdPregunta).subscribe({
      next: (x: any) => {
      },
      error: (error:any) => {
        this.alertaService.notificationError(error.message);
      },
      complete: () => {
        this.ObtenerPreguntasTog();
        this.alertaService.mensajeExitoso();
      },
    });
  }

}