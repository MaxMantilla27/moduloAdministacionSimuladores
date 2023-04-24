import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators  } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TogPreguntaRespuestaEnvioAgregarNivel2DTO, TogPreguntaRespuestaEnvioNivel2DTO } from 'src/app/Models/Tog/TogPreguntaRespuestaDTO';
import { TogPreguntaRespuestaService } from 'src/app/shared/Services/Tog/Tog-Pregunta-Respuesta/tog-pregunta-respuesta.service';

@Component({
  selector: 'app-tog-modal-alternativas-nivel-dos',
  templateUrl: './tog-modal-alternativas-nivel-dos.component.html',
  styleUrls: ['./tog-modal-alternativas-nivel-dos.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TogModalAlternativasNivelDosComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<TogModalAlternativasNivelDosComponent>,
    private _alternativa: TogPreguntaRespuestaService,
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
    OpcionRespuesta:new FormControl('',Validators.required),
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

  public ActualizarAlternativaDTO: TogPreguntaRespuestaEnvioNivel2DTO={
    Id:0,
    Respuesta:'',
    IdSimuladorTogNivel:0,
    OpcionRespuesta:'',
    Puntaje:0,
    UrlVideo:'',
    Explicacion:'',
    ImagenArchivo: new File([], '')
  }

  public AgregarAlternativaDTO: TogPreguntaRespuestaEnvioAgregarNivel2DTO = {
    Id:0,
    Respuesta:'',
    IdSimuladorTogNivel:0,
    OpcionRespuesta:'',
    Puntaje:0,
    UrlVideo:'',
    Explicacion:'',
    ImagenArchivo: new File([], ''),
    IdSimuladorTogPregunta: 0,
  }

  ngOnInit(): void {
    this.formAlternativa.reset();
    this.TieneRetroalimentacionUnica=this.data[2]
    console.log(this.data)
    if(this.data[0]!=undefined && this.data[1]==true )
    {
      this.formAlternativa.patchValue({
        Id:this.data[0].idAlternativa,
        Respuesta:this.data[0].respuesta,
        OpcionRespuesta:this.data[0].opcionRespuesta,
        Puntaje:this.data[0].puntaje,
        UrlRetroalimentacionVideo:this.data[0].urlRetroalimentacionVideo,
        Retroalimentacion:this.data[0].retroalimentacion
      })
    }
    if(this.data[0]!=undefined && this.data[1]==false && this.data[0].idPregunta==undefined)
    {
      this.formAlternativa.patchValue({
        Id:0,
        Respuesta:this.data[0].Respuesta,
        OpcionRespuesta:this.data[0].OpcionRespuesta,
        Puntaje:this.data[0].Puntaje,
        UrlRetroalimentacionVideo:this.data[0].UrlRetroalimentacionVideo,
        Retroalimentacion:this.data[0].Retroalimentacion
      })
    }
    if(this.data[0]!=undefined && this.data[1]==false && this.data[0].idPregunta!=undefined)
    {
      this.formAlternativa.patchValue({
        Id:this.data[0].idAlternativa,
        Respuesta:this.data[0].respuesta,
        OpcionRespuesta:this.data[0].opcionRespuesta,
        Puntaje:this.data[0].puntaje,
        UrlRetroalimentacionVideo:this.data[0].urlRetroalimentacionVideo,
        Retroalimentacion:this.data[0].retroalimentacion
      })
    }
  }

  EnviarNuevo(){
    if(this.selectedFilesRespuesta){
      const file: File | null = this.selectedFilesRespuesta.item(0);
      if (file) {
        this.formAlternativa.get('UrlImagenArchivo')?.setValue(file)
      }
    }
    this.listaAlternativasEnvio=this.formAlternativa.value
    console.log(this.listaAlternativasEnvio)
    this.dialogRef.close(this.listaAlternativasEnvio);


    console.log("este es nuevo")

  }


  ActualizarNuevo(){
    console.log(this.listaAlternativasEnvio)
    if(this.selectedFilesRespuesta){
      const file: File | null = this.selectedFilesRespuesta.item(0);
      if (file) {
        this.formAlternativa.get('UrlImagenArchivo')?.setValue(file)
      }
    }
    this.listaAlternativasEnvio=this.formAlternativa.value
    console.log(this.listaAlternativasEnvio)
    this.dialogRef.close(this.listaAlternativasEnvio);


    console.log("este es nuevo")
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



    if(this.selectedFilesRespuesta){
      const file: File | null = this.selectedFilesRespuesta.item(0);
      if (file) {
        this.formAlternativa.get('UrlImagenArchivo')?.setValue(file)
        this.ActualizarAlternativaDTO.ImagenArchivo=this.formAlternativa.get('UrlImagenArchivo')?.value
      }
    }

    //-----Prueba
    this.listaAlternativasEnvio=this.formAlternativa.value
    this.AgregarAlternativaDTO.Id=0
    this.AgregarAlternativaDTO.Respuesta=this.formAlternativa.get('Respuesta')?.value
    this.AgregarAlternativaDTO.IdSimuladorTogNivel=2,
    this.AgregarAlternativaDTO.OpcionRespuesta=this.formAlternativa.get('OpcionRespuesta')?.value
    this.AgregarAlternativaDTO.Puntaje=this.formAlternativa.get('Puntaje')?.value
    this.AgregarAlternativaDTO.UrlVideo=this.formAlternativa.get('UrlRetroalimentacionVideo')?.value
    this.AgregarAlternativaDTO.Explicacion=this.formAlternativa.get('Retroalimentacion')?.value
    if(this.data[3]== undefined ){
      this.AgregarAlternativaDTO.IdSimuladorTogPregunta = 0
    }
    else{
      this.AgregarAlternativaDTO.IdSimuladorTogPregunta = this.data[3]
    }


    this._alternativa.AgregarTogPreguntaRespuestaNivel2(this.AgregarAlternativaDTO).subscribe({
      next: (x:any) => {
        console.log(x)

      },
      error: (error:any) => {

      },
      complete: () => {
        this.dialogRef.close(this.listaAlternativasEnvio);
      },
    })
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
    console.log("actualizarviejo")
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
    this.ActualizarAlternativaDTO.IdSimuladorTogNivel=2,
    this.ActualizarAlternativaDTO.OpcionRespuesta=this.formAlternativa.get('OpcionRespuesta')?.value
    this.ActualizarAlternativaDTO.Puntaje=this.formAlternativa.get('Puntaje')?.value
    this.ActualizarAlternativaDTO.UrlVideo=this.formAlternativa.get('UrlRetroalimentacionVideo')?.value
    this.ActualizarAlternativaDTO.Explicacion=this.formAlternativa.get('Retroalimentacion')?.value
    console.log(this.ActualizarAlternativa)
    this._alternativa.ActualizarTogPreguntaRespuestaNivel2(this.ActualizarAlternativaDTO).subscribe({
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