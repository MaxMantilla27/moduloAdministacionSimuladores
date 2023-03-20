import { Component, OnChanges, OnInit } from '@angular/core';
import { MatDialog as MatDialog } from '@angular/material/dialog';
import { filtradoPreguntaDTO } from 'src/app/Models/TipoRespuesta';
import { PmpPreguntaService } from 'src/app/shared/Services/Pmp-Pregunta/pmp-pregunta.service';
import { PmpTipoRespuestaService } from 'src/app/shared/Services/Pmp-Tipo-Respuesta/pmp-tipo-respuesta.service';
import { PmpModalAgregarPreguntasComponent } from './pmp-modal-agregar-preguntas/pmp-modal-agregar-preguntas.component';

@Component({
  selector: 'app-pmp-configuracion-preguntas',
  templateUrl: './pmp-configuracion-preguntas.component.html',
  styleUrls: ['./pmp-configuracion-preguntas.component.scss'],
})
export class PmpConfiguracionPreguntasComponent implements OnInit, OnChanges {
  constructor(
    public dialog: MatDialog,
    private _Pregunta: PmpPreguntaService
  ) {}

  datasource: any = [];
  searchValue = '';
  visible = false;
  listOfDisplayData: any = [];

  displayedColumns: string[] = [
    'id',
    'enunciado',
    'idcategoria',
    'nombrecategoria',
    'nombresubcategoria',
  ];


  ngOnChanges(): void {
    this.ObtenerPregunta();
  }

  ngOnInit(): void {
    this.ObtenerPregunta();
  }

  openDialog(data: any) {
    console.log(data);
    //Editar Pregunta
    const dialogRef = this.dialog.open(PmpModalAgregarPreguntasComponent, {
      width: '1000px',
      maxHeight: '90vh',
      panelClass: 'dialog-gestor',
      data: data,
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }


  agregar() {
    const dialogRef = this.dialog.open(PmpModalAgregarPreguntasComponent, {
      width: '1000px',
      maxHeight: '90vh',
      panelClass: 'dialog-gestor',

    });

    dialogRef.afterClosed().subscribe((result) => {});
  }


  eliminar(index: number) {}

  ObtenerPregunta() {
    this._Pregunta.ObtenerPregunta().subscribe({
      next: (x: any) => {
        this.datasource = x;
        this.listOfDisplayData = this.datasource;
        console.log(x);
      },
    });
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
}
