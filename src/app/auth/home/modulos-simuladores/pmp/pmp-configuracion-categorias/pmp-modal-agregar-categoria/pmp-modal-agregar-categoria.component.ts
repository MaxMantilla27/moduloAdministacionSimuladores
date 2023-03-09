import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pmp-modal-agregar-categoria',
  templateUrl: './pmp-modal-agregar-categoria.component.html',
  styleUrls: ['./pmp-modal-agregar-categoria.component.scss']
})
export class PmpModalAgregarCategoriaComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PmpModalAgregarCategoriaComponent>
  ) { }

  loading:any
  loader:any

  ngOnInit(): void {
  }

  Cancelar(){
    this.dialogRef.close();
  }

}
