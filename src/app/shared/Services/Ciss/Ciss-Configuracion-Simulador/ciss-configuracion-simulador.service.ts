import { HttpClient,HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { actualizarInterfaz } from 'src/app/Models/Ciss/CissTipoRespuesta';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CissConfiguracionSimuladorService {

  public urlBase=environment.url_api+'CissConfiguracionSimulador';
  constructor(private http: HttpClient) { }

  public CissObtenerConfiguracionSimulador():Observable<any>{
    return this.http.get<any>(this.urlBase +'/CissObtenerConfiguracionSimulador');
  }

  public CissActualizarConfiguracionSimulador(Json:actualizarInterfaz):Observable<any>{
    const formData: FormData = new FormData();
    formData.append('file', Json.file);
    formData.append('Id', Json.id.toString());
    formData.append('UrlVideo', Json.urlVideo.toString());
    formData.append('Logo', Json.logo.toString());
    formData.append('PorcentajeMinimoAprobacion', Json.porcentajeMinimoAprobacion.toString());
    formData.append('VigenciaAcceso', Json.vigenciaAcceso.toString());
    const req= new HttpRequest('POST', `${this.urlBase}/CissActualizarConfiguracionSimulador`,formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req)
  }
}
