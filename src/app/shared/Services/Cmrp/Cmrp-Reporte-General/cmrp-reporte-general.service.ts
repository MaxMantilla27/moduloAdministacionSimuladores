import { HttpClient,HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CmrpEnvioEstadoCertificacionAlumnoDTO } from 'src/app/Models/Cmrp/CmrpReporteGeneralDTO';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CmrpReporteGeneralService {

  public urlBase=environment.url_api+'CmrpReporteGeneral';
  constructor(private http: HttpClient) { }

  public ObtenerReporteGeneralCmrp(): Observable<any> {
    return this.http.get<any>(this.urlBase + '/ObtenerReporteGeneralCmrp');
  }
  public ObtenerComboCertificacionCmrp(): Observable<any> {
    return this.http.get<any>(this.urlBase + '/ObtenerComboCertificacionCmrp');
  }
  public InsertarCertificacionCmrp(json:CmrpEnvioEstadoCertificacionAlumnoDTO): Observable<any> {
    return this.http.post<any>(this.urlBase + '/InsertarCertificacionCmrp',json);
  }
}
