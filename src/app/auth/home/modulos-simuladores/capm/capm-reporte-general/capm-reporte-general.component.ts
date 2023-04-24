import { Component, OnInit } from '@angular/core';
import { CapmEnvioEstadoCertificacionAlumnoDTO } from 'src/app/Models/Capm/CapmReporteGeneralDTO';
import { filtradoReporteGeneralDTO } from 'src/app/Models/Capm/CapmTipoRespuesta';
import { AlertaService } from 'src/app/shared/Services/Alerta/alerta.service';
import { CapmReporteGeneralService } from 'src/app/shared/Services/Capm/Capm-Reporte-General/capm-reporte-general.service';

@Component({
  selector: 'app-capm-reporte-general',
  templateUrl: './capm-reporte-general.component.html',
  styleUrls: ['./capm-reporte-general.component.scss']
})
export class CapmReporteGeneralComponent implements OnInit {

  constructor(
    private _CapmReporteGeneral: CapmReporteGeneralService,
    private alertaService: AlertaService
  ) { }
  public listOfDisplayData:any;
  public ReporteGeneral:any
  public ComboReporteGeneral:any
  public idCertificacion:any
  public EnvioCertificacion: CapmEnvioEstadoCertificacionAlumnoDTO={
    idMatriculaCabecera:0,
    codigoMatricula:'',
    idAlumno:0,
    idEstadoCertificacionSimulador:0
  }

  searchValue = '';
  visible = false;
  searchValue2 = '';
  visible2 = false;
  searchValue3 = '';
  visible3 = false;
  searchValue4 = '';
  visible4 = false;
  searchValue5 = '';
  visible5 = false;
  public DisabledDescargaExcel=true;

  ngOnInit(): void {
    this.ObtenerReporteGeneralCapm();
    this.ObtenerComboCertificacionCapm();
  }
  ObtenerReporteGeneralCapm(){
    this._CapmReporteGeneral.ObtenerReporteGeneralCapm().subscribe({
      next: (x: any) => {
        this.ReporteGeneral = x;
        this.listOfDisplayData = this.ReporteGeneral;
        if(this.listOfDisplayData!=undefined){
          this.DisabledDescargaExcel=false;
        }
      },
    });
  }
  ObtenerComboCertificacionCapm(){
    this._CapmReporteGeneral.ObtenerComboCertificacionCapm().subscribe({
      next: (x: any) => {
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
    this._CapmReporteGeneral.InsertarCertificacionCapm(this.EnvioCertificacion).subscribe({
      next: (x: any) => {
        this.alertaService.mensajeExitoso();
      },
      error: (error:any) => {
        this.alertaService.notificationError(error.message);
      },
    });
  }

  reset(): void {
    this.listOfDisplayData = this.ReporteGeneral
    this.searchValue = '';
    this.searchValue2 = '';
    this.searchValue3 = '';
    this.searchValue4 = '';
    this.search();
  }

  search(): void {
    console.log(this.searchValue)
    this.visible = false;
    this.listOfDisplayData = this.ReporteGeneral.filter(
      (item: filtradoReporteGeneralDTO) =>
        (item.codigoMatricula && item.codigoMatricula!=null && item.codigoMatricula.indexOf(this.searchValue) !== -1)
    );
    console.log(this.listOfDisplayData)
  }

  search2(): void {
    console.log(this.searchValue)
    this.visible2 = false;
    this.listOfDisplayData = this.ReporteGeneral.filter(
      (item: filtradoReporteGeneralDTO) =>
        (item.alumno && item.alumno!=null && item.alumno.indexOf(this.searchValue2) !== -1)
    );
  }
  search3(): void {
    console.log(this.searchValue)
    this.visible3 = false;
    this.listOfDisplayData = this.ReporteGeneral.filter(
      (item: filtradoReporteGeneralDTO) =>
        (item.centroCostos && item.centroCostos!=null && item.centroCostos.indexOf(this.searchValue3) !== -1)
    );
    console.log(this.listOfDisplayData)
  }


  search4(): void {
    console.log(this.searchValue)
    this.visible4 = false;
    this.listOfDisplayData = this.ReporteGeneral.filter(
      (item: filtradoReporteGeneralDTO) =>
       (item.tipoMatricula && item.tipoMatricula!=null && item.tipoMatricula.toString().indexOf(this.searchValue4) !== -1)
    );
    console.log(this.listOfDisplayData)
  }

  search5(): void {
    console.log(this.searchValue)
    this.visible5 = false;
    this.listOfDisplayData = this.ReporteGeneral.filter(
      (item: filtradoReporteGeneralDTO) =>
        (item.nivel && item.nivel!=null && item.nivel.indexOf(this.searchValue5) !== -1)
    );
    console.log(this.listOfDisplayData)
  }
}
