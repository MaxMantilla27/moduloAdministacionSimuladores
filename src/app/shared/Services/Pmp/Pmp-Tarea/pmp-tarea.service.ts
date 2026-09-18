import { HttpClient,HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pmpActualizarTareaDTO, pmpAgregarTareaDTO } from 'src/app/Models/Pmp/TareaDTO';
import { environment } from 'src/environments/environment';

/**
 * Subcategorias (tareas) del simulador PMP.
 * La subcategoria hereda el esquema del contenido del examen (ECO) de su categoria, asi que
 * los listados y el alta reciben IdPmpEsquemaExamen para no mezclar versiones.
 */
@Injectable({
  providedIn: 'root'
})
export class PmpTareaService {

  public urlBase=environment.url_api+'PmpTarea';
  constructor(private http: HttpClient) { }

  public ObtenerSubcategoriaCombo(IdDominio:number,IdPmpEsquemaExamen:number): Observable<any> {
    return this.http.post<any>(this.urlBase + '/ObtenerComboTarea',{
      IdDominio: IdDominio,
      IdPmpEsquemaExamen: IdPmpEsquemaExamen
    });
  }

  public ObtenerTareas(IdPmpEsquemaExamen:number): Observable<any> {
    return this.http.get<any>(this.urlBase + '/ObtenerTareas?IdPmpEsquemaExamen='+IdPmpEsquemaExamen);
  }


  public AgregarSubCategoria(listaPregunta: pmpAgregarTareaDTO):Observable<any>{
    const formData: FormData = new FormData();
    formData.append('IdPmpEsquemaExamen', listaPregunta.IdPmpEsquemaExamen.toString());
    formData.append('ImgLogo', listaPregunta.ImgLogo);
    formData.append('Nombre', listaPregunta.Nombre.toString());
    formData.append('CantidadPreguntasPorExamen', listaPregunta.CantidadPreguntasPorExamen.toString());
    formData.append('CantidadTotal', listaPregunta.CantidadTotal.toString());
    // formData.append('Proporcion', listaPregunta.Proporcion.toString());
    formData.append('IdSimuladorPmpDominio', listaPregunta.IdSimuladorPmpDominio.toString());

    return this.http.post<any>(this.urlBase+'/AgregarTarea',formData);
  }

  public ActualizarSubCategoria(listaPregunta: pmpActualizarTareaDTO):Observable<any>{
    const formData: FormData = new FormData();
    formData.append('Id', listaPregunta.Id.toString());
    formData.append('ImgLogo', listaPregunta.ImgLogo);
    formData.append('Nombre', listaPregunta.Nombre.toString());
    formData.append('IdSimuladorPmpDominio', listaPregunta.IdSimuladorPmpDominio.toString());
    formData.append('CantidadPreguntasPorExamen', listaPregunta.CantidadPreguntasPorExamen.toString());
    formData.append('CantidadTotal', listaPregunta.CantidadTotal.toString());
    // formData.append('Proporcion', listaPregunta.Proporcion.toString());

    return this.http.put<any>(this.urlBase+'/ActualizarTarea',formData);
  }

  public EliminarCategoria(idCategoria: any):Observable<any>{
    return this.http.post<any>(this.urlBase+'/Delete?id=' + idCategoria,'');
  }

}
