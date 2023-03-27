import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PmpAdministrarUsuariosAccesoDTO } from 'src/app/Models/Pmp/PmpAdministrarUsuariosDTO';
import { AlertaService } from 'src/app/shared/Services/Alerta/alerta.service';
import { PmpAdministrarUsuariosService } from 'src/app/shared/Services/Pmp/Pmp-Administrar-Usuarios/pmp-administrar-usuarios.service';
@Component({
  selector: 'app-pmp-administrar-usuarios',
  templateUrl: './pmp-administrar-usuarios.component.html',
  styleUrls: ['./pmp-administrar-usuarios.component.scss']
})
export class PmpAdministrarUsuariosComponent implements OnInit {

  constructor(
    public _PmpAdministrarUsuarios:PmpAdministrarUsuariosService,
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
  public EnvioAcceso: PmpAdministrarUsuariosAccesoDTO={
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

  ngOnInit(): void {
    this.ObtenerReporteAdministrarUsuarioResumen();
  }
  ObtenerReporteAdministrarUsuarioResumen(){
    this.editarReporte=true;
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
      },
    });
  }
  ObtenerReporteAdministrarUsuarioPorCodigoMatricula(CodigoMatricula:string){
    var datePipe = new DatePipe('en-US');
    this.editarReporte=false;
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
          if(p.fechaCaducidadSimulador!=undefined && p.fechaCaducidadSimulador!=null){
            p.fechaCaducidadSimulador=datePipe.transform(p.fechaCaducidadSimulador, 'yyyy-MM-dd')
          }
        })
      },
    });
  }
  ObtenerReporteAdministrarUsuarioPorCentroCostos(CentroCostos:string){
    var datePipe = new DatePipe('en-US');
    this.editarReporte=false;
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
          if(p.fechaCaducidadSimulador!=undefined && p.fechaCaducidadSimulador!=null){
            p.fechaCaducidadSimulador=datePipe.transform(p.fechaCaducidadSimulador, 'yyyy-MM-dd')
          }
        })
      },
    });
  }
  AsignarFecha(valor:any){
    console.log(valor)
  }
  GuardarCambios(data:any){
    console.log(data)
    this.EnvioAcceso.idMatriculaCabecera = data.idMatriculaCabecera;
    this.EnvioAcceso.idTipoSimuladorWeb = 1;
    this.EnvioAcceso.fechaExpiracion = data.fechaCaducidadSimulador;
    this.EnvioAcceso.idPersonal = 0;
    this.EnvioAcceso.descripcion = 'Acceso solicitado desde administrador con estado matriculado por centro de costos '+ data.centroCostos;
    this.EnvioAcceso.habilitar = data.habilitar;
    console.log(this.EnvioAcceso)
    this._PmpAdministrarUsuarios.GuardarCambiosAccesoSimulador(this.EnvioAcceso).subscribe({
      next: (x: any) => {
        this.alertaService.mensajeExitoso();
      },
      error: (error) => {
        this.alertaService.notificationError(error.message);
      },
    });
  }
}
