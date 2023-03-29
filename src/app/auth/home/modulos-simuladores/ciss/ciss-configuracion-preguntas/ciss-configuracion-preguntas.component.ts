import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { filtradoPreguntaDTO } from 'src/app/Models/Ciss/CissTipoRespuesta';
import { AlertaService } from 'src/app/shared/Services/Alerta/alerta.service';
import { CissPreguntaService } from 'src/app/shared/Services/Ciss/Ciss-Pregunta/ciss-pregunta.service';
import Swal from 'sweetalert2';
import { CissModalAgregarPreguntasComponent } from './ciss-modal-agregar-preguntas/ciss-modal-agregar-preguntas.component';

@Component({
  selector: 'app-ciss-configuracion-preguntas',
  templateUrl: './ciss-configuracion-preguntas.component.html',
  styleUrls: ['./ciss-configuracion-preguntas.component.scss']
})
export class CissConfiguracionPreguntasComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private _Pregunta: CissPreguntaService,
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
  ];

  ngOnInit(): void {
    this.ObtenerPreguntasCiss();
  }

  ObtenerPreguntasCiss() {
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
    var data=undefined;
    const dialogRef = this.dialog.open(CissModalAgregarPreguntasComponent, {
      panelClass: 'dialog-abrir-pregunta',
      data: [isNew, data]
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.ObtenerPreguntasCiss
    });
  }

  editarPregunta(data: any) {
    var isNew = false
    console.log(data);
    const dialogRef = this.dialog.open(CissModalAgregarPreguntasComponent, {
      panelClass: 'dialog-abrir-pregunta',
      data: [isNew, data],
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.ObtenerPreguntasCiss()
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
      title: '�Est� seguro de eliminar el registro?',
      text: '�No podr�s revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#4C5FC0',
      cancelButtonColor: '#d33',
      confirmButtonText: '�Si, Eliminalo!',
      allowOutsideClick: false
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(IdPregunta)
        this.EliminarPreguntaCiss(IdPregunta);
      }
    });
  }

  EliminarPreguntaCiss(IdPregunta:number){
    this._Pregunta.EliminarPreguntaCiss(IdPregunta).subscribe({
      next: (x: any) => {
      },
      error: (error:any) => {
        this.alertaService.notificationError(error.message);
      },
      complete: () => {
        this.ObtenerPreguntasCiss();
        this.alertaService.mensajeExitoso();
      },
    });
  }
}
