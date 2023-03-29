import { HttpClient,HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PacpEnvioEstadoCertificacionAlumnoDTO } from 'src/app/Models/Pacp/PacpReporteGeneralDTO';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PacpReporteGeneralService {

  public urlBase=environment.url_api+'PacpReporteGeneral';
  constructor(private http: HttpClient) { }

  public ObtenerReporteGeneralPacp(): Observable<any> {
    return this.http.get<any>(this.urlBase + '/ObtenerReporteGeneralPacp');
  }
  public ObtenerComboCertificacionPacp(): Observable<any> {
    return this.http.get<any>(this.urlBase + '/ObtenerComboCertificacionPacp');
  }
  public InsertarCertificacionPacp(json:PacpEnvioEstadoCertificacionAlumnoDTO): Observable<any> {
    return this.http.post<any>(this.urlBase + '/InsertarCertificacionPacp',json);
  }
}
