import { Component, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { PmpExamenService } from 'src/app/shared/Services/Pmp-examen/pmp-examen.service';
import { PmpTipoRespuestaService } from 'src/app/shared/Services/Pmp-Tipo-Respuesta/pmp-tipo-respuesta.service';
import { PmpAbrirModalDetalleExamenComponent } from './pmp-abrir-modal-detalle-examen/pmp-abrir-modal-detalle-examen/pmp-abrir-modal-detalle-examen.component';


@Component({
  selector: 'app-pmp-reporte-usuarios',
  templateUrl: './pmp-reporte-usuarios.component.html',
  styleUrls: ['./pmp-reporte-usuarios.component.scss']
})
export class PmpReporteUsuariosComponent implements OnInit {

  datasource=[]
  displayedColumns: string[] = ['ranking', 'nombre', 'fechaInicio', 'FechaFinalizacion', 'duracion', 'puntaje','ver'];

  constructor(
    private _Examen: PmpExamenService,
    public dialog: MatDialog,
  ) { }
  ngOnInit(): void {

  }

  tresDigitos = true
  Puntos = 100
  public Modo=0;
  public codigoMatricula:'';
  public IdAlumno=0;
  public Alumno='';
  public ExamenesActivos=0;
  public ExamenesCompletados=0;
  public Nivel=''
  public IdAspNetUsers=''
  public Ranking:any;
  public listOfDisplayData:any;


  filtroReporteUsuarios() {
    this._Examen.ObtenerReporteUsuario(this.codigoMatricula).subscribe({
      next: (x) => {
        console.log(x)
         this.IdAlumno= x.idAlumno,
         this.Alumno = x.alumno,
         this.ExamenesActivos = x.examenesActivos,
         this.ExamenesCompletados =  x.examenesCompletados,
         this.Nivel = x.nivel,
         this.IdAspNetUsers = x.idAspNetUsers
      },
      error:(e)=>{
        console.log(e)
      },
      complete: () => {

      },
    });
  }
  ObtenerRankingPorModoUsuario(IdModo:number){
    this.Modo=IdModo;
    this._Examen.ObtenerRankingPorModoUsuario(this.IdAspNetUsers,this.Modo).subscribe({
      next: (x) => {
        console.log(x)
        this.Ranking=x
        this.listOfDisplayData=x
        let contRanking =1;
        this.Ranking.forEach((d:any)=> {
          d.ranking2=contRanking;
          contRanking=contRanking+1;
        });

      },
      error:(e)=>{
        console.log(e)
      },
      complete: () => {

      },
    });
  }
  VerExamen(IdExamen:number){
    const dialogRef = this.dialog.open(PmpAbrirModalDetalleExamenComponent, {
       width: '60%',
      panelClass: 'dialog-agregar-categoria',
      data:[IdExamen],
      disableClose: true
    });
  }

}
