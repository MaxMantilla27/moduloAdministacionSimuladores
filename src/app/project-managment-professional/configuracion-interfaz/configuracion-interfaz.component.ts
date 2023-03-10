import { Component, OnInit } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { TipoRespuestaService } from 'src/app/shared/Services/Tipo-Respuesta/tipo-respuesta.service';
import { actualizarInterfaz, actualizarParamtrosNivel, actualizarTipoRespuestaDTO } from 'src/app/Models/TipoRespuesta';

@Component({
  selector: 'app-configuracion-interfaz',
  templateUrl: './configuracion-interfaz.component.html',
  styleUrls: ['./configuracion-interfaz.component.scss']
})
export class ConfiguracionInterfazComponent implements OnInit {

  constructor(private _TipoRespuesta: TipoRespuestaService) {}

  datasource: any=[]
  displayedColumns: string[] = ['minimo', 'maximo', 'intentos', 'nivel'];
  seleccionado = false;
  searchValue = '';
  visible = false;
  listOfDisplayData: any = [];
  editId: string | null = null;
  idMandar: number
  fileToUpload: File | null = null;
  video=''
  logo=''
  porcentaje=0
  acceso=0
  

  ngOnInit(): void {
    this.ObtenerTipoRespuesta()
    this.ObtenerConfiguracionSimuladorEntity() 
  }

  handleFile(event:any): void {

      this.fileToUpload = event.target.files  
 }


    
  public envio: actualizarParamtrosNivel={
    id : 0,
    valorMinimo: 0,
    valorMaximo: 0
  }

  
  public actualizar: actualizarInterfaz={
    Id : 0,
    UrlVideo : '',
    Logo : '',
    PorcentajeMinimoAprobacion : 0,
    VigenciaAcceso : 0,
    UsuarioModificacion : '',
    FechaModificacion : new Date()
  }

  ActualizarInterfaz(){
    this.actualizar.Id = this.datasource[0].id
    this.actualizar.UrlVideo = this.video
    this.actualizar.Logo = this.logo
    this.actualizar.PorcentajeMinimoAprobacion = this.porcentaje
    this.actualizar.VigenciaAcceso = this.acceso
    console.log(this.fileToUpload)
    console.log(this.actualizar)
  }

  ObtenerTipoRespuesta() {
    this._TipoRespuesta.ObtenerParametrosNivelEntity().subscribe({
      next: (x: any) => {
        this.datasource = x;
        console.log(x)

        this.listOfDisplayData = this.datasource
        
        this.datasource.forEach((d:any)=> {
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

  ObtenerConfiguracionSimuladorEntity() {
    this._TipoRespuesta.ObtenerConfiguracionSimuladorEntity().subscribe({
      next: (x: any) => {
        this.datasource = x;
        console.log(x)
        this.video = x[0].urlVideo
        this.acceso = x[0].vigenciaAcceso
        this.porcentaje = x[0].porcentajeMinimoAprobacion 

        console.log(this.acceso)
      },
    });
  }

    ActualizarConfiguracionSimulador() {
    this._TipoRespuesta.actualizarConfiguracionSimulador(this.actualizar).subscribe({
      next: (x) => {
      },
      error:(e)=>{
     
      },
      complete: () => {

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
      // this.Actualizar() 
  }


  
  // Actualizar() {
  //   this._TipoRespuesta.actualizarTipoRespuesta(this.envio).subscribe({
  //     next: (x) => {
  //     },
  //     error:(e)=>{
     
  //     },
  //     complete: () => {

  //     },
  //   });
  // }

  reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    this.visible = false;
    this.listOfDisplayData = this.datasource.filter((item: actualizarTipoRespuestaDTO) => item.nombre.indexOf(this.searchValue) !== -1);
  } 

  
  startEdit(id: string): void {
    this.editId = id;
    this.idMandar = parseInt(id);
    this.listOfDisplayData.forEach((d:any)=> {
      d.select=false;
    });
    this.listOfDisplayData[this.idMandar].select = true;

  }

  stopEdit(): void {
    this.listOfDisplayData.forEach((d:any)=> {
      d.select=false;
    });
  }

}
