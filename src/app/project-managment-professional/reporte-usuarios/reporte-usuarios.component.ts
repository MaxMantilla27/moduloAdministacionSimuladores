import { Component, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';


@Component({
  selector: 'app-reporte-usuarios',
  templateUrl: './reporte-usuarios.component.html',
  styleUrls: ['./reporte-usuarios.component.scss']
})
export class ReporteUsuariosComponent implements OnInit {

  datasource=[]
  displayedColumns: string[] = ['ranking', 'nombre', 'fechaInicio', 'FechaFinalizacion', 'duracion', 'puntaje'];

  constructor() { }
  ngOnInit(): void {

  }

  tresDigitos = true
  Puntos = 100
  seleccionado: number = 0;
  seleccionado2: number = 0;

}
