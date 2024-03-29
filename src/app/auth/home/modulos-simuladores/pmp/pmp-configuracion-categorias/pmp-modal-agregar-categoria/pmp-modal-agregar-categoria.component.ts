import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pmp-modal-agregar-categoria',
  templateUrl: './pmp-modal-agregar-categoria.component.html',
  styleUrls: ['./pmp-modal-agregar-categoria.component.scss']
})
export class PmpModalAgregarCategoriaComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PmpModalAgregarCategoriaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,

  ) { }

  loading:any
  loader:any;
  formCategoria: FormGroup = this.formBuilder.group({
    Id: 0,
    NombreCategoria: '',
    Leyenda: '',
    CantidadPreguntasTotales: 0,
    CantidadPreguntasExamen: 0,
    Proporcion: 0,
    TieneSubCategoria: 0,
    Logo: 0
  });
  public nombrefile='Ningún archivo seleccionado'

  public selectedFiles?: FileList;
  public file:any;
  public filestatus=false
  public fileErrorMsg=''

  ngOnInit(): void {
    console.log(this.data)
    if(this.data!=undefined)
    {
      this.formCategoria.get('Id')?.setValue(this.data[0].id)
      this.formCategoria.get('NombreCategoria')?.setValue(this.data[0].nombre)
      this.formCategoria.get('Leyenda')?.setValue(this.data[0].leyenda)
      this.formCategoria.get('CantidadPreguntasTotales')?.setValue(this.data[0].cantidadTotal)
      this.formCategoria.get('CantidadPreguntasExamen')?.setValue(this.data[0].cantidadPreguntasPorExamen)
      this.formCategoria.get('Proporcion')?.setValue(this.data[0].proporcion)
      this.formCategoria.get('TieneSubCategoria')?.setValue(this.data[0].tieneSubCategoria)
      this.formCategoria.get('Logo')?.setValue(this.data[0].imgLogo)
      console.log(this.formCategoria)
    }
    else{
      this.formCategoria.reset();
    }
  }

  Cancelar(){
    this.dialogRef.close();
  }
  obtenerErrorCampoNombre(val: string) {
    var campo = this.formCategoria.get(val);
    if (campo!.hasError('required')) {
      if(val=='NombreCategoria'){
        return 'Ingresa el nombre';
      }
      if(val=='Leyenda'){
        return 'Ingresa una leyenda';
      }
      if(val=='contraNuevaRepeat'){
        return 'Confirma tu nueva contraseña';
      }
    }

    return '';
  }
}
  