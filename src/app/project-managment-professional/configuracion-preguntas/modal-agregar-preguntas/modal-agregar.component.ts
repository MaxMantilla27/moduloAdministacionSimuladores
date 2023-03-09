import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-agregar',
  templateUrl: './modal-agregar.component.html',
  styleUrls: ['./modal-agregar.component.scss']
})
export class ModalAgregarPreguntasComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalAgregarPreguntasComponent>
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
