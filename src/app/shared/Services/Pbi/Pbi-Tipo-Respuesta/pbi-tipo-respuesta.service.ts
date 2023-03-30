import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { actualizarTipoRespuestaDTO,actualizarInterfaz, actualizarParametrosNivel } from 'src/app/Models/Pbi/PbiTipoRespuesta';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PbiTipoRespuestaService {
  ObtenerSubcategoriaCombo(envio: any) {
    throw new Error('Method not implemented.');
  }
  ObtenerComboDominio() {
    throw new Error('Method not implemented.');
  }

  public urlBase=environment.url_api+'PbiTipoRespuesta';
  public urlBase2=environment.url_api+'PbiParametrosNivel';

  constructor(private http: HttpClient) { }


  public ObtenerTipoRespuesta():Observable<any>{
    return this.http.get<any>(this.urlBase+'/ObtenerTipoRespuestaEntity');
  }

  public actualizarTipoRespuesta(Json:actualizarTipoRespuestaDTO):Observable<any>{
    return this.http.post<any>(this.urlBase+'/actualizarTipoRespuesta',Json);
  }

  public actualizarParametrosNivel(Json:actualizarParametrosNivel):Observable<any>{
    return this.http.post<any>(this.urlBase2+'/actualizarPbiParametroNivel',Json);
  }

  public ObtenerParametrosNivelEntity():Observable<any>{
    return this.http.get<any>(this.urlBase2+'/ObtenerParametrosNivelEntity');
  }

}
