import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { actualizarTipoRespuestaDTO,actualizarInterfaz } from 'src/app/Models/Pmp/TipoRespuesta';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PmpTipoRespuestaService {
  ObtenerSubcategoriaCombo(envio: any) {
    throw new Error('Method not implemented.');
  }
  ObtenerComboDominio() {
    throw new Error('Method not implemented.');
  }

  public urlBase=environment.url_api+'PmpTipoRespuesta';
  public urlBase2=environment.url_api+'PmpParametrosNivel';
  public urlBase3=environment.url_api+'PmpTipoDominio';
  public urlBase4= environment.url_api+'PmpConfiguracionSimulador';
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

}
