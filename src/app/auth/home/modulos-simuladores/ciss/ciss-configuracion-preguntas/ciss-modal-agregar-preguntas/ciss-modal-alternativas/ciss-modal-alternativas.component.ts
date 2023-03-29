import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CissPreguntaRespuestaService } from 'src/app/shared/Services/Ciss/Ciss-PreguntaRespuesta/ciss-pregunta-respuesta.service';

@Component({
  selector: 'app-ciss-modal-alternativas',
  templateUrl: './ciss-modal-alternativas.component.html',
  styleUrls: ['./ciss-modal-alternativas.component.scss']
})
export class CissModalAlternativasComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CissModalAlternativasComponent>,
    private _alternativa: CissPreguntaRespuestaService,
    private formBuilder: FormBuilder,


  ) { }

  loading:any
  loader:any;
  listaAlternativasEnvio:any = []
  //data:any;
  formAlternativa: FormGroup = this.formBuilder.group({
    Id : 0,
    Respuesta: '',
    Correcto : false,
    Puntaje: 0,
    UrlRetroalimentacionVideo: '',
    Retroalimentacion: '',
    UrlImagenArchivo: new File([], ''),
  });

  public selectedFilesRespuesta?: FileList;
  public fileRespuesta: any;
  public filestatusRespuesta = false;
  public fileErrorMsgRespuesta = '';
  public nombrefileRespuesta = 'Ningún archivo seleccionado';


  ngOnInit(): void {
    console.log(this.data)
    if(this.data!=undefined)
    {
      this.formAlternativa.get('Id')?.setValue(this.data[0].idAlternativa)
      this.formAlternativa.get('Respuesta')?.setValue(this.data[0].respuesta)
      this.formAlternativa.get('Correcto')?.setValue(this.data[0].correcto)
      this.formAlternativa.get('Puntaje')?.setValue(this.data[0].puntaje)
      this.formAlternativa.get('UrlRetroalimentacionVideo')?.setValue(this.data[0].urlRetroalimentacionVideo)
      this.formAlternativa.get('Retroalimentacion')?.setValue(this.data[0].retroalimentacion)

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
    if(this.selectedFilesRespuesta){
      const file: File | null = this.selectedFilesRespuesta.item(0);
      if (file) {
        this.formAlternativa.get('UrlImagenArchivo')?.setValue(file)
      }
    }
    console.log(this.formAlternativa.value)

    this.listaAlternativasEnvio=this.formAlternativa.value

    console.log(this.listaAlternativasEnvio)
    this.dialogRef.close(this.listaAlternativasEnvio);
  }

  getFileDetailsRespuesta(event: any) {
    for (var i = 0; i < event.target.files.length; i++) {
      this.filestatusRespuesta = true;
      var name = event.target.files[i].name;
      this.nombrefileRespuesta = name;
      var type = event.target.files[i].type;
      var size = event.target.files[i].size;
      var modifiedDate = event.target.files[i].lastModifiedDate;
      var extencion = name.split('.')[name.split('.').length - 1];
      if (Math.round(size / 1024 / 1024) > 150) {
        this.fileErrorMsgRespuesta = 'El tamanio del archivo no debe superar los 25 MB';
        this.filestatusRespuesta = false;
      }
      this.selectedFilesRespuesta = event.target.files;
      console.log(this.selectedFilesRespuesta)
      // console.log ('Name: ' + name + "\n" +
      //   'Type: ' + extencion + "\n" +
      //   'Last-Modified-Date: ' + modifiedDate + "\n" +
      //   'Size: ' + Math.round((size/1024)/1024) + " MB");
    }
  }
}
