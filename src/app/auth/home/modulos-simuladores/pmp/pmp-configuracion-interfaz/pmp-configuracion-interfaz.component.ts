import { Component, OnInit } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { PmpTipoRespuestaService } from 'src/app/shared/Services/Pmp-Tipo-Respuesta/pmp-tipo-respuesta.service';
import { actualizarParametrosNivel, actualizarTipoRespuestaDTO,actualizarInterfaz } from 'src/app/Models/TipoRespuesta';

@Component({
  selector: 'app-pmp-configuracion-interfaz',
  templateUrl: './pmp-configuracion-interfaz.component.html',
  styleUrls: ['./pmp-configuracion-interfaz.component.scss']
})
export class PmpConfiguracionInterfazComponent implements OnInit {

  constructor(private _TipoRespuesta: PmpTipoRespuestaService) {}

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
    this.ObtenerTipoRespuesta();
    this.ObtenerConfiguracionSimuladorEntity();
  }


  public envio: actualizarParametrosNivel={
    id: 0,
    valorMinimo: 0,
    valorMaximo: 0,
  }


  ObtenerTipoRespuesta() {
    this._TipoRespuesta.ObtenerParametrosNivelEntity().subscribe({
      next: (x: any) => {
        this.datasource = x;
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
      console.log(this.envio)
      this.actualizarPmpParametroNivel();
      
  }
  handleFile(event:any): void {

    this.fileToUpload = event.target.files
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
}

ObtenerConfiguracionSimuladorEntity() {
  this._TipoRespuesta.ObtenerConfiguracionSimuladorEntity().subscribe({
    next: (x: any) => {
      this.datasource = x;
      console.log(x)
      console.log(this.datasource)
      this.datasource.forEach((d:any)=> {
        d.select=false;
        d.ValorMaximo =d.valorMaximo
        d.ValorMinino =d.valorMinimo
      });

      this.video = x[0].urlVideo
      this.acceso = x[0].vigenciaAcceso
      this.porcentaje = x[0].porcentajeMinimoAprobacion
      console.log(this.acceso)
    },
  });
}

actualizarPmpParametroNivel() {
  this._TipoRespuesta.actualizarPmpParametroNivel(this.envio).subscribe({
    next: (x) => {
      console.log(x)
    },
    error:(e)=>{
      console.log(e)
    },
    complete: () => {

    },
  });
}


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
