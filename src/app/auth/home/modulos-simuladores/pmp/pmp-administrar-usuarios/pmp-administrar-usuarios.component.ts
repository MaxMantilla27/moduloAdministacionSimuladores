import { Component, OnInit } from '@angular/core';
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
}
