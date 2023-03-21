import { HttpClient,HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PmpPreguntaRespuestaService {

  public urlBase=environment.url_api+'PmpPreguntaRespuesta';

  constructor(private http: HttpClient) { }


  public ObtenerAlternativa(idPreguntaRespuesta: any):Observable<any>{
    console.log(idPreguntaRespuesta)
    return this.http.get<any>(this.urlBase+'/ObtenerAlternativa?idPregunta='+idPreguntaRespuesta);

  }



}