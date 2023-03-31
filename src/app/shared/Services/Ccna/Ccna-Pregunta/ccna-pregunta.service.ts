import { HttpClient,HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CcnaEnvioFilePreguntaActualizarDTO, CcnaEnvioFilePreguntaDTO, ccnaPreguntaDTO } from 'src/app/Models/Ccna/CcnaPreguntaDTO';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CcnaPreguntaService {

  public urlBase=environment.url_api+'CcnaPregunta';
  constructor(private http: HttpClient) { }

  public ObtenerPregunta(): Observable<any> {
    return this.http.get<any>(this.urlBase + '/ObtenerListaModoDapper');
  }

  public ObtenerCcnaPregunta(IdPregunta: number):Observable<any>{
    return this.http.post<any>(this.urlBase+'/ObtenerCcnaPregunta?IdPregunta='+IdPregunta,'');
  }

  public AgregarPregunta(listaPregunta: CcnaEnvioFilePreguntaDTO):Observable<any>{
    const formData: FormData = new FormData();
    console.log(listaPregunta);
    formData.append('Id', listaPregunta.Id.toString());
    formData.append('IdSimuladorCcnaDominio', listaPregunta.IdSimuladorCcnaDominio.toString());
    formData.append('IdSimuladorCcnaTarea', listaPregunta.IdSimuladorCcnaTarea.toString());
    formData.append('IdSimuladorTipoRespuesta', listaPregunta.IdSimuladorTipoRespuesta.toString());
    formData.append('Enunciado', listaPregunta.Enunciado.toString());
    formData.append('UrlImagenPreguntaArchivo', listaPregunta.UrlImagenPreguntaArchivo);
    formData.append('IdCcnaTipoPreguntaClasificacion', listaPregunta.IdCcnaTipoPreguntaClasificacion.toString());
    formData.append('TieneRetroalimentacionUnica', listaPregunta.TieneRetroalimentacionUnica.toString());
    formData.append('UrlRetroalimentacionVideo', listaPregunta.UrlRetroalimentacionVideo.toString() );
    formData.append('Retroalimentacion', listaPregunta.Retroalimentacion.toString() );
    formData.append('ImgRetroalimentacionArchivo', listaPregunta.ImgRetroalimentacionArchivo);
    console.log(listaPregunta.Respuestas)
    for (let i = 0; i < listaPregunta.Respuestas.length; i++) {
      formData.append('Respuestas[' + i + '][Id]', listaPregunta.Respuestas[i].Id.toString());
      formData.append('Respuestas[' + i + '][IdSimuladorCcnaPregunta]', listaPregunta.Respuestas[i].IdSimuladorCcnaPregunta.toString());
      formData.append('Respuestas[' + i + '][Respuesta]', listaPregunta.Respuestas[i].Respuesta.toString());
      formData.append('Respuestas[' + i + '][Valor]', listaPregunta.Respuestas[i].Valor.toString());
      formData.append('Respuestas[' + i + '][Correcto]', listaPregunta.Respuestas[i].Correcto.toString());
      formData.append('Respuestas[' + i + '][Puntaje]', listaPregunta.Respuestas[i].Puntaje.toString());
      formData.append('Respuestas[' + i + '][UrlRetroalimentacionVideo]', listaPregunta.Respuestas[i].UrlRetroalimentacionVideo.toString());
      formData.append('Respuestas[' + i + '][Explicacion]', listaPregunta.Respuestas[i].Explicacion.toString());
      formData.append('Respuestas[' + i + '][UrlImagenArchivo]', listaPregunta.Respuestas[i].UrlImagenArchivo);
    }
   console.log(formData)


   return this.http.post<any>(this.urlBase+'/RegistrarCcnaPregunta',formData);
  }
  public EliminarPreguntaCcna(IdPregunta: number):Observable<any>{
    return this.http.post<any>(this.urlBase+'/EliminarPreguntaCcna?IdPregunta='+IdPregunta,'');
  }
  public ActualizarPregunta(listaPregunta: CcnaEnvioFilePreguntaActualizarDTO):Observable<any>{
    const formData: FormData = new FormData();
    console.log(listaPregunta);
    formData.append('Id', listaPregunta.Id.toString());
    formData.append('IdSimuladorCcnaDominio', listaPregunta.IdSimuladorCcnaDominio.toString());
    formData.append('IdSimuladorCcnaTarea', listaPregunta.IdSimuladorCcnaTarea.toString());
    formData.append('IdSimuladorTipoRespuesta', listaPregunta.IdSimuladorTipoRespuesta.toString());
    formData.append('Enunciado', listaPregunta.Enunciado.toString());
    formData.append('UrlImagenPreguntaArchivo', listaPregunta.UrlImagenPreguntaArchivo);
    formData.append('IdCcnaTipoPreguntaClasificacion', listaPregunta.IdCcnaTipoPreguntaClasificacion.toString());
    formData.append('TieneRetroalimentacionUnica', listaPregunta.TieneRetroalimentacionUnica.toString());
    formData.append('UrlVideo', listaPregunta.UrlRetroalimentacionVideo.toString() );
    formData.append('Retroalimentacion', listaPregunta.Retroalimentacion.toString() );
    formData.append('ImgRetroalimentacionArchivo', listaPregunta.ImgRetroalimentacionArchivo);
   console.log(formData)
   return this.http.post<any>(this.urlBase+'/ActualizarCcnaPregunta',formData);
  }
}
