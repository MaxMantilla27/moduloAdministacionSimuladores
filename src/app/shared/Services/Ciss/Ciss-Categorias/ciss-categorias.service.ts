import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserCredentialsDTO } from 'src/app/Models/login';
import { CissPreguntaActualizarDTO, CissPreguntaDTO } from 'src/app/Models/Ciss/CissPreguntaDTO';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CissCategoriasService {

  public urlBase=environment.url_api+'CissTipoDominio';

  constructor(private http: HttpClient) { }

  public ObtenerCategorias():Observable<any>{
    return this.http.get<any>(this.urlBase +'/ObtenerCategorias');
  }
  public ObtenerComboCategorias(): Observable<any> {
    return this.http.get<any>(this.urlBase + '/ObtenerComboCategorias');
  }

  public AgregarCategoria(listaPregunta: CissPreguntaDTO):Observable<any>{
    const formData: FormData = new FormData();
    formData.append('ImgLogo', listaPregunta.ImgLogo);
    formData.append('Nombre', listaPregunta.Nombre.toString());
    formData.append('Leyenda', listaPregunta.Leyenda.toString());
    formData.append('CantidadPreguntasPorExamen', listaPregunta.CantidadPreguntasPorExamen.toString());
    formData.append('CantidadTotal', listaPregunta.CantidadTotal.toString());
    formData.append('Proporcion', listaPregunta.Proporcion.toString());
   console.log(formData)

    return this.http.post<any>(this.urlBase+'/AgregarDominio',formData);
  }

  public ActualizarCategoria(listaPregunta: CissPreguntaActualizarDTO):Observable<any>{
    const formData: FormData = new FormData();
    formData.append('Id', listaPregunta.Id.toString());
    formData.append('ImgLogo', listaPregunta.ImgLogo);
    formData.append('Nombre', listaPregunta.Nombre.toString());
    formData.append('Leyenda', listaPregunta.Leyenda.toString());
    formData.append('CantidadPreguntasPorExamen', listaPregunta.CantidadPreguntasPorExamen.toString());
    formData.append('CantidadTotal', listaPregunta.CantidadTotal.toString());
    formData.append('Proporcion', listaPregunta.Proporcion.toString());
   console.log(formData)

    return this.http.put<any>(this.urlBase+'/ActualizarDominio',formData);
  }

  public EliminarCategoria(idCategoria: any):Observable<any>{
    return this.http.post<any>(this.urlBase+'/Delete?id=' + idCategoria,'');
  }
}
