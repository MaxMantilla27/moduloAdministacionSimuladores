import { HttpClient,HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AwsEnvioEstadoCertificacionAlumnoDTO } from 'src/app/Models/Aws/AwsReporteGeneralDTO';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AwsReporteGeneralService {

  public urlBase=environment.url_api+'AwsReporteGeneral';
  constructor(private http: HttpClient) { }

  public ObtenerReporteGeneralAws(): Observable<any> {
    return this.http.get<any>(this.urlBase + '/ObtenerReporteGeneralAws');
  }
  public ObtenerComboCertificacionAws(): Observable<any> {
    return this.http.get<any>(this.urlBase + '/ObtenerComboCertificacionAws');
  }
  public InsertarCertificacionAws(json:AwsEnvioEstadoCertificacionAlumnoDTO): Observable<any> {
    return this.http.post<any>(this.urlBase + '/InsertarCertificacionAws',json);
  }
}
