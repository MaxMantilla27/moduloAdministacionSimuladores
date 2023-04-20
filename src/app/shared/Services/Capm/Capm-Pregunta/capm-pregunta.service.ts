import { HttpClient,HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CapmEnvioFilePreguntaActualizarDTO, CapmEnvioFilePreguntaDTO } from 'src/app/Models/Capm/CapmPreguntaDTO';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CapmPreguntaService {

  public urlBase=environment.url_api+'CapmPregunta';
  constructor(private http: HttpClient) { }

  public ObtenerPregunta(): Observable<any> {
    return this.http.get<any>(this.urlBase + '/ObtenerListaModoDapper');
  }

  public ObtenerCapmPregunta(IdPregunta: number):Observable<any>{
    return this.http.post<any>(this.urlBase+'/ObtenerCapmPregunta?IdPregunta='+IdPregunta,'');
  }

  public AgregarPregunta(listaPregunta: CapmEnvioFilePreguntaDTO):Observable<any>{
    const formData: FormData = new FormData();
    console.log(listaPregunta);
    formData.append('Id', listaPregunta.Id.toString());
    formData.append('IdSimuladorCapmDominio', listaPregunta.IdSimuladorCapmDominio.toString());
    formData.append('IdSimuladorCapmTarea', listaPregunta.IdSimuladorCapmTarea.toString());
    formData.append('IdSimuladorTipoRespuesta', listaPregunta.IdSimuladorTipoRespuesta.toString());
    formData.append('Enunciado', listaPregunta.Enunciado.toString());
    formData.append('UrlImagenPreguntaArchivo', listaPregunta.UrlImagenPreguntaArchivo);
    formData.append('IdCapmTipoPreguntaClasificacion', listaPregunta.IdCapmTipoPreguntaClasificacion.toString());
    formData.append('TieneRetroalimentacionUnica', listaPregunta.TieneRetroalimentacionUnica.toString());
    if(listaPregunta.UrlRetroalimentacionVideo!=null){
      formData.append('UrlRetroalimentacionVideo', listaPregunta.UrlRetroalimentacionVideo.toString() );
    }
    formData.append('Retroalimentacion', listaPregunta.Retroalimentacion.toString() );
    formData.append('ImgRetroalimentacionArchivo', listaPregunta.ImgRetroalimentacionArchivo);
    console.log(listaPregunta.Respuestas)
    for (let i = 0; i < listaPregunta.Respuestas.length; i++) {
      formData.append('Respuestas[' + i + '][Id]', listaPregunta.Respuestas[i].Id.toString());
      formData.append('Respuestas[' + i + '][IdSimuladorCapmPregunta]', listaPregunta.Respuestas[i].IdSimuladorCapmPregunta.toString());
      formData.append('Respuestas[' + i + '][Respuesta]', listaPregunta.Respuestas[i].Respuesta.toString());
      formData.append('Respuestas[' + i + '][Valor]', listaPregunta.Respuestas[i].Valor.toString());
      formData.append('Respuestas[' + i + '][Correcto]', listaPregunta.Respuestas[i].Correcto.toString());
      formData.append('Respuestas[' + i + '][Puntaje]', listaPregunta.Respuestas[i].Puntaje.toString());
      formData.append('Respuestas[' + i + '][UrlRetroalimentacionVideo]', listaPregunta.Respuestas[i].UrlRetroalimentacionVideo.toString());
      formData.append('Respuestas[' + i + '][Explicacion]', listaPregunta.Respuestas[i].Explicacion.toString());
      formData.append('Respuestas[' + i + '][UrlImagenArchivo]', listaPregunta.Respuestas[i].UrlImagenArchivo);
    }
   console.log(formData)


   return this.http.post<any>(this.urlBase+'/RegistrarCapmPregunta',formData);
  }
  public EliminarPreguntaCapm(IdPregunta: number):Observable<any>{
    return this.http.post<any>(this.urlBase+'/EliminarPreguntaCapm?IdPregunta='+IdPregunta,'');
  }
  public ActualizarPregunta(listaPregunta: CapmEnvioFilePreguntaActualizarDTO):Observable<any>{
    const formData: FormData = new FormData();
    console.log(listaPregunta);
    formData.append('Id', listaPregunta.Id.toString());
    formData.append('IdSimuladorCapmDominio', listaPregunta.IdSimuladorCapmDominio.toString());
    formData.append('IdSimuladorCapmTarea', listaPregunta.IdSimuladorCapmTarea.toString());
    formData.append('IdSimuladorTipoRespuesta', listaPregunta.IdSimuladorTipoRespuesta.toString());
    formData.append('Enunciado', listaPregunta.Enunciado.toString());
    formData.append('UrlImagenPreguntaArchivo', listaPregunta.UrlImagenPreguntaArchivo);
    formData.append('IdCapmTipoPreguntaClasificacion', listaPregunta.IdCapmTipoPreguntaClasificacion.toString());
    formData.append('TieneRetroalimentacionUnica', listaPregunta.TieneRetroalimentacionUnica.toString());
    if(listaPregunta.UrlRetroalimentacionVideo!=null){
      formData.append('UrlRetroalimentacionVideo', listaPregunta.UrlRetroalimentacionVideo.toString() );
    }
    formData.append('Retroalimentacion', listaPregunta.Retroalimentacion.toString() );
    formData.append('ImgRetroalimentacionArchivo', listaPregunta.ImgRetroalimentacionArchivo);
   console.log(formData)
   return this.http.post<any>(this.urlBase+'/ActualizarCapmPregunta',formData);
  }
}
