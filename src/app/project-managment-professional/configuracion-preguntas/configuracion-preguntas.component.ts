import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalAgregarPreguntasComponent } from './modal-agregar-preguntas/modal-agregar.component';

@Component({
  selector: 'app-configuracion-preguntas',
  templateUrl: './configuracion-preguntas.component.html',
  styleUrls: ['./configuracion-preguntas.component.scss']
})
export class ConfiguracionPreguntasComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
  ) { }

  datasource=[]

  displayedColumns: string[] = ['id', 'enunciado', 'idcategoria', 'nombrecategoria', 'nombresubcategoria'];

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(ModalAgregarPreguntasComponent, {
      width: '1000px',
      maxHeight: '90vh',
      panelClass: 'dialog-gestor',
    });

    dialogRef.afterClosed().subscribe((result) => {
    });
  }

}
