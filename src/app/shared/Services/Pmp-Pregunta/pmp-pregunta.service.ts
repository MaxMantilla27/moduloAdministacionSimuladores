import { HttpClient,HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PmpEnvioFilePreguntaDTO, pmpPreguntaDTO } from 'src/app/Models/PreguntaDTO';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PmpPreguntaService {

  public urlBase=environment.url_api+'PmpPregunta';
  constructor(private http: HttpClient) { }

  public ObtenerPregunta(): Observable<any> {
    return this.http.get<any>(this.urlBase + '/ObtenerListaModoDapper');
  } 

  public ObtenerPmpPregunta(idPregunta: any):Observable<any>{
    return this.http.post<any>(this.urlBase+'/ObtenerPmpPregunta?Id='+idPregunta,'');
  }

  public AgregarPregunta(listaPregunta: PmpEnvioFilePreguntaDTO):Observable<any>{
    const formData: FormData = new FormData();
    formData.append('Id', listaPregunta.Id.toString());
    formData.append('nombreArchivo', listaPregunta.nombreArchivo.toString());
    formData.append('IdSimuladorPmpTarea', listaPregunta.IdSimuladorPmpTarea.toString());
    formData.append('IdSimuladorTipoRespuesta', listaPregunta.IdSimuladorTipoRespuesta.toString());
    formData.append('Enunciado', listaPregunta.Enunciado.toString());
    formData.append('TieneRetroalimentacion', listaPregunta.TieneRetroalimentacion.toString());
    formData.append('UrlRetroalimentacionVideo', listaPregunta.UrlRetroalimentacionVideo.toString() );
    formData.append('Retroalimentacion', listaPregunta.Retroalimentacion.toString() );
    formData.append('Imagen', listaPregunta.Imagen );
    formData.append('ImgRetroalimentacion', listaPregunta.ImgRetroalimentacion);
    
    for (let i = 0; i < listaPregunta.Respuestas.length; i++) {
      formData.append('Respuestas[' + i + '][Id]', listaPregunta.Respuestas[i].Id.toString());
      formData.append('Respuestas[' + i + '][IdSimuladorPmpPregunta]', listaPregunta.Respuestas[i].IdSimuladorPmpPregunta.toString());
      formData.append('Respuestas[' + i + '][Alternativa]', listaPregunta.Respuestas[i].Alternativa.toString());
      formData.append('Respuestas[' + i + '][Valor]', listaPregunta.Respuestas[i].Valor.toString());
      formData.append('Respuestas[' + i + '][Correcto]', listaPregunta.Respuestas[i].Correcto.toString());
      formData.append('Respuestas[' + i + '][IdAspNetUsers]', listaPregunta.Respuestas[i].IdAspNetUsers.toString());
      formData.append('Respuestas[' + i + '][Puntaje]', listaPregunta.Respuestas[i].Puntaje.toString());
      formData.append('Respuestas[' + i + '][UrlRetroalimentacionVideo]', listaPregunta.Respuestas[i].UrlRetroalimentacionVideo.toString());
      formData.append('Respuestas[' + i + '][Imagen]', listaPregunta.Respuestas[i].Imagen);
      formData.append('Respuestas[' + i + '][Retroalimentacion]', listaPregunta.Respuestas[i].Retroalimentacion.toString());
      formData.append('Respuestas[' + i + '][UrlImagen]', listaPregunta.Respuestas[i].UrlImagen.toString());
    }
   console.log(formData)

   
   return this.http.post<any>(this.urlBase+'/GuardarArchivo',formData);
  }
}
