import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-reporte-general',
  templateUrl: './reporte-general.component.html',
  styleUrls: ['./reporte-general.component.scss']
})
export class ReporteGeneralComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = ['codigo', 'alumno', 'centro', 'tipoMatricula','fechaMatricula', 'punmax', 'punorom','simfin', 'fechaultima', 'nivel', 'certificacion'];
  
  datasource=[]

  ngOnInit(): void {
  }

}
