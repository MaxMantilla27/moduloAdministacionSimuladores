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
  //data:any;
  formAlternativa: FormGroup = this.formBuilder.group({
    Id: 0,
    Alternativa: '',
    Correcto: true,
    Puntaje: 0,
    UrlVideo: '',
    Texto: '',
    Imagen: ''
  });
  
  ngOnInit(): void {
    console.log(this.data)
    if(this.data!=undefined)
    {
      this.formAlternativa.get('Id')?.setValue(this.data[0].idAlternativa)
      this.formAlternativa.get('Alternativa')?.setValue(this.data[0].respuesta)
      this.formAlternativa.get('Correcto')?.setValue(this.data[0].correcto)
      this.formAlternativa.get('Puntaje')?.setValue(this.data[0].puntaje)
      this.formAlternativa.get('UrlVideo')?.setValue(this.data[0].urlRetroalimentacionVideo)
      this.formAlternativa.get('Texto')?.setValue(this.data[0].retroalimentacion)
      this.formAlternativa.get('Imagen')?.setValue(this.data[0].imagen)
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

}
