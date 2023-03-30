import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { actualizarParametrosNivel, actualizarTipoRespuestaDTO } from 'src/app/Models/Labc/LabcTipoRespuesta';

@Injectable({
  providedIn: 'root'
})
export class LabcTipoRespuestaService {

  ObtenerSubcategoriaCombo(envio: any) {
    throw new Error('Method not implemented.');
  }
  ObtenerComboDominio() {
    throw new Error('Method not implemented.');
  }

  public urlBase=environment.url_api+'LabcTipoRespuesta';
  public urlBase2=environment.url_api+'LabcParametrosNivel';
  constructor(private http: HttpClient) { }


  public ObtenerTipoRespuesta():Observable<any>{
    return this.http.get<any>(this.urlBase+'/ObtenerTipoRespuestaEntity');
  }

  public actualizarTipoRespuesta(Json:actualizarTipoRespuestaDTO):Observable<any>{
    return this.http.post<any>(this.urlBase+'/actualizarTipoRespuesta',Json);
  }

  public ObtenerParametrosNivelEntity():Observable<any>{
    return this.http.get<any>(this.urlBase2+'/ObtenerParametrosNivelEntity');
  }

  public actualizarParametrosNivel(Json:actualizarParametrosNivel):Observable<any>{
    return this.http.post<any>(this.urlBase2+'/actualizarLabcParametroNivel',Json);
  }


}
