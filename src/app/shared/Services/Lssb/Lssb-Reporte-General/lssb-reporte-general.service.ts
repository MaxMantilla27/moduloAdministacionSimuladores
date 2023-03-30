import { HttpClient,HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LssbEnvioEstadoCertificacionAlumnoDTO } from 'src/app/Models/Lssb/LssbReporteGeneralDTO';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LssbReporteGeneralService {

  public urlBase=environment.url_api+'LssbReporteGeneral';
  constructor(private http: HttpClient) { }

  public ObtenerReporteGeneralLssb(): Observable<any> {
    return this.http.get<any>(this.urlBase + '/ObtenerReporteGeneralLssb');
  }
  public ObtenerComboCertificacionLssb(): Observable<any> {
    return this.http.get<any>(this.urlBase + '/ObtenerComboCertificacionLssb');
  }
  public InsertarCertificacionLssb(json:LssbEnvioEstadoCertificacionAlumnoDTO): Observable<any> {
    return this.http.post<any>(this.urlBase + '/InsertarCertificacionLssb',json);
  }
}
