import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { actualizarTipoRespuestaDTO,actualizarInterfaz, actualizarParametrosNivel } from 'src/app/Models/Aws/AwsTipoRespuesta';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AwsTipoRespuestaService {
  ObtenerSubcategoriaCombo(envio: any) {
    throw new Error('Method not implemented.');
  }
  ObtenerComboDominio() {
    throw new Error('Method not implemented.');
  }

  public urlBase=environment.url_api+'AwsTipoRespuesta';
  public urlBase2=environment.url_api+'AwsParametrosNivel';

  constructor(private http: HttpClient) { }


  public ObtenerTipoRespuesta():Observable<any>{
    return this.http.get<any>(this.urlBase+'/ObtenerTipoRespuestaEntity');
  }

  public actualizarTipoRespuesta(Json:actualizarTipoRespuestaDTO):Observable<any>{
    return this.http.post<any>(this.urlBase+'/actualizarTipoRespuesta',Json);
  }

  public actualizarParametrosNivel(Json:actualizarParametrosNivel):Observable<any>{
    return this.http.post<any>(this.urlBase2+'/actualizarAwsParametroNivel',Json);
  }

  public ObtenerParametrosNivelEntity():Observable<any>{
    return this.http.get<any>(this.urlBase2+'/ObtenerParametrosNivelEntity');
  }

}
