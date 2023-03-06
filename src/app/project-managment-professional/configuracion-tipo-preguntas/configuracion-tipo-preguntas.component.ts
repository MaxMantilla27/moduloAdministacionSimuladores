import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configuracion-tipo-preguntas',
  templateUrl: './configuracion-tipo-preguntas.component.html',
  styleUrls: ['./configuracion-tipo-preguntas.component.scss']
})
export class ConfiguracionTipoPreguntasComponent implements OnInit {

  constructor() { }

  
  datasource=[]

  displayedColumns: string[] = ['id', 'tipo'];

  ngOnInit(): void {
  }

}
