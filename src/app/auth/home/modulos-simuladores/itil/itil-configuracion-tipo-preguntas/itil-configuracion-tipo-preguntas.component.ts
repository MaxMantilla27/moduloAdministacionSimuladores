import { Component, OnInit } from '@angular/core';
import { actualizarTipoRespuestaDTO } from 'src/app/Models/Itil/ItilTipoRespuesta';
import { ItilTipoRespuestaService } from 'src/app/shared/Services/Itil/Itil-Tipo-Respuesta/itil-tipo-respuesta.service';

@Component({
  selector: 'app-itil-configuracion-tipo-preguntas',
  templateUrl: './itil-configuracion-tipo-preguntas.component.html',
  styleUrls: ['./itil-configuracion-tipo-preguntas.component.scss'],
})
export class ItilConfiguracionTipoPreguntasComponent implements OnInit {
  http: any;

  constructor(private _TipoRespuesta: ItilTipoRespuestaService) {}

  datasource :any= [];
  seleccionado = false;
  displayedColumns: string[] = ['id', 'tipo', 'acciones'];
  searchValue = '';
  visible = false;
  listOfDisplayData: any = [];
  editId: string | null = null;
  idMandar: number

  public ActualizarTipoRespuesta: actualizarTipoRespuestaDTO={
    id : 0,
    nombre: '',
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
          d.nombreNuevo=d.nombre
        });

        this.listOfDisplayData.forEach((d:any)=> {
          d.select=false;
          d.nombreNuevo=d.nombre
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
    this.listOfDisplayData[index].nombreNuevo = this.listOfDisplayData[index].nombre;
  }

  aceptar(index:number) {
    this.listOfDisplayData[index].select = false;
    this.listOfDisplayData[index].nombre = this.listOfDisplayData[index].nombreNuevo;
    this.ActualizarTipoRespuesta.id = this.listOfDisplayData[index].id,
    this.ActualizarTipoRespuesta.nombre= this.listOfDisplayData[index].nombreNuevo,
    this._TipoRespuesta.actualizarTipoRespuesta(this.ActualizarTipoRespuesta).subscribe({
      next: (x) => {
      },
      error:(e)=>{

      },
      complete: () => {

      },
    });
  }
}
