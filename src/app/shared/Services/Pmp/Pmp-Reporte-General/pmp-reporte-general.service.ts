import { HttpClient,HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PmpEnvioEstadoCertificacionAlumnoDTO } from 'src/app/Models/Pmp/PmpReporteGeneralDTO';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PmpReporteGeneralService {

  public urlBase=environment.url_api+'PmpReporteGeneral';
  constructor(private http: HttpClient) { }

  public ObtenerReporteGeneralPmp(): Observable<any> {
    return this.http.get<any>(this.urlBase + '/ObtenerReporteGeneralPmp');
  }
  public ObtenerComboCertificacionPmp(): Observable<any> {
    return this.http.get<any>(this.urlBase + '/ObtenerComboCertificacionPmp');
  }
  public InsertarCertificacionPmp(json:PmpEnvioEstadoCertificacionAlumnoDTO): Observable<any> {
    return this.http.post<any>(this.urlBase + '/InsertarCertificacionPmp',json);
  }
}
