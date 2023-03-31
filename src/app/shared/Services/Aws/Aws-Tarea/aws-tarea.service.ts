import { HttpClient,HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { awsActualizarTareaDTO, awsAgregarTareaDTO } from 'src/app/Models/Aws/AwsTareaDTO';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AwsTareaService {

  public urlBase=environment.url_api+'AwsTarea';
  constructor(private http: HttpClient) { }

  public ObtenerSubcategoriaCombo(idDominio:any): Observable<any> {
    console.log(idDominio[0])
    return this.http.post<any>(this.urlBase + '/ObtenerComboTarea?idDominio=' + idDominio[0].idDominio,'');
  }

  public ObtenerTareas(): Observable<any> {
    return this.http.get<any>(this.urlBase + '/ObtenerTareas');
  }


  public AgregarSubCategoria(listaPregunta: awsAgregarTareaDTO):Observable<any>{
    const formData: FormData = new FormData();
    formData.append('ImgLogo', listaPregunta.ImgLogo);
    formData.append('Nombre', listaPregunta.Nombre.toString());
    formData.append('CantidadPreguntasPorExamen', listaPregunta.CantidadPreguntasPorExamen.toString());
    formData.append('CantidadTotal', listaPregunta.CantidadTotal.toString());
    formData.append('Proporcion', listaPregunta.Proporcion.toString());
    formData.append('IdSimuladorAwsDominio', listaPregunta.IdSimuladorAwsDominio.toString());
   console.log(formData)

    return this.http.post<any>(this.urlBase+'/AgregarTarea',formData);
  }

  public ActualizarSubCategoria(listaPregunta: awsActualizarTareaDTO):Observable<any>{
    const formData: FormData = new FormData();
    formData.append('Id', listaPregunta.Id.toString());
    formData.append('ImgLogo', listaPregunta.ImgLogo);
    formData.append('Nombre', listaPregunta.Nombre.toString());
    formData.append('IdSimuladorAwsDominio', listaPregunta.IdSimuladorAwsDominio.toString());
    formData.append('CantidadPreguntasPorExamen', listaPregunta.CantidadPreguntasPorExamen.toString());
    formData.append('CantidadTotal', listaPregunta.CantidadTotal.toString());
    formData.append('Proporcion', listaPregunta.Proporcion.toString());
   console.log(formData)

    return this.http.put<any>(this.urlBase+'/ActualizarTarea',formData);
  }

  public EliminarCategoria(idCategoria: any):Observable<any>{
    return this.http.post<any>(this.urlBase+'/Delete?id=' + idCategoria,'');
  }

}