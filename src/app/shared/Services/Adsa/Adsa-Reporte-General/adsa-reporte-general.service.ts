import { HttpClient,HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdsaEnvioEstadoCertificacionAlumnoDTO } from 'src/app/Models/Adsa/AdsaReporteGeneralDTO';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdsaReporteGeneralService {

  public urlBase=environment.url_api+'AdsaReporteGeneral';
  constructor(private http: HttpClient) { }

  public ObtenerReporteGeneralAdsa(): Observable<any> {
    return this.http.get<any>(this.urlBase + '/ObtenerReporteGeneralAdsa');
  }
  public ObtenerComboCertificacionAdsa(): Observable<any> {
    return this.http.get<any>(this.urlBase + '/ObtenerComboCertificacionAdsa');
  }
  public InsertarCertificacionAdsa(json:AdsaEnvioEstadoCertificacionAlumnoDTO): Observable<any> {
    return this.http.post<any>(this.urlBase + '/InsertarCertificacionAdsa',json);
  }
}
