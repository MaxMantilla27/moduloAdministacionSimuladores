import { HttpClient,HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TogEnvioEstadoCertificacionAlumnoDTO } from 'src/app/Models/Tog/TogReporteGeneralDTO';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TogReporteGeneralService {

  public urlBase=environment.url_api+'TogReporteGeneral';
  constructor(private http: HttpClient) { }

  public ObtenerReporteGeneralTog(): Observable<any> {
    return this.http.get<any>(this.urlBase + '/ObtenerReporteGeneralTog');
  }
  public ObtenerComboCertificacionTog(): Observable<any> {
    return this.http.get<any>(this.urlBase + '/ObtenerComboCertificacionTog');
  }
  public InsertarCertificacionTog(json:TogEnvioEstadoCertificacionAlumnoDTO): Observable<any> {
    return this.http.post<any>(this.urlBase + '/InsertarCertificacionTog',json);
  }
}
