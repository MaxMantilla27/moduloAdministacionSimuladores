import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TipoRespuestaService } from 'src/app/shared/Services/Tipo-Respuesta/tipo-respuesta.service';
import { ModalAgregarSubcategoriaComponent } from './modal-agregar-subcategoria/modal-agregar-subcategoria.component';
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
    private _TipoRespuesta: TipoRespuestaService
  ) { }

  datasource=[]

  ngOnInit(): void {
    this.ObtenerDominioCategorias()
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

  openDialogSub(){
    const dialogRef = this.dialog.open(ModalAgregarSubcategoriaComponent, {
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
