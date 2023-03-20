import { Component, OnInit } from '@angular/core';
import { PmpEnvioEstadoCertificacionAlumnoDTO } from 'src/app/Models/PmpReporteGeneralDTO';
import { AlertaService } from 'src/app/shared/Services/Alerta/alerta.service';
import { PmpReporteGeneralService } from 'src/app/shared/Services/Pmp-Reporte-General/pmp-reporte-general.service';

@Component({
  selector: 'app-pmp-reporte-general',
  templateUrl: './pmp-reporte-general.component.html',
  styleUrls: ['./pmp-reporte-general.component.scss']
})
export class PmpReporteGeneralComponent implements OnInit {

  constructor(
    private _PmpReporteGeneral: PmpReporteGeneralService,
    private alertaService: AlertaService
  ) { }
  public listOfDisplayData:any;
  public ReporteGeneral:any
  public ComboReporteGeneral:any
  public idCertificacion:any
  public EnvioCertificacion: PmpEnvioEstadoCertificacionAlumnoDTO={
    idMatriculaCabecera:0,
    codigoMatricula:'',
    idAlumno:0,
    idEstadoCertificacionSimulador:0
  }

  ngOnInit(): void {
    this.ObtenerReporteGeneralPmp();
    this.ObtenerComboCertificacionPmp();
  }
  ObtenerReporteGeneralPmp(){
    this._PmpReporteGeneral.ObtenerReporteGeneralPmp().subscribe({
      next: (x: any) => {
        console.log(x)
        this.ReporteGeneral = x;
        this.listOfDisplayData = this.ReporteGeneral;
      },
    });
  }
  ObtenerComboCertificacionPmp(){
    this._PmpReporteGeneral.ObtenerComboCertificacionPmp().subscribe({
      next: (x: any) => {
        console.log(x)
        this.ComboReporteGeneral = x;
      },
    });
  }
  seleccionar(e:any){
    console.log(e)
    // this.ObtenerComboSubcategoria()
  }
  GuardarCambios(data:any){
    this.EnvioCertificacion.idMatriculaCabecera = data.idMatriculaCabecera;
    this.EnvioCertificacion.codigoMatricula = data.codigoMatricula;
    this.EnvioCertificacion.idAlumno = data.idAlumno;
    this.EnvioCertificacion.idEstadoCertificacionSimulador = data.idCertificacion;
    console.log(data)
    this._PmpReporteGeneral.InsertarCertificacionPmp(this.EnvioCertificacion).subscribe({
      next: (x: any) => {
        this.alertaService.mensajeExitoso();
      },
      error: (error) => {
        this.alertaService.notificationError(error.message);
      },
    });
  }
}
