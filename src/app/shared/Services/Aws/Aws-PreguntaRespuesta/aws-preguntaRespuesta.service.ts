import { HttpClient,HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AwsPreguntaRespuestaEnvioDTO } from 'src/app/Models/Aws/AwsPreguntaRespuestaDTO';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AwsPreguntaRespuestaService {

  public urlBase=environment.url_api+'AwsPreguntaRespuesta';

  constructor(private http: HttpClient) { }

  public ObtenerAlternativa(IdPregunta: any):Observable<any>{
    return this.http.get<any>(this.urlBase+'/ObtenerAlternativa?idPregunta='+IdPregunta);
  }
  public EliminarPreguntaRespuestaAws(IdRespuesta: number):Observable<any>{
    return this.http.post<any>(this.urlBase+'/EliminarPreguntaRespuestaAws?IdRespuesta='+IdRespuesta,'');
  }

  public ActualizarAwsPreguntaRespuesta(Json: AwsPreguntaRespuestaEnvioDTO):Observable<any>{
    const formData: FormData = new FormData();
    formData.append('Id', Json.Id.toString());
    formData.append('Respuesta', Json.Respuesta.toString());
    formData.append('Puntaje', Json.Puntaje.toString());
    if(Json.Explicacion!=null){
      formData.append('Explicacion', Json.Explicacion.toString());
    }
    formData.append('Correcto', Json.Correcto.toString());
    if(Json.UrlVideo!=null){
      formData.append('UrlVideo', Json.UrlVideo.toString());
    }
    formData.append('ImagenArchivo', Json.ImagenArchivo);
    const req= new HttpRequest('POST', `${this.urlBase}/ActualizarAwsPreguntaRespuesta`,formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req)
  }
}
