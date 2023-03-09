import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { actualizarTipoRespuestaDTO } from 'src/app/Models/TipoRespuesta';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PmpTipoRespuestaService {

  public urlBase=environment.url_api+'PmpTipoRespuesta';
  public urlBase2=environment.url_api+'PmpParametrosNivel';
  public urlBase3=environment.url_api+'PmpModo';
  constructor(private http: HttpClient) { }


  public ObtenerTipoRespuesta():Observable<any>{
    return this.http.get<any>(this.urlBase+'/ObtenerTipoRespuestaEntity');
  }

  public actualizarTipoRespuesta(Json:actualizarTipoRespuestaDTO):Observable<any>{
    console.log(Json)
    return this.http.post<any>(this.urlBase+'/actualizarTipoRespuesta',Json);
  }

  public ObtenerParametrosNivelEntity():Observable<any>{
    return this.http.get<any>(this.urlBase2+'/ObtenerParametrosNivelEntity');
  }

  public ObtenerDominioCategorias():Observable<any>{
    return this.http.get<any>(this.urlBase3 +'/ObtenerDominioCategorias');
  }

}