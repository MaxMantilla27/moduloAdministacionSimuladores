import { HttpClient,HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DevopsEnvioEstadoCertificacionAlumnoDTO } from 'src/app/Models/Devops/DevopsReporteGeneralDTO';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DevopsReporteGeneralService {

  public urlBase=environment.url_api+'DevopsReporteGeneral';
  constructor(private http: HttpClient) { }

  public ObtenerReporteGeneralDevops(): Observable<any> {
    return this.http.get<any>(this.urlBase + '/ObtenerReporteGeneralDevops');
  }
  public ObtenerComboCertificacionDevops(): Observable<any> {
    return this.http.get<any>(this.urlBase + '/ObtenerComboCertificacionDevops');
  }
  public InsertarCertificacionDevops(json:DevopsEnvioEstadoCertificacionAlumnoDTO): Observable<any> {
    return this.http.post<any>(this.urlBase + '/InsertarCertificacionDevops',json);
  }
}
