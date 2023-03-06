import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configuracion-interfaz',
  templateUrl: './configuracion-interfaz.component.html',
  styleUrls: ['./configuracion-interfaz.component.scss']
})
export class ConfiguracionInterfazComponent implements OnInit {

  constructor() { }

  datasource=[]

  displayedColumns: string[] = ['minimo', 'maximo', 'intentos', 'nivel'];

  ngOnInit(): void {
  }

}
