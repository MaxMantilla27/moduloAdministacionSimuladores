import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators  } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CapmPreguntaRespuestaEnvioDTO } from 'src/app/Models/Capm/CapmPreguntaRespuestaDTO';
import { CapmPreguntaRespuestaService } from 'src/app/shared/Services/Capm/Capm-Pregunta-Respuesta/capm-pregunta-respuesta.service';

@Component({
  selector: 'app-capm-modal-alternativas',
  templateUrl: './capm-modal-alternativas.component.html',
  styleUrls: ['./capm-modal-alternativas.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CapmModalAlternativasComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CapmModalAlternativasComponent>,
    private _alternativa: CapmPreguntaRespuestaService,
    private formBuilder: FormBuilder,

  ) { }

  loading:any
  loader:any;
  listaAlternativasEnvio:any = []
  public TieneRetroalimentacionUnica=this.data[2];
  //data:any;
  public formAlternativa: FormGroup = this.formBuilder.group({
    Id :new FormControl(0),
    Respuesta:new FormControl('',Validators.required),
    Correcto:new FormControl(false),
    Puntaje:new FormControl(0,Validators.required),
    UrlRetroalimentacionVideo:new FormControl({value:'',disabled:this.TieneRetroalimentacionUnica}),
    Retroalimentacion:new FormControl({value:'',disabled:this.TieneRetroalimentacionUnica}),
    UrlImagenArchivo: new File([], '')
  });

  public selectedFilesRespuesta?: FileList;
  public fileRespuesta: any;
  public filestatusRespuesta = false;
  public fileErrorMsgRespuesta = '';
  public nombrefileRespuesta = 'Ningún archivo seleccionado';
  public isDisabled=true

  public ActualizarAlternativaDTO: CapmPreguntaRespuestaEnvioDTO={
    Id:0,
    Respuesta:'',
    Correcto:false,
    Puntaje:0,
    UrlVideo:'',
    Explicacion:'',
    ImagenArchivo: new File([], '')
  }

  ngOnInit(): void {
    this.formAlternativa.reset();
    this.TieneRetroalimentacionUnica=this.data[2]
    if(this.data[0]!=undefined && this.data[1]==true)
    {
      this.formAlternativa.patchValue({
        Id:this.data[0].idAlternativa,
        Respuesta:this.data[0].respuesta,
        Correcto:this.data[0].correcto,
        Puntaje:this.data[0].puntaje,
        UrlRetroalimentacionVideo:this.data[0].urlRetroalimentacionVideo,
        Retroalimentacion:this.data[0].retroalimentacion
      })
    }
    if(this.data[0]!=undefined && this.data[1]==false)
    {
      this.formAlternativa.patchValue({
        Id:0,
        Respuesta:this.data[0].Respuesta,
        Correcto:this.data[0].Correcto,
        Puntaje:this.data[0].Puntaje,
        UrlRetroalimentacionVideo:this.data[0].UrlRetroalimentacionVideo,
        Retroalimentacion:this.data[0].Retroalimentacion
      })
    }
  }

  EnviarRegistrosAlternativas(){
    if(this.selectedFilesRespuesta){
      const file: File | null = this.selectedFilesRespuesta.item(0);
      if (file) {
        this.formAlternativa.get('UrlImagenArchivo')?.setValue(file)
      }
    }
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
    }
  }
  Cancelar(){
    this.dialogRef.close();
  }
  ActualizarAlternativa(){
    if(this.selectedFilesRespuesta){
      const file: File | null = this.selectedFilesRespuesta.item(0);
      if (file) {
        this.formAlternativa.get('UrlImagenArchivo')?.setValue(file)
        this.ActualizarAlternativaDTO.ImagenArchivo=this.formAlternativa.get('UrlImagenArchivo')?.value
      }
    }
    this.listaAlternativasEnvio=this.formAlternativa.value
    this.ActualizarAlternativaDTO.Id=this.formAlternativa.get('Id')?.value
    this.ActualizarAlternativaDTO.Respuesta=this.formAlternativa.get('Respuesta')?.value
    this.ActualizarAlternativaDTO.Correcto=this.formAlternativa.get('Correcto')?.value
    this.ActualizarAlternativaDTO.Puntaje=this.formAlternativa.get('Puntaje')?.value
    this.ActualizarAlternativaDTO.UrlVideo=this.formAlternativa.get('UrlRetroalimentacionVideo')?.value
    this.ActualizarAlternativaDTO.Explicacion=this.formAlternativa.get('Retroalimentacion')?.value
    console.log(this.ActualizarAlternativa)
    this._alternativa.ActualizarCapmPreguntaRespuesta(this.ActualizarAlternativaDTO).subscribe({
      next: (x:any) => {
        console.log(x)
      },
      error: (error:any) => {
      },
      complete: () => {
        this.dialogRef.close(true);
      },
    })
  }
}
