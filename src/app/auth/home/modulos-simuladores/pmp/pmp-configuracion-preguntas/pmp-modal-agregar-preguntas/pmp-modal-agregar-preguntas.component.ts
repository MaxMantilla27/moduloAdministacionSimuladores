import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { PmpTipoRespuestaService } from 'src/app/shared/Services/Pmp-Tipo-Respuesta/pmp-tipo-respuesta.service';

@Component({
  selector: 'app-pmp-modal-agregar-preguntas',
  templateUrl: './pmp-modal-agregar-preguntas.component.html',
  styleUrls: ['./pmp-modal-agregar-preguntas.component.scss']
})
export class PmpModalAgregarPreguntasComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PmpModalAgregarPreguntasComponent>,
    private _TipoRespuesta: PmpTipoRespuestaService
  ) { }

  displayedColumns: string[] = ['id', 'alternativa', 'correcto', 'puntaje', 'retroalimentacion'];


  loading:any
  loader:any

  datasource: any
  listaCategorias:any
  listaSubCategorias:any

  categoria:any
  subcategoria:any

  
  envio:any = [
    {
      idDominio: 0
    }
  ]

  ngOnInit(): void {
    this.ObtenerCombo()
  }

  Cancelar(){
    this.dialogRef.close();
  }

  
  ObtenerCombo() {
    this._TipoRespuesta.ObtenerComboDominio().subscribe({
      next: (x: any) => {
        this.listaCategorias = x;
        console.log(x)
      },
    });
  }

  seleccionar(e:any){
    console.log(e)
    console.log(this.categoria)
    this.envio[0].idDominio = this.categoria
    console.log(this.envio)
    this.ObtenerComboSubcategoria()
  }


  ObtenerComboSubcategoria() {
    console.log(this.envio[0])
    this._TipoRespuesta.ObtenerSubcategoriaCombo(this.envio).subscribe({
      next: (x: any) => {
        this.listaSubCategorias = x;
        console.log(x)
      },
    });
  }
  
}
