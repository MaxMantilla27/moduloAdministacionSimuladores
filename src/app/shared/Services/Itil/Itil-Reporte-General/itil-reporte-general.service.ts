import { HttpClient,HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItilEnvioEstadoCertificacionAlumnoDTO } from 'src/app/Models/Itil/ItilReporteGeneralDTO';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItilReporteGeneralService {

  public urlBase=environment.url_api+'ItilReporteGeneral';
  constructor(private http: HttpClient) { }

  public ObtenerReporteGeneralItil(): Observable<any> {
    return this.http.get<any>(this.urlBase + '/ObtenerReporteGeneralItil');
  }
  public ObtenerComboCertificacionItil(): Observable<any> {
    return this.http.get<any>(this.urlBase + '/ObtenerComboCertificacionItil');
  }
  public InsertarCertificacionItil(json:ItilEnvioEstadoCertificacionAlumnoDTO): Observable<any> {
    return this.http.post<any>(this.urlBase + '/InsertarCertificacionItil',json);
  }
}
