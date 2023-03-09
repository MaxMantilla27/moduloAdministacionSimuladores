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
  listOfDisplayData: any = [];
  editId: string | null = null;
  idMandar: number
  
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
        this.listOfDisplayData = this.datasource
        
        this.datasource.forEach((d:any)=> {
          d.select=false;
          d.NombreNUevo=d.nombre
        });

        this.listOfDisplayData.forEach((d:any)=> {
          d.select=false;
          d.NombreNUevo=d.nombre
        });
      },
    });
  }

  editar(index:number) {

    this.listOfDisplayData.forEach((d:any)=> {
      d.select=false;
    });
    this.listOfDisplayData[index].select = true;
  }

  cancelar(index:number) {
    this.listOfDisplayData[index].select = false;
    this.listOfDisplayData[index].NombreNUevo = this.listOfDisplayData[index].nombre;
  }

  aceptar(index:number) {
    this.listOfDisplayData[index].select = false;
    this.listOfDisplayData[index].nombre = this.listOfDisplayData[index].NombreNUevo;

    this.envio.id = this.listOfDisplayData[index].id,
      this.envio.nombre= this.listOfDisplayData[index].NombreNUevo,
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

  // reset(): void {
  //   this.searchValue = '';
  //   this.search();
  // }

  // search(): void {
  //   this.visible = false;
  //   this.listOfDisplayData = this.datasource.filter((item: actualizarTipoRespuestaDTO) => item.nombre.indexOf(this.searchValue) !== -1);
  // } 

  
  startEdit(id: string): void {
    this.editId = id;
    this.idMandar = parseInt(id);
    this.listOfDisplayData.forEach((d:any)=> {
      d.select=false;
    });
    this.listOfDisplayData[this.idMandar].select = true;

    console.log(id)
    console.log( this.listOfDisplayData[this.idMandar].select)
  }

  stopEdit(): void {
    this.listOfDisplayData.forEach((d:any)=> {
      d.select=false;
    });
  }
}
