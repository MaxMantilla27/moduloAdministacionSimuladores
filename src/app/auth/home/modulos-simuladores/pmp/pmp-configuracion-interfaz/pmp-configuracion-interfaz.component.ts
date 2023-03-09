import { Component, OnInit } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { PmpTipoRespuestaService } from 'src/app/shared/Services/Pmp-Tipo-Respuesta/pmp-tipo-respuesta.service';
import { actualizarParamtrosNivel, actualizarTipoRespuestaDTO } from 'src/app/Models/TipoRespuesta';

@Component({
  selector: 'app-pmp-configuracion-interfaz',
  templateUrl: './pmp-configuracion-interfaz.component.html',
  styleUrls: ['./pmp-configuracion-interfaz.component.scss']
})
export class PmpConfiguracionInterfazComponent implements OnInit {

  constructor(private _TipoRespuesta: PmpTipoRespuestaService) {}

  datasource=[]
  displayedColumns: string[] = ['minimo', 'maximo', 'intentos', 'nivel'];
  seleccionado = false;
  searchValue = '';
  visible = false;
  listOfDisplayData: any = [];
  editId: string | null = null;
  idMandar: number


  ngOnInit(): void {
    this.ObtenerTipoRespuesta()
  }


  public envio: actualizarParamtrosNivel={
    id : 0,
    valorMinimo: 0,
    valorMaximo: 0
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
