import { HttpClient,HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TogPreguntaRespuestaEnvioAgregarDTO, TogPreguntaRespuestaEnvioAgregarNivel2DTO, TogPreguntaRespuestaEnvioDTO, TogPreguntaRespuestaEnvioNivel2DTO } from 'src/app/Models/Tog/TogPreguntaRespuestaDTO';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class TogPreguntaRespuestaService {

  public urlBase=environment.url_api+'TogPreguntaRespuesta';

  constructor(private http: HttpClient) { }

  public ObtenerAlternativaNivel1(IdPregunta: number):Observable<any>{
    return this.http.get<any>(this.urlBase+'/ObtenerAlternativaNivel1?idPregunta='+IdPregunta);
  }
  public ObtenerAlternativaNivel2(IdPregunta: number):Observable<any>{
    return this.http.get<any>(this.urlBase+'/ObtenerAlternativaNivel2?idPregunta='+IdPregunta);
  }
  public EliminarPreguntaRespuestaTog(IdRespuesta: number,IdNivel:number):Observable<any>{
    return this.http.post<any>(this.urlBase+'/EliminarPreguntaRespuestaTog?IdRespuesta='+IdRespuesta+'&IdNivel='+IdNivel,'');
  }

  public ActualizarTogPreguntaRespuesta(Json: TogPreguntaRespuestaEnvioDTO):Observable<any>{
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
    const req= new HttpRequest('POST', `${this.urlBase}/ActualizarTogPreguntaRespuestaNivel1`,formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req)
  }
  public ActualizarTogPreguntaRespuestaNivel2(Json: TogPreguntaRespuestaEnvioNivel2DTO):Observable<any>{
    const formData: FormData = new FormData();
    formData.append('Id', Json.Id.toString());
    formData.append('Respuesta', Json.Respuesta.toString());
    formData.append('IdSimuladorTogNivel', Json.IdSimuladorTogNivel.toString());
    formData.append('Puntaje', Json.Puntaje.toString());
    if(Json.Explicacion!=null){
      formData.append('Explicacion', Json.Explicacion.toString());
    }
    formData.append('OpcionRespuesta', Json.OpcionRespuesta.toString());
    if(Json.UrlVideo!=null){
      formData.append('UrlVideo', Json.UrlVideo.toString());
    }
    formData.append('ImagenArchivo', Json.ImagenArchivo);
    const req= new HttpRequest('POST', `${this.urlBase}/ActualizarTogPreguntaRespuestaNivel2`,formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req)
  }
  public AgregarTogPreguntaRespuesta(Json: TogPreguntaRespuestaEnvioAgregarDTO):Observable<any>{
    const formData: FormData = new FormData();
    formData.append('Id', Json.Id.toString());
    formData.append('Respuesta', Json.Respuesta.toString());
    formData.append('Puntaje', Json.Puntaje.toString());
    formData.append('IdSimuladorTogPregunta', Json.IdSimuladorTogPregunta.toString());
    if(Json.Explicacion!=null){
      formData.append('Explicacion', Json.Explicacion.toString());
    }
    formData.append('Correcto', Json.Correcto.toString());
    if(Json.UrlVideo!=null){
      formData.append('UrlVideo', Json.UrlVideo.toString());
    }
    formData.append('ImagenArchivo', Json.ImagenArchivo);
    const req= new HttpRequest('POST', `${this.urlBase}/AgregarTogPreguntaRespuestaNivel1`,formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req)
  }
  public AgregarTogPreguntaRespuestaNivel2(Json: TogPreguntaRespuestaEnvioAgregarNivel2DTO):Observable<any>{
    const formData: FormData = new FormData();
    formData.append('Id', Json.Id.toString());
    formData.append('Respuesta', Json.Respuesta.toString());
    formData.append('IdSimuladorTogNivel', Json.IdSimuladorTogNivel.toString());
    formData.append('Puntaje', Json.Puntaje.toString());
    formData.append('IdSimuladorTogPregunta', Json.IdSimuladorTogPregunta.toString());
    if(Json.Explicacion!=null){
      formData.append('Explicacion', Json.Explicacion.toString());
    }
    formData.append('OpcionRespuesta', Json.OpcionRespuesta.toString());
    if(Json.UrlVideo!=null){
      formData.append('UrlVideo', Json.UrlVideo.toString());
    }
    formData.append('ImagenArchivo', Json.ImagenArchivo);
    const req= new HttpRequest('POST', `${this.urlBase}/AgregarTogPreguntaRespuestaNivel2`,formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req)
  }
}
