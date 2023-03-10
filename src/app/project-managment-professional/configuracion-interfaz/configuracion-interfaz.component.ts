import { Component, OnInit } from '@angular/core';
import { TipoRespuestaService } from 'src/app/shared/Services/Tipo-Respuesta/tipo-respuesta.service';

@Component({
  selector: 'app-configuracion-interfaz',
  templateUrl: './configuracion-interfaz.component.html',
  styleUrls: ['./configuracion-interfaz.component.scss']
})
export class ConfiguracionInterfazComponent implements OnInit {

  constructor( private _ConfiguracionInterfaz: TipoRespuestaService) {}

  datasource: any= [];
  seleccionado = false;

  displayedColumns: string[] = ['minimo', 'maximo', 'intentos', 'nivel', 'acciones'];

  ngOnInit(): void {
    this.obtenerParametrosNivel();
    console.log('pruebita')
  }

  obtenerParametrosNivel(){
    console.log('piedad')
    this._ConfiguracionInterfaz.ObtenerParametrosNivelEntity().subscribe({
      next: (x: any) => {
        this.datasource = x;
        this.datasource.forEach((d:any)=> {
          d.select=false;
        });
      },
    });
  }

  editar(index:number) {
    this.datasource.forEach((d:any)=> {
      d.select=false;
    });
    this.datasource[index].select = true
  }

  cancelar(index:number){    
  }

  aceptar(index:number){

  }

}
