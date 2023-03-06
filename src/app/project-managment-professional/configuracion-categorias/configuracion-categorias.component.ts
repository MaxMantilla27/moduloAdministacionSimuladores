import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configuracion-categorias',
  templateUrl: './configuracion-categorias.component.html',
  styleUrls: ['./configuracion-categorias.component.scss']
})
export class ConfiguracionCategoriasComponent implements OnInit {
  
  displayedColumns: string[] = ['id', 'nombre', 'cantidad', 'proporcion'];

  constructor() { }

  datasource=[]

  ngOnInit(): void {
  }

}
