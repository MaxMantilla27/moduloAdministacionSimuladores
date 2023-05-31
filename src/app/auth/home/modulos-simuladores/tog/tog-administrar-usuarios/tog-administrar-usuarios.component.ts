import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TogAdministrarUsuariosAccesoDTO } from 'src/app/Models/Tog/TogAdministrarUsuariosDTO';
import { filtradoAdministradorDTO } from 'src/app/Models/Tog/TogTipoRespuesta';
import { AlertaService } from 'src/app/shared/Services/Alerta/alerta.service';
import { TogAdministrarUsuariosService } from 'src/app/shared/Services/Tog/Tog-Administrar-Usuarios/tog-administrar-usuarios.service';
@Component({
  selector: 'app-tog-administrar-usuarios',
  templateUrl: './tog-administrar-usuarios.component.html',
  styleUrls: ['./tog-administrar-usuarios.component.scss']
})
export class TogAdministrarUsuariosComponent implements OnInit {

  constructor(
    public _TogAdministrarUsuarios:TogAdministrarUsuariosService,
    public alertaService:AlertaService,
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
  public EnvioAcceso: TogAdministrarUsuariosAccesoDTO={
    idMatriculaCabecera:0,
    idTipoSimuladorWeb:0,
    fechaExpiracion:new Date(),
    idPersonal:0,
    descripcion:'',
    habilitar:false
  }
  public FechaActual=new Date();
  public editarReporte=true
  public fechaPrueba="2023-10-26"

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
  public DisableReporte=true;
  public DisabledDescargaExcel=true;

  ngOnInit(): void {
    // this.ObtenerReporteAdministrarUsuarioResumenTog();
  }
  ObtenerReporteAdministrarUsuarioResumenTog(){
    this.listOfDisplayData=undefined;
    this.DisabledDescargaExcel=true;
    this.editarReporte=true;
    this.CodigoMatricula=''
    this.CentroCostos=''
    this.CodigoMatriculaBuscar=''
    this.CentroCostosBuscar=''
    this._TogAdministrarUsuarios.ObtenerReporteAdministrarUsuarioResumenTog().subscribe({
      next: (x: any) => {
        console.log(x)
        this.ReporteResumen=x;
        this.listOfDisplayData = x
        if(this.listOfDisplayData!=undefined && x.length!=0){
          this.listOfDisplayData.forEach((e:any) => {
            e.cantidadCuotas= e.cuotasPagadas.toString() + '/'+e.numeroCuotas.toString();
          });
          this.DisabledDescargaExcel=false;
        }
      },
    });
  }
  ObtenerReporteAdministrarUsuarioPorCodigoMatriculaTog(CodigoMatricula:string){
    this.listOfDisplayData=undefined;
    this.DisabledDescargaExcel=true;
    var datePipe = new DatePipe('en-US');
    this.editarReporte=false;
    this.CentroCostosBuscar=''
    this.CentroCostos=''
    this.CodigoMatriculaBuscar=CodigoMatricula
    this.ReporteCodigoMatricula=undefined
    this._TogAdministrarUsuarios.ObtenerReporteAdministrarUsuarioPorCodigoMatriculaTog(this.CodigoMatriculaBuscar).subscribe({
      next: (x: any) => {
        console.log(x)
        this.ReporteCodigoMatricula=x;
        this.listOfDisplayData = x
        if(this.listOfDisplayData!=undefined && x.length!=0){
          this.listOfDisplayData.forEach((e:any) => {
            e.cantidadCuotas= e.cuotasPagadas.toString() + '/'+e.numeroCuotas.toString();
if(e.fechaCaducidadSimulador!=undefined && e.fechaCaducidadSimulador!=null){
            e.fechaCaducidadSimulador=datePipe.transform(e.fechaCaducidadSimulador, 'yyyy-MM-dd')
          }
          });
          this.DisabledDescargaExcel=false;
        }
      },
    });
  }
  ObtenerReporteAdministrarUsuarioPorCentroCostosTog(CentroCostos:string){
    this.listOfDisplayData=undefined;
    this.DisabledDescargaExcel=true;
    var datePipe = new DatePipe('en-US');
    this.editarReporte=false;
    this.CodigoMatriculaBuscar=''
    this.CodigoMatricula=''
    this.CentroCostosBuscar=CentroCostos,
    this.ReporteCentroCostos=undefined
    this._TogAdministrarUsuarios.ObtenerReporteAdministrarUsuarioPorCentroCostosTog(this.CentroCostosBuscar).subscribe({
      next: (x: any) => {
        console.log(x)
        this.ReporteCentroCostos=x;
        this.listOfDisplayData = x
        if(this.listOfDisplayData!=undefined && x.length!=0){
          this.listOfDisplayData.forEach((e:any) => {
            e.cantidadCuotas= e.cuotasPagadas.toString() + '/'+e.numeroCuotas.toString();
if(e.fechaCaducidadSimulador!=undefined && e.fechaCaducidadSimulador!=null){
            e.fechaCaducidadSimulador=datePipe.transform(e.fechaCaducidadSimulador, 'yyyy-MM-dd')
          }
          });
          this.DisabledDescargaExcel=false;
        }
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
      (item: filtradoAdministradorDTO) =>
        (item.codigoMatricula && item.codigoMatricula!=null && item.codigoMatricula.indexOf(this.searchValue) !== -1)
    );
    console.log(this.listOfDisplayData)
  }

  search2(): void {
    console.log(this.searchValue)
    this.visible2 = false;
    this.listOfDisplayData = this.ReporteResumen.filter(
      (item: filtradoAdministradorDTO) =>
        (item.alumno && item.alumno!=null && item.alumno.indexOf(this.searchValue2) !== -1)
    );
  }
  search3(): void {
    console.log(this.searchValue)
    this.visible3 = false;
    this.listOfDisplayData = this.ReporteResumen.filter(
      (item: filtradoAdministradorDTO) =>
        (item.correo && item.correo!=null && item.correo.indexOf(this.searchValue3) !== -1)
    );
    console.log(this.listOfDisplayData)
  }


  search4(): void {
    console.log(this.searchValue)
    this.visible4 = false;
    this.listOfDisplayData = this.ReporteResumen.filter(
      (item: filtradoAdministradorDTO) =>
       (item.nombrePrograma && item.nombrePrograma!=null && item.nombrePrograma.toString().indexOf(this.searchValue4) !== -1)
    );
    console.log(this.listOfDisplayData)
  }

  search5(): void {
    console.log(this.searchValue)
    this.visible5 = false;
    this.listOfDisplayData = this.ReporteResumen.filter(
      (item: filtradoAdministradorDTO) =>
        (item.centroCostos && item.centroCostos!=null && item.centroCostos.indexOf(this.searchValue5) !== -1)
    );
    console.log(this.listOfDisplayData)
  }
  search6(): void {
    console.log(this.searchValue)
    this.visible6 = false;
    this.listOfDisplayData = this.ReporteResumen.filter(
      (item: filtradoAdministradorDTO) =>
        (item.estadoCurso && item.estadoCurso!=null && item.estadoCurso.indexOf(this.searchValue6) !== -1)
    );
    console.log(this.listOfDisplayData)
  }


  search7(): void {
    console.log(this.searchValue)
    this.visible7 = false;
    this.listOfDisplayData = this.ReporteResumen.filter(
      (item: filtradoAdministradorDTO) =>
       (item.estadoPagos && item.estadoPagos!=null && item.estadoPagos.indexOf(this.searchValue7) !== -1)
    );
    console.log(this.listOfDisplayData)
  }

  search8(): void {
    console.log(this.searchValue)
    this.visible8 = false;
    this.listOfDisplayData = this.ReporteResumen.filter(
      (item: filtradoAdministradorDTO) =>
        (item.estadoSolicitud && item.estadoSolicitud!=null && item.estadoSolicitud.indexOf(this.searchValue8) !== -1)
    );
    console.log(this.listOfDisplayData)
  }
  AsignarFecha(valor:any){
    console.log(valor)
  }
  GuardarCambios(data:any){
    console.log(data)
    this.EnvioAcceso.idMatriculaCabecera = data.idMatriculaCabecera;
    this.EnvioAcceso.idTipoSimuladorWeb = 14;
    this.EnvioAcceso.fechaExpiracion = data.fechaCaducidadSimulador;
    this.EnvioAcceso.idPersonal = 0;
    this.EnvioAcceso.descripcion = 'Acceso solicitado desde administrador con estado matriculado por centro de costos '+ data.centroCostos;
    this.EnvioAcceso.habilitar = data.habilitar;
    console.log(this.EnvioAcceso)
    this._TogAdministrarUsuarios.GuardarCambiosAccesoSimuladorTog(this.EnvioAcceso).subscribe({
      next: (x: any) => {
        this.alertaService.mensajeExitoso();
      },
      error: (error) => {
        this.alertaService.notificationError(error.message);
      },
    });
  }
}
