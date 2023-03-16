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
        console.log(x)
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
  }
}
