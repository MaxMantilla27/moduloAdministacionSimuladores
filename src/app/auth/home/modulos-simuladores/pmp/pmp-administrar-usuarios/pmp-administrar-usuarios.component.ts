import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pmp-administrar-usuarios',
  templateUrl: './pmp-administrar-usuarios.component.html',
  styleUrls: ['./pmp-administrar-usuarios.component.scss']
})
export class PmpAdministrarUsuariosComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = ['codigo', 'alumno', 'correo', 'programa','centro', 'fechaMatricula', 'curso', 'estadoPagos','pagos', 'solicitud', 'habilitar', 'caducidad'];

  datasource=[]

  ngOnInit(): void {
  }

}
