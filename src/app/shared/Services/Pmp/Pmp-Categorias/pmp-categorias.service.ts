import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pmpPreguntaActualizarDTO, pmpPreguntaDTO } from 'src/app/Models/Pmp/PreguntaDTO';
import { environment } from 'src/environments/environment';

/**
 * Categorias (dominios) del simulador PMP.
 * Cada categoria pertenece a un esquema del contenido del examen (ECO), asi que los listados
 * y el alta reciben IdPmpEsquemaExamen.
 */
@Injectable({
  providedIn: 'root'
})
export class PmpCategoriasService {

  public urlBase=environment.url_api+'PmpTipoDominio';

  constructor(private http: HttpClient) { }

  public ObtenerCategorias(IdPmpEsquemaExamen:number):Observable<any>{
    return this.http.get<any>(this.urlBase +'/ObtenerCategorias?IdPmpEsquemaExamen='+IdPmpEsquemaExamen);
  }
  public ObtenerComboCategorias(IdPmpEsquemaExamen:number): Observable<any> {
    return this.http.get<any>(this.urlBase + '/ObtenerComboCategorias?IdPmpEsquemaExamen='+IdPmpEsquemaExamen);
  }

  public AgregarCategoria(listaPregunta: pmpPreguntaDTO):Observable<any>{
    const formData: FormData = new FormData();
    formData.append('IdPmpEsquemaExamen', listaPregunta.IdPmpEsquemaExamen.toString());
    formData.append('ImgLogo', listaPregunta.ImgLogo);
    formData.append('Nombre', listaPregunta.Nombre.toString());
    formData.append('Leyenda', listaPregunta.Leyenda.toString());
    formData.append('CantidadPreguntasPorExamen', listaPregunta.CantidadPreguntasPorExamen.toString());
    formData.append('CantidadTotal', listaPregunta.CantidadTotal.toString());
    // formData.append('Proporcion', listaPregunta.Proporcion.toString());
    formData.append('TieneSubCategoria', listaPregunta.TieneSubCategoria.toString());

    return this.http.post<any>(this.urlBase+'/AgregarDominio',formData);
  }

  public ActualizarCategoria(listaPregunta: pmpPreguntaActualizarDTO):Observable<any>{
    const formData: FormData = new FormData();
    formData.append('Id', listaPregunta.Id.toString());
    formData.append('ImgLogo', listaPregunta.ImgLogo);
    formData.append('Nombre', listaPregunta.Nombre.toString());
    formData.append('Leyenda', listaPregunta.Leyenda.toString());
    formData.append('CantidadPreguntasPorExamen', listaPregunta.CantidadPreguntasPorExamen.toString());
    formData.append('CantidadTotal', listaPregunta.CantidadTotal.toString());
    // formData.append('Proporcion', listaPregunta.Proporcion.toString());
    formData.append('TieneSubCategoria', listaPregunta.TieneSubCategoria.toString());

    return this.http.put<any>(this.urlBase+'/ActualizarDominio',formData);
  }

  public EliminarCategoria(idCategoria: any):Observable<any>{
    return this.http.post<any>(this.urlBase+'/Delete?id=' + idCategoria,'');
  }
}
