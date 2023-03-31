import { HttpClient,HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LssbPreguntaRespuestaEnvioAgregarDTO, LssbPreguntaRespuestaEnvioDTO } from 'src/app/Models/Lssb/LssbPreguntaRespuestaDTO';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LssbPreguntaRespuestaService {

  public urlBase=environment.url_api+'LssbPreguntaRespuesta';

  constructor(private http: HttpClient) { }

  public ObtenerAlternativa(IdPregunta: any):Observable<any>{
    return this.http.get<any>(this.urlBase+'/ObtenerAlternativa?idPregunta='+IdPregunta);
  }
  public EliminarPreguntaRespuestaLssb(IdRespuesta: number):Observable<any>{
    return this.http.post<any>(this.urlBase+'/EliminarPreguntaRespuestaLssb?IdRespuesta='+IdRespuesta,'');
  }

  public ActualizarLssbPreguntaRespuesta(Json: LssbPreguntaRespuestaEnvioDTO):Observable<any>{
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
    const req= new HttpRequest('POST', `${this.urlBase}/ActualizarLssbPreguntaRespuesta`,formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req)
  }
  public AgregarLssbPreguntaRespuesta(Json: LssbPreguntaRespuestaEnvioAgregarDTO):Observable<any>{
    const formData: FormData = new FormData();
    formData.append('Id', Json.Id.toString());
    formData.append('Respuesta', Json.Respuesta.toString());
    formData.append('Puntaje', Json.Puntaje.toString());
    formData.append('IdSimuladorLssbPregunta', Json.IdSimuladorLssbPregunta.toString());
    if(Json.Explicacion!=null){
      formData.append('Explicacion', Json.Explicacion.toString());
    }
    formData.append('Correcto', Json.Correcto.toString());
    if(Json.UrlVideo!=null){
      formData.append('UrlVideo', Json.UrlVideo.toString());
    }
    formData.append('ImagenArchivo', Json.ImagenArchivo);
    const req= new HttpRequest('POST', `${this.urlBase}/AgregarLssbPreguntaRespuesta`,formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req)
  }
}
