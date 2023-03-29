import { HttpClient,HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LabcEnvioEstadoCertificacionAlumnoDTO } from 'src/app/Models/Labc/LabcReporteGeneralDTO';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LabcReporteGeneralService {

  public urlBase=environment.url_api+'LabcReporteGeneral';
  constructor(private http: HttpClient) { }

  public ObtenerReporteGeneralLabc(): Observable<any> {
    return this.http.get<any>(this.urlBase + '/ObtenerReporteGeneralLabc');
  }
  public ObtenerComboCertificacionLabc(): Observable<any> {
    return this.http.get<any>(this.urlBase + '/ObtenerComboCertificacionLabc');
  }
  public InsertarCertificacionLabc(json:LabcEnvioEstadoCertificacionAlumnoDTO): Observable<any> {
    return this.http.post<any>(this.urlBase + '/InsertarCertificacionLabc',json);
  }
}
