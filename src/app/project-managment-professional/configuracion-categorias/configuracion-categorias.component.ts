import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalAgregarComponent } from './modal-agregar/modal-agregar.component';

@Component({
  selector: 'app-configuracion-categorias',
  templateUrl: './configuracion-categorias.component.html',
  styleUrls: ['./configuracion-categorias.component.scss']
})
export class ConfiguracionCategoriasComponent implements OnInit {
  
  displayedColumns: string[] = ['id', 'nombre', 'cantidad', 'proporcion'];

  constructor(
    public dialog: MatDialog,
  ) { }

  datasource=[]

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(ModalAgregarComponent, {
      width: '1000px',
      maxHeight: '90vh',
      panelClass: 'dialog-gestor',
    });

    dialogRef.afterClosed().subscribe((result) => {
    });
  }

}
