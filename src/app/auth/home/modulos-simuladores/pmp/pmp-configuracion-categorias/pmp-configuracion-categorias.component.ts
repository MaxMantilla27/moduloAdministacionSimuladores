import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PmpModalAgregarSubcategoriaComponent } from './pmp-modal-agregar-subcategoria/pmp-modal-agregar-subcategoria.component';
import { PmpModalAgregarCategoriaComponent } from './pmp-modal-agregar-categoria/pmp-modal-agregar-categoria.component';
import { PmpCategoriasService } from 'src/app/shared/Services/Pmp-Categorias/pmp-categorias.service';

@Component({
  selector: 'app-pmp-configuracion-categorias',
  templateUrl: './pmp-configuracion-categorias.component.html',
  styleUrls: ['./pmp-configuracion-categorias.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class PmpConfiguracionCategoriasComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombre', 'cantidad', 'proporcion'];


  constructor(
    public dialog: MatDialog,
    private _TipoDominio: PmpCategoriasService
  ) { }

  public listaCategorias:any;
  public CantTotalPreguntasPorExamenCategoria=0;
  public isNew=false;

  ngOnInit(): void {
    this.ObtenerCategorias()
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


  ObtenerCategorias() {
    this.CantTotalPreguntasPorExamenCategoria=0;
    this._TipoDominio.ObtenerCategorias().subscribe({
      next: (x: any) => {
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
    // Editar Categoria
    this.isNew=false;
    const dialogRef = this.dialog.open(PmpModalAgregarCategoriaComponent, {
       width: '60%',
      panelClass: 'dialog-agregar-categoria',
      data:[data],
      disableClose: true
    });

    dialogRef.afterClosed().subscribe((result) => {
    });
    // if(data==undefined){
    //   //Agregar Categoria
    //   this.isNew=true;
    //   const dialogRef = this.dialog.open(PmpModalAgregarCategoriaComponent, {
    //     panelClass: 'dialog-agregar-categoria',
    //   });

    //   dialogRef.afterClosed().subscribe((result) => {
    //   });
    // }
    // else{

    // }
  }
  EliminarCategoria(data:any){

  }
}
