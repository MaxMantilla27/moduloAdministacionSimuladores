import { Component, OnInit,Inject } from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef,MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { PmpExamenService } from 'src/app/shared/Services/Pmp-examen/pmp-examen.service';

@Component({
  selector: 'app-pmp-abrir-modal-detalle-examen',
  templateUrl: './pmp-abrir-modal-detalle-examen.component.html',
  styleUrls: ['./pmp-abrir-modal-detalle-examen.component.scss']
})
export class PmpAbrirModalDetalleExamenComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PmpAbrirModalDetalleExamenComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _Examen: PmpExamenService

  ) { }
  public IdExamen=0
  public DatosExamen:any;
  public ListaPreguntas:any;
  public CantidadTotalPreguntas=0;
  public ContadorPreguntaActual=0;
  public ContadorPregunta=0;
  public NombreDominio=''
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
        this.NombreDominio=x[0].dominioNombre;
      }
    })
  }
  RegresarMenu(){
    this.dialogRef.close();
  }
  SiguientePregunta(){
    this.ContadorPreguntaActual=this.ContadorPreguntaActual+1;
    this.ContadorPregunta=this.ContadorPregunta+1;
    if (this.ContadorPreguntaActual>this.CantidadTotalPreguntas){
      this.dialogRef.close();
    }
  }
}
