import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pmp-reporte-general',
  templateUrl: './pmp-reporte-general.component.html',
  styleUrls: ['./pmp-reporte-general.component.scss']
})
export class PmpReporteGeneralComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = ['codigo', 'alumno', 'centro', 'tipoMatricula','fechaMatricula', 'punmax', 'punorom','simfin', 'fechaultima', 'nivel', 'certificacion'];

  datasource=[]

  ngOnInit(): void {
  }

}
