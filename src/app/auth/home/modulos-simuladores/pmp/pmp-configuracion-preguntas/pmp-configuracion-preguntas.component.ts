import { Component, OnChanges, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { filtradoPreguntaDTO } from 'src/app/Models/Pmp/TipoRespuesta';
import { AlertaService } from 'src/app/shared/Services/Alerta/alerta.service';
import { PmpPreguntaService } from 'src/app/shared/Services/Pmp/Pmp-Pregunta/pmp-pregunta.service';
import { PmpTipoRespuestaService } from 'src/app/shared/Services/Pmp/Pmp-Tipo-Respuesta/pmp-tipo-respuesta.service';
import Swal from 'sweetalert2';
import { PmpModalAgregarPreguntasComponent } from './pmp-modal-agregar-preguntas/pmp-modal-agregar-preguntas.component';

@Component({
  selector: 'app-pmp-configuracion-preguntas',
  templateUrl: './pmp-configuracion-preguntas.component.html',
  styleUrls: ['./pmp-configuracion-preguntas.component.scss'],
})
export class PmpConfiguracionPreguntasComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private _Pregunta: PmpPreguntaService,
    public alertaService:AlertaService,

  ) {}
  public isNew=false;
  public datasource: any = [];
  public searchValue = '';
  public visible = false;
  public listOfDisplayData: any;
  public displayedColumns: string[] = [
    'id',
    'enunciado',
    'idcategoria',
    'nombrecategoria',
    'nombresubcategoria',
  ];

  ngOnInit(): void {
    this.ObtenerPreguntasPmp();
  }

  ObtenerPreguntasPmp() {
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
    const dialogRef = this.dialog.open(PmpModalAgregarPreguntasComponent, {
      panelClass: 'dialog-abrir-pregunta',
      data: [isNew, data]
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }

  editarPregunta(data: any) {
    var isNew = false
    console.log(data);
    const dialogRef = this.dialog.open(PmpModalAgregarPreguntasComponent, {
      panelClass: 'dialog-abrir-pregunta',
      data: [isNew, data],
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }

  reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    console.log(this.searchValue)
    this.visible = false;
    this.listOfDisplayData = this.datasource.filter(
      (item: filtradoPreguntaDTO) =>
        item.categoria.indexOf(this.searchValue) !== -1
    );
    console.log(this.listOfDisplayData)
  }

  mostrarMensajeEliminarPregunta(IdPregunta: number) {
    Swal.fire({
      title: '¿Está seguro de eliminar el registro?',
      text: '¡No podrás revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#4C5FC0',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Si, Eliminalo!',
      allowOutsideClick: false
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(IdPregunta)
        this.EliminarPreguntaPmp(IdPregunta);
      }
    });
  }

  EliminarPreguntaPmp(IdPregunta:number){
    this._Pregunta.EliminarPreguntaPmp(IdPregunta).subscribe({
      next: (x: any) => {
      },
      error: (error) => {
        this.alertaService.notificationError(error.message);
      },
      complete: () => {
        this.ObtenerPreguntasPmp();
        this.alertaService.mensajeExitoso();
      },
    });
  }

}
