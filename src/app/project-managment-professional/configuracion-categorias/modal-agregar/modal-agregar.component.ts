import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-agregar',
  templateUrl: './modal-agregar.component.html',
  styleUrls: ['./modal-agregar.component.scss']
})
export class ModalAgregarComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalAgregarComponent>
  ) { }

  loading:any
  loader:any

  ngOnInit(): void {
  }

  Cancelar(){
    this.dialogRef.close();
  }

}
