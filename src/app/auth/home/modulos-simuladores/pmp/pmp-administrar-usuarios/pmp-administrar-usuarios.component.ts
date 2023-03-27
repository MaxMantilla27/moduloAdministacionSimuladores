import { Component, OnInit } from '@angular/core';
import { filtradoAdminsitradorDTO, filtradoPreguntaDTO } from 'src/app/Models/TipoRespuesta';
import { PmpAdministrarUsuariosService } from 'src/app/shared/Services/Pmp-Administrar-Usuarios/pmp-administrar-usuarios.service';

@Component({
  selector: 'app-pmp-administrar-usuarios',
  templateUrl: './pmp-administrar-usuarios.component.html',
  styleUrls: ['./pmp-administrar-usuarios.component.scss']
})
export class PmpAdministrarUsuariosComponent implements OnInit {

  constructor(
    public _PmpAdministrarUsuarios:PmpAdministrarUsuariosService
  ) { }

  displayedColumns: string[] = ['codigo', 'alumno', 'correo', 'programa','centro', 'fechaMatricula', 'curso', 'estadoPagos','pagos', 'solicitud', 'habilitar', 'caducidad'];

  datasource=[]
  public ReporteResumen:any;
  public ReporteCodigoMatricula:any;
  public ReporteCentroCostos:any;
  public CodigoMatricula='';
  public CentroCostos='';
  public CodigoMatriculaBuscar='';
  public CentroCostosBuscar='';

  searchValue = '';
  visible = false;
  searchValue2 = '';
  visible2 = false;
  searchValue3 = '';
  visible3 = false;
  searchValue4 = '';
  visible4 = false;
  searchValue5 = '';
  visible5 = false;
  searchValue6 = '';
  visible6 = false;
  searchValue7 = '';
  visible7 = false;
  searchValue8 = '';
  visible8 = false;
  listOfDisplayData: any = [];

  ngOnInit(): void {
    this.ObtenerReporteAdministrarUsuarioResumen();
  }
  ObtenerReporteAdministrarUsuarioResumen(){
    this.CodigoMatricula=''
    this.CentroCostos=''
    this.CodigoMatriculaBuscar=''
    this.CentroCostosBuscar=''
    this._PmpAdministrarUsuarios.ObtenerReporteAdministrarUsuarioResumen().subscribe({
      next: (x: any) => {
        console.log(x)
        this.ReporteResumen=x;
        this.ReporteResumen.forEach((p:any)=>{
          if(p.estadoCurso==true){
            p.avance=0;
            var total=0;
            var toralR=0;
            total+=p.videosTotal==null?0:p.videosTotal
            total+=p.examenProgramados==null?0:p.examenProgramados
            total+=p.tareasProgramadas==null?0:p.tareasProgramadas

           toralR+=p.videosTerminados==null?0:p.videosTerminados
            toralR+=p.examenRealizado==null?0:p.examenRealizado
            toralR+=p.tareasRealizadas==null?0:p.tareasRealizadas
            if(total>0){
              p.avance=toralR*100/total;
              p.avance=Math.floor(p.avance);
            }
          }
        })

        this.listOfDisplayData = this.ReporteResumen
      },
    });
  }
  ObtenerReporteAdministrarUsuarioPorCodigoMatricula(CodigoMatricula:string){
    this.CentroCostosBuscar=''
    this.CentroCostos=''
    this.CodigoMatriculaBuscar=CodigoMatricula
    this.ReporteCodigoMatricula=undefined
    this._PmpAdministrarUsuarios.ObtenerReporteAdministrarUsuarioPorCodigoMatricula(this.CodigoMatriculaBuscar).subscribe({
      next: (x: any) => {
        console.log(x)
        this.ReporteCodigoMatricula=x;
        this.ReporteCodigoMatricula.forEach((p:any)=>{
          if(p.estadoCurso==true){
            p.avance=0;
            var total=0;
            var toralR=0;
            total+=p.videosTotal==null?0:p.videosTotal
            total+=p.examenProgramados==null?0:p.examenProgramados
            total+=p.tareasProgramadas==null?0:p.tareasProgramadas

           toralR+=p.videosTerminados==null?0:p.videosTerminados
            toralR+=p.examenRealizado==null?0:p.examenRealizado
            toralR+=p.tareasRealizadas==null?0:p.tareasRealizadas
            if(total>0){
              p.avance=toralR*100/total;
              p.avance=Math.floor(p.avance);
            }
          }
        })
      },
    });
  }
  ObtenerReporteAdministrarUsuarioPorCentroCostos(CentroCostos:string){
    this.CodigoMatriculaBuscar=''
    this.CodigoMatricula=''
    this.CentroCostosBuscar=CentroCostos,
    this.ReporteCentroCostos=undefined
    this._PmpAdministrarUsuarios.ObtenerReporteAdministrarUsuarioPorCentroCostos(this.CentroCostosBuscar).subscribe({
      next: (x: any) => {
        console.log(x)
        this.ReporteCentroCostos=x;
        this.ReporteCentroCostos.forEach((p:any)=>{
          if(p.estadoCurso==true){
            p.avance=0;
            var total=0;
            var toralR=0;
            total+=p.videosTotal==null?0:p.videosTotal
            total+=p.examenProgramados==null?0:p.examenProgramados
            total+=p.tareasProgramadas==null?0:p.tareasProgramadas

           toralR+=p.videosTerminados==null?0:p.videosTerminados
            toralR+=p.examenRealizado==null?0:p.examenRealizado
            toralR+=p.tareasRealizadas==null?0:p.tareasRealizadas
            if(total>0){
              p.avance=toralR*100/total;
              p.avance=Math.floor(p.avance);
            }
          }
        })
      },
    });
  }

  reset(): void {
    this.listOfDisplayData = this.ReporteResumen
    this.searchValue = '';
    this.searchValue2 = '';
    this.searchValue3 = '';
    this.searchValue4 = '';
    this.searchValue5 = '';
    this.searchValue6 = '';
    this.searchValue7 = '';
    this.searchValue8 = '';
    this.search();
  }

  search(): void {
    console.log(this.searchValue)
    this.visible = false;
    this.listOfDisplayData = this.ReporteResumen.filter(
      (item: filtradoAdminsitradorDTO) =>
        (item.codigoMatricula && item.codigoMatricula!=null && item.codigoMatricula.indexOf(this.searchValue) !== -1)
    );
    console.log(this.listOfDisplayData)
  }

  search2(): void {
    console.log(this.searchValue)
    this.visible2 = false;
    this.listOfDisplayData = this.ReporteResumen.filter(
      (item: filtradoAdminsitradorDTO) =>
        (item.alumno && item.alumno!=null && item.alumno.indexOf(this.searchValue2) !== -1)
    );
  }
  search3(): void {
    console.log(this.searchValue)
    this.visible3 = false;
    this.listOfDisplayData = this.ReporteResumen.filter(
      (item: filtradoAdminsitradorDTO) =>
        (item.correo && item.correo!=null && item.correo.indexOf(this.searchValue3) !== -1)
    );
    console.log(this.listOfDisplayData)
  }


  search4(): void {
    console.log(this.searchValue)
    this.visible4 = false;
    this.listOfDisplayData = this.ReporteResumen.filter(
      (item: filtradoAdminsitradorDTO) =>
       (item.nombrePrograma && item.nombrePrograma!=null && item.nombrePrograma.toString().indexOf(this.searchValue4) !== -1)
    );
    console.log(this.listOfDisplayData)
  }

  search5(): void {
    console.log(this.searchValue)
    this.visible5 = false;
    this.listOfDisplayData = this.ReporteResumen.filter(
      (item: filtradoAdminsitradorDTO) =>
        (item.centroCostos && item.centroCostos!=null && item.centroCostos.indexOf(this.searchValue5) !== -1)
    );
    console.log(this.listOfDisplayData)
  }
  search6(): void {
    console.log(this.searchValue)
    this.visible6 = false;
    this.listOfDisplayData = this.ReporteResumen.filter(
      (item: filtradoAdminsitradorDTO) =>
        (item.estadoCurso && item.estadoCurso!=null && item.estadoCurso.indexOf(this.searchValue6) !== -1)
    );
    console.log(this.listOfDisplayData)
  }


  search7(): void {
    console.log(this.searchValue)
    this.visible7 = false;
    this.listOfDisplayData = this.ReporteResumen.filter(
      (item: filtradoAdminsitradorDTO) =>
       (item.estadoPagos && item.estadoPagos!=null && item.estadoPagos.indexOf(this.searchValue7) !== -1)
    );
    console.log(this.listOfDisplayData)
  }
  
  search8(): void {
    console.log(this.searchValue)
    this.visible8 = false;
    this.listOfDisplayData = this.ReporteResumen.filter(
      (item: filtradoAdminsitradorDTO) =>
        (item.estadoSolicitud && item.estadoSolicitud!=null && item.estadoSolicitud.indexOf(this.searchValue8) !== -1)
    );
    console.log(this.listOfDisplayData)
  }
}
