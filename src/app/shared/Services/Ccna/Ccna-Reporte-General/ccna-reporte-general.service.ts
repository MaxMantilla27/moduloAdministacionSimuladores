import { HttpClient,HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CcnaEnvioEstadoCertificacionAlumnoDTO } from 'src/app/Models/Ccna/CcnaReporteGeneralDTO';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CcnaReporteGeneralService {

  public urlBase=environment.url_api+'CcnaReporteGeneral';
  constructor(private http: HttpClient) { }

  public ObtenerReporteGeneralCcna(): Observable<any> {
    return this.http.get<any>(this.urlBase + '/ObtenerReporteGeneralCcna');
  }
  public ObtenerComboCertificacionCcna(): Observable<any> {
    return this.http.get<any>(this.urlBase + '/ObtenerComboCertificacionCcna');
  }
  public InsertarCertificacionCcna(json:CcnaEnvioEstadoCertificacionAlumnoDTO): Observable<any> {
    return this.http.post<any>(this.urlBase + '/InsertarCertificacionCcna',json);
  }
}
