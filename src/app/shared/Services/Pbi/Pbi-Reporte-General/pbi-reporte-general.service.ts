import { HttpClient,HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PbiEnvioEstadoCertificacionAlumnoDTO } from 'src/app/Models/Pbi/PbiReporteGeneralDTO';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PbiReporteGeneralService {

  public urlBase=environment.url_api+'PbiReporteGeneral';
  constructor(private http: HttpClient) { }

  public ObtenerReporteGeneralPbi(): Observable<any> {
    return this.http.get<any>(this.urlBase + '/ObtenerReporteGeneralPbi');
  }
  public ObtenerComboCertificacionPbi(): Observable<any> {
    return this.http.get<any>(this.urlBase + '/ObtenerComboCertificacionPbi');
  }
  public InsertarCertificacionPbi(json:PbiEnvioEstadoCertificacionAlumnoDTO): Observable<any> {
    return this.http.post<any>(this.urlBase + '/InsertarCertificacionPbi',json);
  }
}
