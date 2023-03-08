import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-agregar-subcategoria',
  templateUrl: './modal-agregar-subcategoria.component.html',
  styleUrls: ['./modal-agregar-subcategoria.component.scss']
})
export class ModalAgregarSubcategoriaComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalAgregarSubcategoriaComponent>
) {}

  loading:any
  loader:any

  ngOnInit(): void {
  }

  Cancelar(){
    this.dialogRef.close();
  }

}
