import { HttpClient,HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AdsaEnvioFilePreguntaActualizarDTO, AdsaEnvioFilePreguntaDTO, adsaPreguntaDTO } from 'src/app/Models/Adsa/AdsaPreguntaDTO';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AdsaPreguntaService {

  public urlBase=environment.url_api+'AdsaPregunta';
  constructor(private http: HttpClient) { }

  public ObtenerPregunta(): Observable<any> {
    return this.http.get<any>(this.urlBase + '/ObtenerListaModoDapper');
  }

  public ObtenerAdsaPregunta(idPregunta: any):Observable<any>{
    console.log(idPregunta)
    return this.http.post<any>(this.urlBase+'/ObtenerAdsaPregunta?IdPregunta='+idPregunta,'');
  }

  public AgregarPregunta(listaPregunta: AdsaEnvioFilePreguntaDTO):Observable<any>{
    const formData: FormData = new FormData();
    console.log(listaPregunta);
    formData.append('Id', listaPregunta.Id.toString());
    formData.append('IdSimuladorAdsaDominio', listaPregunta.IdSimuladorAdsaDominio.toString());
    formData.append('IdSimuladorAdsaTarea', listaPregunta.IdSimuladorAdsaTarea.toString());
    formData.append('IdSimuladorTipoRespuesta', listaPregunta.IdSimuladorTipoRespuesta.toString());
    formData.append('Enunciado', listaPregunta.Enunciado.toString());
    formData.append('UrlImagenPreguntaArchivo', listaPregunta.UrlImagenPreguntaArchivo);
    formData.append('IdAdsaTipoPreguntaClasificacion', listaPregunta.IdAdsaTipoPreguntaClasificacion.toString());
    formData.append('TieneRetroalimentacionUnica', listaPregunta.TieneRetroalimentacionUnica.toString());
    if(listaPregunta.UrlRetroalimentacionVideo!=null){
      formData.append('UrlRetroalimentacionVideo', listaPregunta.UrlRetroalimentacionVideo.toString() );
    }
    formData.append('Retroalimentacion', listaPregunta.Retroalimentacion.toString() );
    formData.append('ImgRetroalimentacionArchivo', listaPregunta.ImgRetroalimentacionArchivo);
    console.log(listaPregunta.Respuestas)
    for (let i = 0; i < listaPregunta.Respuestas.length; i++) {
      formData.append('Respuestas[' + i + '][Id]', listaPregunta.Respuestas[i].Id.toString());
      formData.append('Respuestas[' + i + '][IdSimuladorAdsaPregunta]', listaPregunta.Respuestas[i].IdSimuladorAdsaPregunta.toString());
      formData.append('Respuestas[' + i + '][Respuesta]', listaPregunta.Respuestas[i].Respuesta.toString());
      formData.append('Respuestas[' + i + '][Valor]', listaPregunta.Respuestas[i].Valor.toString());
      formData.append('Respuestas[' + i + '][Correcto]', listaPregunta.Respuestas[i].Correcto.toString());
      formData.append('Respuestas[' + i + '][Puntaje]', listaPregunta.Respuestas[i].Puntaje.toString());
      formData.append('Respuestas[' + i + '][UrlRetroalimentacionVideo]', listaPregunta.Respuestas[i].UrlRetroalimentacionVideo.toString());
      formData.append('Respuestas[' + i + '][Explicacion]', listaPregunta.Respuestas[i].Explicacion.toString());
      formData.append('Respuestas[' + i + '][UrlImagenArchivo]', listaPregunta.Respuestas[i].UrlImagenArchivo);
    }
   console.log(formData)


   return this.http.post<any>(this.urlBase+'/RegistrarAdsaPregunta',formData);
  }
  public EliminarPreguntaAdsa(IdPregunta: number):Observable<any>{
    return this.http.post<any>(this.urlBase+'/EliminarPreguntaAdsa?IdPregunta='+IdPregunta,'');
  }
  public ActualizarPregunta(listaPregunta: AdsaEnvioFilePreguntaActualizarDTO):Observable<any>{
    const formData: FormData = new FormData();
    console.log(listaPregunta);
    formData.append('Id', listaPregunta.Id.toString());
    formData.append('IdSimuladorAdsaDominio', listaPregunta.IdSimuladorAdsaDominio.toString());
    formData.append('IdSimuladorAdsaTarea', listaPregunta.IdSimuladorAdsaTarea.toString());
    formData.append('IdSimuladorTipoRespuesta', listaPregunta.IdSimuladorTipoRespuesta.toString());
    formData.append('Enunciado', listaPregunta.Enunciado.toString());
    formData.append('UrlImagenPreguntaArchivo', listaPregunta.UrlImagenPreguntaArchivo);
    formData.append('IdAdsaTipoPreguntaClasificacion', listaPregunta.IdAdsaTipoPreguntaClasificacion.toString());
    formData.append('TieneRetroalimentacionUnica', listaPregunta.TieneRetroalimentacionUnica.toString());
    if(listaPregunta.UrlRetroalimentacionVideo!=null){
      formData.append('UrlRetroalimentacionVideo', listaPregunta.UrlRetroalimentacionVideo.toString() );
    }
    formData.append('Retroalimentacion', listaPregunta.Retroalimentacion.toString() );
    formData.append('ImgRetroalimentacionArchivo', listaPregunta.ImgRetroalimentacionArchivo);
   console.log(formData)
   return this.http.post<any>(this.urlBase+'/ActualizarAdsaPregunta',formData);
  }

}
