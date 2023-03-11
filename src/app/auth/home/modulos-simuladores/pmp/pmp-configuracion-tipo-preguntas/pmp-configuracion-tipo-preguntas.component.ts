import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { takeUntil } from 'rxjs';
import { actualizarTipoRespuestaDTO } from 'src/app/Models/TipoRespuesta';
import { PmpTipoRespuestaService } from 'src/app/shared/Services/Pmp-Tipo-Respuesta/pmp-tipo-respuesta.service';

@Component({
  selector: 'app-pmp-configuracion-tipo-preguntas',
  templateUrl: './pmp-configuracion-tipo-preguntas.component.html',
  styleUrls: ['./pmp-configuracion-tipo-preguntas.component.scss'],
})
export class PmpConfiguracionTipoPreguntasComponent implements OnInit {
  http: any;

  constructor(private _TipoRespuesta: PmpTipoRespuestaService) {}

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
          d.NombreNuevo=d.nombre
        });

        this.listOfDisplayData.forEach((d:any)=> {
          d.select=false;
          d.NombreNuevo=d.nombre
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
    this.listOfDisplayData[index].NombreNuevo = this.listOfDisplayData[index].nombre;
  }

  aceptar(index:number) {
    this.listOfDisplayData[index].select = false;
    this.listOfDisplayData[index].NombreNuevo = this.listOfDisplayData[index].nombre;

    this.envio.id = this.listOfDisplayData[index].id,
      this.envio.nombre = this.listOfDisplayData[index].NombreNuevo,
      this.envio.fechaModificacion= new Date()
      console.log(this.envio)
      this.actualizarTipoRespuesta()
  }



  actualizarTipoRespuesta() {
    console.log(this.actualizarTipoRespuesta)
    this._TipoRespuesta.actualizarTipoRespuesta(this.envio).subscribe({
      next: (x) => {
        console.log(x)
      },
      error:(e)=>{
        console.log(e)
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
