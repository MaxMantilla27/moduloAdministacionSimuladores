import { Component, OnChanges, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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


  ngOnChanges(): void {
    this.ObtenerPregunta();
  }

  ngOnInit(): void {
    this.ObtenerPregunta();
  }

  openDialog(data: any) {
    var agregar = false
    console.log(data);
    //Editar Pregunta
    const dialogRef = this.dialog.open(PmpModalAgregarPreguntasComponent, {
      width: '1500px',
      maxHeight: '90vh',
      panelClass: 'dialog-gestor',
      data: [agregar, data],
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }


  agregar() {
    var agregar = true
    const dialogRef = this.dialog.open(PmpModalAgregarPreguntasComponent, {
      width: '1000px',
      maxHeight: '90vh',
      panelClass: 'dialog-gestor',
      data: agregar
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }


  eliminar(index: number) {}

  ObtenerPregunta() {
    this._Pregunta.ObtenerPregunta().subscribe({
      next: (x: any) => {
        this.datasource = x;
        this.listOfDisplayData = this.datasource;
      },
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
}
