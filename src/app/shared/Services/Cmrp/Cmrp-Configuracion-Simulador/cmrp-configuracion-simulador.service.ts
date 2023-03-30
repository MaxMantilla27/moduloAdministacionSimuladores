import { HttpClient,HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { actualizarInterfaz } from 'src/app/Models/Cmrp/CmrpTipoRespuesta';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CmrpConfiguracionSimuladorService {
  public urlBase=environment.url_api+'CmrpConfiguracionSimulador';
  constructor(private http: HttpClient) { }

  public CmrpObtenerConfiguracionSimulador():Observable<any>{
    return this.http.get<any>(this.urlBase +'/CmrpObtenerConfiguracionSimulador');
  }

  public CmrpActualizarConfiguracionSimulador(Json:actualizarInterfaz):Observable<any>{
    const formData: FormData = new FormData();
    formData.append('file', Json.file);
    formData.append('Id', Json.id.toString());
    formData.append('UrlVideo', Json.urlVideo.toString());
    formData.append('Logo', Json.logo.toString());
    formData.append('PorcentajeMinimoAprobacion', Json.porcentajeMinimoAprobacion.toString());
    formData.append('VigenciaAcceso', Json.vigenciaAcceso.toString());
    const req= new HttpRequest('POST', `${this.urlBase}/CmrpActualizarConfiguracionSimulador`,formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req)
  }
}
