import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PmpModalAgregarPreguntasComponent } from './pmp-modal-agregar-preguntas/pmp-modal-agregar-preguntas.component';

@Component({
  selector: 'app-pmp-configuracion-preguntas',
  templateUrl: './pmp-configuracion-preguntas.component.html',
  styleUrls: ['./pmp-configuracion-preguntas.component.scss']
})
export class PmpConfiguracionPreguntasComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
  ) { }

  datasource=[]

  displayedColumns: string[] = ['id', 'enunciado', 'idcategoria', 'nombrecategoria', 'nombresubcategoria'];

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(PmpModalAgregarPreguntasComponent, {
      width: '1000px',
      maxHeight: '90vh',
      panelClass: 'dialog-gestor',
    });

    dialogRef.afterClosed().subscribe((result) => {
    });
  }

}
