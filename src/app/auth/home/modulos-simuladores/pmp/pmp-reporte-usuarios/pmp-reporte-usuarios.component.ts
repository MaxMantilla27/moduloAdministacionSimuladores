import { Component, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { PmpTipoRespuestaService } from 'src/app/shared/Services/Pmp-Tipo-Respuesta/pmp-tipo-respuesta.service';


@Component({
  selector: 'app-pmp-reporte-usuarios',
  templateUrl: './pmp-reporte-usuarios.component.html',
  styleUrls: ['./pmp-reporte-usuarios.component.scss']
})
export class PmpReporteUsuariosComponent implements OnInit {

  datasource=[]
  displayedColumns: string[] = ['ranking', 'nombre', 'fechaInicio', 'FechaFinalizacion', 'duracion', 'puntaje'];

  constructor(
    private _TipoRespuesta: PmpTipoRespuestaService
  ) { }
  ngOnInit(): void {

  }

  tresDigitos = true
  Puntos = 100
  seleccionado: number = 0;
  seleccionado2: number = 0;
  codigoMatricula: any = '';
  id: number;
  nombre: string = '';
  activos: number;
  finalizados: number;
  nivel: string;


  filtroReporteUsuarios() {
    this._TipoRespuesta.ObtenerReporteUsuario(this.codigoMatricula).subscribe({
      next: (x) => {
        console.log(x)
         this.id = x.id,
         this.nombre = x.nombre,
         this.activos = x.activos,
         this.nivel = 'basico',
         this.finalizados = x.finalizados
         console.log(this.nivel)
      },
      error:(e)=>{
        console.log(e)
      },
      complete: () => {

      },
    });
  }

}
