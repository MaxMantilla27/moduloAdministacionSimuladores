import { Component, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';


@Component({
  selector: 'app-pmp-reporte-usuarios',
  templateUrl: './pmp-reporte-usuarios.component.html',
  styleUrls: ['./pmp-reporte-usuarios.component.scss']
})
export class PmpReporteUsuariosComponent implements OnInit {

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
