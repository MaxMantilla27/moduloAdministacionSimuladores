import { HttpClient,HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CapmEnvioEstadoCertificacionAlumnoDTO } from 'src/app/Models/Capm/CapmReporteGeneralDTO';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CapmReporteGeneralService {

  public urlBase=environment.url_api+'CapmReporteGeneral';
  constructor(private http: HttpClient) { }

  public ObtenerReporteGeneralCapm(): Observable<any> {
    return this.http.get<any>(this.urlBase + '/ObtenerReporteGeneralCapm');
  }
  public ObtenerComboCertificacionCapm(): Observable<any> {
    return this.http.get<any>(this.urlBase + '/ObtenerComboCertificacionCapm');
  }
  public InsertarCertificacionCapm(json:CapmEnvioEstadoCertificacionAlumnoDTO): Observable<any> {
    return this.http.post<any>(this.urlBase + '/InsertarCertificacionCapm',json);
  }
}
