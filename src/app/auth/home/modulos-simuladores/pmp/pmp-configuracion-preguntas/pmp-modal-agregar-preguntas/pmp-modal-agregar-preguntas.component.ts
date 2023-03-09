import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pmp-modal-agregar-preguntas',
  templateUrl: './pmp-modal-agregar-preguntas.component.html',
  styleUrls: ['./pmp-modal-agregar-preguntas.component.scss']
})
export class PmpModalAgregarPreguntasComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PmpModalAgregarPreguntasComponent>
  ) { }

  displayedColumns: string[] = ['id', 'alternativa', 'correcto', 'puntaje', 'retroalimentacion'];


  loading:any
  loader:any

  datasource: any

  ngOnInit(): void {
  }

  Cancelar(){
    this.dialogRef.close();
  }



}
