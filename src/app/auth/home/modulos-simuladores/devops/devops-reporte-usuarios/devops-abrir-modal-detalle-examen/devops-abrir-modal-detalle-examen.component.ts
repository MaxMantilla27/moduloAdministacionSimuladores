import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DevopsExamenService } from 'src/app/shared/Services/Devops/Devops-examen/devops-examen.service';

@Component({
  selector: 'app-devops-abrir-modal-detalle-examen',
  templateUrl: './devops-abrir-modal-detalle-examen.component.html',
  styleUrls: ['./devops-abrir-modal-detalle-examen.component.scss']
})
export class DevopsAbrirModalDetalleExamenComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DevopsAbrirModalDetalleExamenComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _Examen: DevopsExamenService

  ) { }
  public IdExamen=0
  public DatosExamen:any;
  public ListaPreguntas:any;
  public CantidadTotalPreguntas=0;
  public ContadorPreguntaActual=0;
  public ContadorPregunta=0;
  public NombreSimulacion=''
  public NombreCategoria=''
  public NombreSubCategoria=''
  ngOnInit(): void {
    this.IdExamen=this.data
    this.ObtenerRespuestaExamenDetallePreguntaPorId();
  }
  ObtenerRespuestaExamenDetallePreguntaPorId(){
    this._Examen.ObtenerRespuestaExamenDetallePreguntaPorId(this.IdExamen).subscribe({
      next:(x)=>{
        this.DatosExamen=x;
        console.log(this.DatosExamen)
        this.ListaPreguntas=x.pregunta
        this.CantidadTotalPreguntas=x.length;
        this.ContadorPreguntaActual=this.ContadorPregunta+1;
        this.NombreSimulacion=x[0].nombreExamen
        this.NombreCategoria=x[0].categoria;
        this.NombreSubCategoria=x[0].subCategoria;
      }
    })
  }
  Salir(){
    this.dialogRef.close();
  }
  SiguientePregunta(){
    this.ContadorPreguntaActual=this.ContadorPreguntaActual+1;
    this.ContadorPregunta=this.ContadorPregunta+1;
  }
  AnteriorPregunta(){
    this.ContadorPreguntaActual=this.ContadorPreguntaActual-1;
    this.ContadorPregunta=this.ContadorPregunta-1;
  }

}
