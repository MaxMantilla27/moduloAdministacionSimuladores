import { HttpClient,HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { actualizarInterfaz } from 'src/app/Models/Lssb/LssbTipoRespuesta';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LssbConfiguracionSimuladorService {
  public urlBase=environment.url_api+'LssbConfiguracionSimulador';
  constructor(private http: HttpClient) { }

  public LssbObtenerConfiguracionSimulador():Observable<any>{
    return this.http.get<any>(this.urlBase +'/LssbObtenerConfiguracionSimulador');
  }

  public LssbActualizarConfiguracionSimulador(Json:actualizarInterfaz):Observable<any>{
    const formData: FormData = new FormData();
    formData.append('file', Json.file);
    formData.append('Id', Json.id.toString());
    formData.append('UrlVideo', Json.urlVideo.toString());
    formData.append('Logo', Json.logo.toString());
    formData.append('PorcentajeMinimoAprobacion', Json.porcentajeMinimoAprobacion.toString());
    formData.append('VigenciaAcceso', Json.vigenciaAcceso.toString());
    const req= new HttpRequest('POST', `${this.urlBase}/LssbActualizarConfiguracionSimulador`,formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req)
  }
}
