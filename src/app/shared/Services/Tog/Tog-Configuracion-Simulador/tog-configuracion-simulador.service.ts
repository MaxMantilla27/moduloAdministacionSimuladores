import { HttpClient,HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { actualizarInterfaz } from 'src/app/Models/Tog/TogTipoRespuesta';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TogConfiguracionSimuladorService {
  public urlBase=environment.url_api+'TogConfiguracionSimulador';
  constructor(private http: HttpClient) { }

  public TogObtenerConfiguracionSimulador():Observable<any>{
    return this.http.get<any>(this.urlBase +'/TogObtenerConfiguracionSimulador');
  }

  public TogActualizarConfiguracionSimulador(Json:actualizarInterfaz):Observable<any>{
    const formData: FormData = new FormData();
    formData.append('file', Json.file);
    formData.append('Id', Json.id.toString());
    formData.append('UrlVideo', Json.urlVideo.toString());
    formData.append('Logo', Json.logo.toString());
    formData.append('porcentajeMinimoAprobacionNivel1', Json.porcentajeMinimoAprobacionNivel1.toString());
    formData.append('porcentajeMinimoAprobacionNivel2', Json.porcentajeMinimoAprobacionNivel2.toString());
    formData.append('VigenciaAcceso', Json.vigenciaAcceso.toString());
    const req= new HttpRequest('POST', `${this.urlBase}/TogActualizarConfiguracionSimulador`,formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req)
  }
}
