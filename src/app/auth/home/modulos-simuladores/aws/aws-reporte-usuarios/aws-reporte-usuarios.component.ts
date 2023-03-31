import { Component, Input, OnInit, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { AwsExamenService } from 'src/app/shared/Services/Aws/Aws-examen/aws-examen.service';
import { AwsTipoRespuestaService } from 'src/app/shared/Services/Aws/Aws-Tipo-Respuesta/aws-tipo-respuesta.service';
import { AwsAbrirModalDetalleExamenComponent } from './aws-abrir-modal-detalle-examen/aws-abrir-modal-detalle-examen.component';


@Component({
  selector: 'app-aws-reporte-usuarios',
  templateUrl: './aws-reporte-usuarios.component.html',
  styleUrls: ['./aws-reporte-usuarios.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AwsReporteUsuariosComponent implements OnInit {

  datasource=[]
  displayedColumns: string[] = ['ranking', 'nombre', 'fechaInicio', 'FechaFinalizacion', 'duracion', 'puntaje','ver'];

  constructor(
    private _Examen: AwsExamenService,
    public dialog: MatDialog,
  ) { }
  public PuntosUltimaSimulacion = 0;
  public NombreUltimaSimulacion = '';
  public PuntosMejorSimulacion = 0;
  public NombreMejorSimulacion = '';
  public Modo=0;
  public codigoMatricula:'';
  public IdAlumno='';
  public Alumno='';
  public ExamenesActivos='';
  public ExamenesCompletados='';
  public Nivel=''
  public IdAspNetUsers=''
  public Ranking:any;
  public listOfDisplayData:any;
  public ResumenSimulacionesCategoriaModo:any;
  public ResultadoDominio1=0;
  public ResultadoDominio2=0;
  public ResultadoDominio3=0;
  public PuntajesCategoria:any;
  public isDisabled=true;

  ngOnInit(): void {

  }

  filtroReporteUsuarios() {
    this._Examen.ObtenerReporteUsuario(this.codigoMatricula).subscribe({
      next: (x) => {
         this.IdAlumno= x.idAlumno,
         this.Alumno = x.alumno,
         this.ExamenesActivos = x.examenesActivos,
         this.ExamenesCompletados =  x.examenesCompletados,
         this.Nivel = x.nivel,
         this.IdAspNetUsers = x.idAspNetUsers
      },
      error:(e)=>{
      },
      complete: () => {

      },
    });
  }
  ObtenerResumenSimulacionesPorModoUsuario(IdModo:number){
    this.Modo=IdModo;
    if(this.IdAspNetUsers!=''){
      this._Examen.ObtenerResumenSimulacionesPorModoUsuario(this.IdAspNetUsers,this.Modo).subscribe({
        next: (x) => {
          console.log(x)
          this.ResumenSimulacionesCategoriaModo=x;
          this.PuntajesCategoria=x.puntajesCategoria;
          this.PuntosUltimaSimulacion = Math.floor(x.puntajeUltimoExamen);
          console.log(this.PuntosUltimaSimulacion)
          this.NombreUltimaSimulacion = x.nombreUltimoExamen;
          this.PuntosMejorSimulacion = Math.floor(x.puntajeMejorExamen);
          console.log(this.PuntosMejorSimulacion)
          this.NombreMejorSimulacion = x.nombreMejorExamen;
          this.ResultadoDominio1=Math.floor(this.PuntajesCategoria[0].promedio);
          this.ResultadoDominio2=Math.floor(this.PuntajesCategoria[1].promedio);
          this.ResultadoDominio3=Math.floor(this.PuntajesCategoria[2].promedio);
        },
        error:(e)=>{
        },
        complete: () => {
          this.ObtenerRankingPorModoUsuario(IdModo);
        },
      });
    }
  }
  ObtenerRankingPorModoUsuario(IdModo:number){
    this.Modo=IdModo;
    if(this.IdAspNetUsers!=''){
      this._Examen.ObtenerRankingPorModoUsuario(this.IdAspNetUsers,this.Modo).subscribe({
        next: (x) => {
          this.Ranking=x
          this.listOfDisplayData=x
          let contRanking =1;
          this.Ranking.forEach((d:any)=> {
            d.ranking2=contRanking;
            contRanking=contRanking+1;
          });

        },
        error:(e)=>{
        },
        complete: () => {

        },
      });
    }
  }
  VerExamen(IdExamen:number){
    const dialogRef = this.dialog.open(AwsAbrirModalDetalleExamenComponent, {
      width: '100%',
      height: '100%',
      maxHeight: '95%',
      maxWidth: '100%',
      panelClass: 'dialog-ver-respuestas-examen',
      data:[IdExamen],
    });
  }

}