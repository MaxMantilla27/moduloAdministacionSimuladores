import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup  } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PmpPreguntaRespuestaService } from 'src/app/shared/Services/Pmp-PreguntaRespuesta/pmp-preguntaRespuesta.service';

@Component({
  selector: 'app-modal-alternativas',
  templateUrl: './modal-alternativas.component.html',
  styleUrls: ['./modal-alternativas.component.scss']
})
export class ModalAlternativasComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ModalAlternativasComponent>,
    private _alternativa: PmpPreguntaRespuestaService,
    private formBuilder: FormBuilder,
    
  ) { }

  loading:any
  loader:any;
  listaAlternativasEnvio:any = []
  //data:any;
  formAlternativa: FormGroup = this.formBuilder.group({
    id: 0,
    respuesta: '',
    correcto: true,
    puntaje: 0,
    urlRetroalimentacionVideo: '',
    retroalimentacion: '',
    imagen: ''
  });
  
  ngOnInit(): void {
    console.log(this.data)
    if(this.data!=undefined)
    {
      this.formAlternativa.get('Id')?.setValue(this.data[0].idAlternativa)
      this.formAlternativa.get('respuesta')?.setValue(this.data[0].respuesta)
      this.formAlternativa.get('correcto')?.setValue(this.data[0].correcto)
      this.formAlternativa.get('puntaje')?.setValue(this.data[0].puntaje)
      this.formAlternativa.get('urlRetroalimentacionVideo')?.setValue(this.data[0].urlRetroalimentacionVideo)
      this.formAlternativa.get('retroalimentacion')?.setValue(this.data[0].retroalimentacion)
      this.formAlternativa.get('imagen')?.setValue(this.data[0].imagen)
      console.log(this.formAlternativa)
    }
    else{
      this.formAlternativa.reset();
    }
  }

  obtenerErrorCampoNombre(val: string) {
    var campo = this.formAlternativa.get(val);
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

  Cancelar(){
    this.dialogRef.close();
  }

  Enviar(){
    console.log(this.formAlternativa.value)

    this.listaAlternativasEnvio=this.formAlternativa.value
    console.log(this.listaAlternativasEnvio)
    this.dialogRef.close(this.listaAlternativasEnvio);
  }

}
