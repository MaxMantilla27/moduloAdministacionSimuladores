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

  public listaCategorias:any;
  public CantTotalPreguntasPorExamenCategoria=0;
  public isNew=false;

  ngOnInit(): void {
    this.ObtenerDominioCategorias()
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
    this.CantTotalPreguntasPorExamenCategoria=0;
    this._TipoRespuesta.ObtenerDominioCategorias().subscribe({
      next: (x: any) => {
        console.log(x)
        this.listaCategorias = x;
        this.listaCategorias.forEach((y:any)=>{
          this.CantTotalPreguntasPorExamenCategoria=this.CantTotalPreguntasPorExamenCategoria+y.cantidadPreguntasPorExamen
        })
        this.listaCategorias.forEach((y:any)=>{
          var auxProporcion = (y.cantidadPreguntasPorExamen/this.CantTotalPreguntasPorExamenCategoria)*100
          y.proporcion = Math.round(auxProporcion)
        })
      },
    });
  }
  EditarCategoria(data:any){
    console.log(data)
    if(data==undefined){
      //Agregar Categoria
      this.isNew=true;
      const dialogRef = this.dialog.open(PmpModalAgregarCategoriaComponent, {
        width: '1000px',
        maxHeight: '90vh',
        panelClass: 'dialog-gestor',
      });

      dialogRef.afterClosed().subscribe((result) => {
      });
    }
    else{
      // Editar Categoria
      this.isNew=false;
      const dialogRef = this.dialog.open(PmpModalAgregarCategoriaComponent, {
        width: '1000px',
        maxHeight: '90vh',
        panelClass: 'dialog-gestor',
        data:[data]
      });

      dialogRef.afterClosed().subscribe((result) => {
      });
    }
  }
  EliminarCategoria(data:any){

  }
}
