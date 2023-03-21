import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pmp-modal-agregar-subcategoria',
  templateUrl: './pmp-modal-agregar-subcategoria.component.html',
  styleUrls: ['./pmp-modal-agregar-subcategoria.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class PmpModalAgregarSubcategoriaComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PmpModalAgregarSubcategoriaComponent>
) {}

  loading:any
  loader:any

  ngOnInit(): void {
  }

  Cancelar(){
    this.dialogRef.close();
  }

}
