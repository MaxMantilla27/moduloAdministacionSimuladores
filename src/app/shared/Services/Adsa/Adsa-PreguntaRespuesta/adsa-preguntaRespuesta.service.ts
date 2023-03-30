import { HttpClient,HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdsaPreguntaRespuestaEnvioDTO } from 'src/app/Models/Adsa/AdsaPreguntaRespuestaDTO';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AdsaPreguntaRespuestaService {

  public urlBase=environment.url_api+'AdsaPreguntaRespuesta';

  constructor(private http: HttpClient) { }


  public ObtenerAlternativa(idPreguntaRespuesta: any):Observable<any>{
    console.log(idPreguntaRespuesta)
    return this.http.get<any>(this.urlBase+'/ObtenerAlternativa?idPregunta='+idPreguntaRespuesta);
  }
  public EliminarPreguntaRespuestaAdsa(IdRespuesta: number):Observable<any>{
    return this.http.post<any>(this.urlBase+'/EliminarPreguntaRespuestaAdsa?IdRespuesta='+IdRespuesta,'');
  }

  public ActualizarAdsaPreguntaRespuesta(Json: AdsaPreguntaRespuestaEnvioDTO):Observable<any>{
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
    const req= new HttpRequest('POST', `${this.urlBase}/ActualizarAdsaPreguntaRespuesta`,formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req)
  }



}