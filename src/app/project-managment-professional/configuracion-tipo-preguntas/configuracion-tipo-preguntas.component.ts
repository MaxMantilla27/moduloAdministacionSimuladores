import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { takeUntil } from 'rxjs';
import { actualizarTipoRespuestaDTO } from 'src/app/Models/TipoRespuesta';
import { TipoRespuestaService } from 'src/app/shared/Services/Tipo-Respuesta/tipo-respuesta.service';

@Component({
  selector: 'app-configuracion-tipo-preguntas',
  templateUrl: './configuracion-tipo-preguntas.component.html',
  styleUrls: ['./configuracion-tipo-preguntas.component.scss'],
})
export class ConfiguracionTipoPreguntasComponent implements OnInit {
  http: any;

  constructor(private _TipoRespuesta: TipoRespuestaService) {}

  datasource :any= [];
  seleccionado = false;

  displayedColumns: string[] = ['id', 'tipo', 'acciones'];
  searchValue = '';
  visible = false;
  listOfDisplayData = [];
  
  public envio: actualizarTipoRespuestaDTO={
    id : 0,
    nombre: '',
    fechaModificacion: new Date()
  }

  ngOnInit(): void {
    this.ObtenerTipoRespuesta();
  }

  ObtenerTipoRespuesta() {
    this._TipoRespuesta.ObtenerTipoRespuesta().subscribe({
      next: (x: any) => {
        this.datasource = x;
        this.datasource.forEach((d:any)=> {
          d.select=false;
          d.NombreNUevo=d.nombre
        });
      },
    });
  }

  editar(index:number) {
    this.datasource.forEach((d:any)=> {
      d.select=false;
    });
    this.datasource[index].select = true;
  }

  cancelar(index:number) {
    this.datasource[index].select = false;
    this.datasource[index].NombreNUevo = this.datasource[index].nombre;
  }

  aceptar(index:number) {
    this.datasource[index].select = false;
    this.datasource[index].nombre = this.datasource[index].NombreNUevo;

    this.envio.id = this.datasource[index].id,
      this.envio.nombre= this.datasource[index].NombreNUevo,
      this.envio.fechaModificacion= new Date()
      this.Actualizar() 
  }


  
  Actualizar() {
    this._TipoRespuesta.actualizarTipoRespuesta(this.envio).subscribe({
      next: (x) => {
      },
      error:(e)=>{
     
      },
      complete: () => {

      },
    });
  }

  reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    this.visible = false;
    this.listOfDisplayData = this.datasource.filter((item: actualizarTipoRespuestaDTO) => item.nombre.indexOf(this.searchValue) !== -1);
  } 
}
