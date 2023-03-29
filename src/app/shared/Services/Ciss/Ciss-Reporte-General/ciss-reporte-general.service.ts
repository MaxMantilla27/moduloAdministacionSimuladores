import { HttpClient,HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CissEnvioEstadoCertificacionAlumnoDTO } from 'src/app/Models/Ciss/CissReporteGeneralDTO';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CissReporteGeneralService {

  public urlBase=environment.url_api+'CissReporteGeneral';
  constructor(private http: HttpClient) { }

  public ObtenerReporteGeneralCiss(): Observable<any> {
    return this.http.get<any>(this.urlBase + '/ObtenerReporteGeneralCiss');
  }
  public ObtenerComboCertificacionCiss(): Observable<any> {
    return this.http.get<any>(this.urlBase + '/ObtenerComboCertificacionCiss');
  }
  public InsertarCertificacionCiss(json:CissEnvioEstadoCertificacionAlumnoDTO): Observable<any> {
    return this.http.post<any>(this.urlBase + '/InsertarCertificacionCiss',json);
  }
}
