import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configuracion-preguntas',
  templateUrl: './configuracion-preguntas.component.html',
  styleUrls: ['./configuracion-preguntas.component.scss']
})
export class ConfiguracionPreguntasComponent implements OnInit {

  constructor() { }

  datasource=[]

  displayedColumns: string[] = ['id', 'enunciado', 'idcategoria', 'nombrecategoria', 'nombresubcategoria'];

  ngOnInit(): void {
  }

}
