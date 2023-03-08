import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { actualizarTipoRespuestaDTO } from 'src/app/Models/TipoRespuesta';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TipoRespuestaService {

  public urlBase=environment.url_api+'PmpTipoRespuesta';
  constructor(private http: HttpClient) { }


  public ObtenerTipoRespuesta():Observable<any>{
    return this.http.get<any>(this.urlBase+'/ObtenerTipoRespuestaEntity');
  }


  public actualizarTipoRespuesta(Json:actualizarTipoRespuestaDTO):Observable<any>{
    console.log(Json)
    return this.http.post<any>(this.urlBase+'/actualizarTipoRespuesta',Json);
  }
}
