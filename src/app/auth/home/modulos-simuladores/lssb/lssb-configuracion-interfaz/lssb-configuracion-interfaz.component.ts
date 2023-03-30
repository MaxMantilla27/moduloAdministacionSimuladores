import { Component, OnInit } from '@angular/core';
import { LssbTipoRespuestaService } from 'src/app/shared/Services/Lssb/Lssb-Tipo-Respuesta/lssb-tipo-respuesta.service';
import { actualizarParametrosNivel, actualizarInterfaz } from 'src/app/Models/Lssb/LssbTipoRespuesta';
import { LssbConfiguracionSimuladorService } from 'src/app/shared/Services/Lssb/Lssb-Configuracion-Simulador/lssb-configuracion-simulador.service';

@Component({
  selector: 'app-lssb-configuracion-interfaz',
  templateUrl: './lssb-configuracion-interfaz.component.html',
  styleUrls: ['./lssb-configuracion-interfaz.component.scss']
})
export class LssbConfiguracionInterfazComponent implements OnInit {

  constructor(
    private _TipoRespuesta: LssbTipoRespuestaService,
    private _LssbConfiguracionSimulador: LssbConfiguracionSimuladorService
    ) {}

  public ParametrosNivel: any=[]
  public ConfiguracionSimulador:any;
  public displayedColumns: string[] = ['minimo', 'maximo', 'intentos', 'nivel'];
  public seleccionado = false;
  public searchValue = '';
  public visible = false;
  public listOfDisplayData: any = [];
  public editId: string | null = null;
  public idMandar: number
  public fileToUpload: File | null = null;
  public video=''
  public logo=''
  public porcentaje=0
  public acceso=0
  public selectedFiles?: FileList;
  public file:any;
  public filestatus=false
  public fileErrorMsg=''
  public nombrefile='Ningún archivo seleccionado'

  public envio: actualizarParametrosNivel={
    id : 0,
    fechaModificacion: new Date(),
    valorMinimo: 0,
    valorMaximo: 0
  }
  public actualizar: actualizarInterfaz={
    id : 0,
    urlVideo : '',
    logo : '',
    porcentajeMinimoAprobacion : 0,
    vigenciaAcceso : 0,
    file:new File([],'')
  }

  ngOnInit(): void {
    this.ObtenerConfiguracionSimulador();
    this.ObtenerParametrosNivel();
  }
  ObtenerConfiguracionSimulador() {
    this._LssbConfiguracionSimulador.LssbObtenerConfiguracionSimulador().subscribe({
      next: (x: any) => {
        this.ConfiguracionSimulador = x;
        this.video = this.ConfiguracionSimulador.urlVideo
        this.acceso = this.ConfiguracionSimulador.vigenciaAcceso
        this.porcentaje = this.ConfiguracionSimulador.porcentajeMinimoAprobacion
        this.logo = this.ConfiguracionSimulador.logo

      },
    });
  }
  ObtenerParametrosNivel() {
    this._TipoRespuesta.ObtenerParametrosNivelEntity().subscribe({
      next: (x: any) => {
        this.ParametrosNivel = x;
        this.listOfDisplayData = this.ParametrosNivel
        this.ParametrosNivel.forEach((d:any)=> {
          d.select=false;
          d.valorMinimo=d.valorMinimo
          d.valorMaximo=d.valorMaximo
        });
        this.listOfDisplayData.forEach((d:any)=> {
          d.select=false;
          d.valorMinimo=d.valorMinimo
          d.valorMaximo=d.valorMaximo
        });
      },
    });
  }

  editar(index:number) {

    this.listOfDisplayData.forEach((d:any)=> {
      d.select=false;
    });
    this.listOfDisplayData[index].select = true;
  }

  cancelar(index:number) {
    this.listOfDisplayData[index].select = false;
    this.listOfDisplayData[index].valorMinimo = this.listOfDisplayData[index].valorMinimo;
    this.listOfDisplayData[index].valorMaximo = this.listOfDisplayData[index].valorMaximo;
  }

  aceptar(index:number) {
    this.listOfDisplayData[index].select = false;
    this.listOfDisplayData[index].valorMinimo = this.listOfDisplayData[index].valorMinimo;
    this.listOfDisplayData[index].valorMaximo = this.listOfDisplayData[index].valorMaximo;

    this.envio.id = this.listOfDisplayData[index].id,
      this.envio.valorMinimo= this.listOfDisplayData[index].valorMinimo,
      this.envio.valorMaximo= this.listOfDisplayData[index].valorMaximo
      this.Actualizar()
  }
  handleFile(event:any): void {

    this.fileToUpload = event.target.files
}

getFileDetails(event:any) {
  for (var i = 0; i < event.target.files.length; i++) {
    this.filestatus=true
    var name = event.target.files[i].name;
    this.nombrefile=name;
    var type = event.target.files[i].type;
    var size = event.target.files[i].size;
    var modifiedDate = event.target.files[i].lastModifiedDate;
    var extencion=name.split('.')[name.split('.').length-1]
    if( Math.round((size/1024)/1024)>150){
      this.fileErrorMsg='El tama�o del archivo no debe superar los 25 MB'
      this.filestatus=false
    }
    this.selectedFiles = event.target.files;
  }
}
ActualizarInterfaz(){
  this.actualizar.id = this.ConfiguracionSimulador.id
  this.actualizar.urlVideo = this.video
  this.actualizar.logo = this.logo
  this.actualizar.porcentajeMinimoAprobacion = this.porcentaje
  this.actualizar.vigenciaAcceso = this.acceso
  if(this.selectedFiles){
    const file: File | null = this.selectedFiles.item(0);
    if (file) {
      this.actualizar.file = file;
    }
  }
  console.log(this.actualizar)
  this._LssbConfiguracionSimulador.LssbActualizarConfiguracionSimulador(this.actualizar).subscribe({
    next: (x) => {
    },
    error:(e)=>{

    },
    complete: () => {

    },
  });
}
  Actualizar() {
    this._TipoRespuesta.actualizarParametrosNivel(this.envio).subscribe({
      next: (x) => {
      },
      error:(e)=>{

      },
      complete: () => {

      },
    });
  }



}
