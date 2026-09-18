import { Component, OnInit } from '@angular/core';
import { actualizarInterfaz } from 'src/app/Models/Pmp/TipoRespuesta';
import { PmpConfiguracionSimuladorService } from 'src/app/shared/Services/Pmp/Pmp-Configuracion-Simulador/pmp-configuracion-simulador.service';
import { AlertaService } from 'src/app/shared/Services/Alerta/alerta.service';

/**
 * Configuracion de interfaz del simulador PMP: lo que es global a todos los esquemas del
 * contenido del examen (video tutorial, logotipo y vigencia de acceso).
 *
 * El porcentaje minimo de aprobacion y los rangos de nivel ya no se editan aqui: pertenecen a
 * cada esquema y se editan en "Configuracion de esquemas". El porcentaje se sigue enviando
 * porque el contrato del endpoint no cambio, pero el backend ya no lo guarda.
 */
@Component({
  selector: 'app-pmp-configuracion-interfaz',
  templateUrl: './pmp-configuracion-interfaz.component.html',
  styleUrls: ['./pmp-configuracion-interfaz.component.scss']
})
export class PmpConfiguracionInterfazComponent implements OnInit {

  constructor(
    private _PmpConfiguracionSimulador: PmpConfiguracionSimuladorService,
    private alertaService:AlertaService
    ) {}

  public ConfiguracionSimulador:any;
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
  }

  ObtenerConfiguracionSimulador() {
    this._PmpConfiguracionSimulador.PmpObtenerConfiguracionSimulador().subscribe({
      next: (x: any) => {
        this.ConfiguracionSimulador = x;
        this.video = this.ConfiguracionSimulador.urlVideo
        this.acceso = this.ConfiguracionSimulador.vigenciaAcceso
        /* Viene del esquema activo; se conserva solo para devolverlo tal cual al guardar. */
        this.porcentaje = this.ConfiguracionSimulador.porcentajeMinimoAprobacion
        this.logo = this.ConfiguracionSimulador.logo
      },
    });
  }

  handleFile(event:any): void {
    this.fileToUpload = event.target.files
  }

  getFileDetails(event:any) {
    for (var i = 0; i < event.target.files.length; i++) {
      this.filestatus=true
      var name = event.target.files[i].name;
      this.nombrefile=name;
      var size = event.target.files[i].size;
      if( Math.round((size/1024)/1024)>150){
        this.fileErrorMsg='El tamaño del archivo no debe superar los 25 MB'
        this.filestatus=false
      }
      this.selectedFiles = event.target.files;
    }
  }

  ActualizarInterfaz(){
    this.actualizar.id = this.ConfiguracionSimulador.id
    if(this.video!=null){
      this.actualizar.urlVideo = this.video
    }
    else{
      this.actualizar.urlVideo = ''
    }
    this.actualizar.logo = this.logo
    this.actualizar.porcentajeMinimoAprobacion = this.porcentaje
    this.actualizar.vigenciaAcceso = this.acceso
    if(this.selectedFiles){
      const file: File | null = this.selectedFiles.item(0);
      if (file) {
        this.actualizar.file = file;
      }
    }
    this._PmpConfiguracionSimulador.PmpActualizarConfiguracionSimulador(this.actualizar).subscribe({
      next: (x: any) => {
        this.alertaService.mensajeExitoso();
      },
      error: (error) => {
        this.alertaService.notificationError(error.message);
      },
      complete: () => {

      },
    });
  }
}
