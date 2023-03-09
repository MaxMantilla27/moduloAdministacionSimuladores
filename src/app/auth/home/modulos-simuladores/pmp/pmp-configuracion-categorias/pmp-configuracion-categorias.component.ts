import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PmpTipoRespuestaService } from 'src/app/shared/Services/Pmp-Tipo-Respuesta/pmp-tipo-respuesta.service';
import { PmpModalAgregarSubcategoriaComponent } from './pmp-modal-agregar-subcategoria/pmp-modal-agregar-subcategoria.component';
import { PmpModalAgregarCategoriaComponent } from './pmp-modal-agregar-categoria/pmp-modal-agregar-categoria.component';

@Component({
  selector: 'app-pmp-configuracion-categorias',
  templateUrl: './pmp-configuracion-categorias.component.html',
  styleUrls: ['./pmp-configuracion-categorias.component.scss']
})
export class PmpConfiguracionCategoriasComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombre', 'cantidad', 'proporcion'];


  constructor(
    public dialog: MatDialog,
    private _TipoRespuesta: PmpTipoRespuestaService
  ) { }

  datasource=[]

  ngOnInit(): void {
    this.ObtenerDominioCategorias()
  }

  openDialog() {
    const dialogRef = this.dialog.open(PmpModalAgregarCategoriaComponent, {
      width: '1000px',
      maxHeight: '90vh',
      panelClass: 'dialog-gestor',
    });

    dialogRef.afterClosed().subscribe((result) => {
    });
  }

  openDialogSub(){
    const dialogRef = this.dialog.open(PmpModalAgregarSubcategoriaComponent, {
      width: '1000px',
      maxHeight: '90vh',
      panelClass: 'dialog-gestor',
    });

    dialogRef.afterClosed().subscribe((result) => {
    });
  }


  ObtenerDominioCategorias() {
    this._TipoRespuesta.ObtenerDominioCategorias().subscribe({
      next: (x: any) => {
        this.datasource = x;
        console.log(x)

      },
    });
  }

}
