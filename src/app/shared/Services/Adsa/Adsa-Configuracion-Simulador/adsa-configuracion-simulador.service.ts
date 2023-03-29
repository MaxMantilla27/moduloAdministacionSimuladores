import { HttpClient,HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { actualizarInterfaz } from 'src/app/Models/Adsa/AdsaTipoRespuesta';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AdsaConfiguracionSimuladorService {
  public urlBase=environment.url_api+'AdsaConfiguracionSimulador';
  constructor(private http: HttpClient) { }

  public AdsaObtenerConfiguracionSimulador():Observable<any>{
    return this.http.get<any>(this.urlBase +'/AdsaObtenerConfiguracionSimulador');
  }

  public AdsaActualizarConfiguracionSimulador(Json:actualizarInterfaz):Observable<any>{
    const formData: FormData = new FormData();
    formData.append('file', Json.file);
    formData.append('Id', Json.id.toString());
    formData.append('UrlVideo', Json.urlVideo.toString());
    formData.append('Logo', Json.logo.toString());
    formData.append('PorcentajeMinimoAprobacion', Json.porcentajeMinimoAprobacion.toString());
    formData.append('VigenciaAcceso', Json.vigenciaAcceso.toString());
    const req= new HttpRequest('POST', `${this.urlBase}/AdsaActualizarConfiguracionSimulador`,formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req)
  }
}
