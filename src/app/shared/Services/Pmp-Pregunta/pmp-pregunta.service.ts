import { HttpClient,HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pmpPreguntaDTO } from 'src/app/Models/PreguntaDTO';
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

  // public AgregarPregunta(idPregunta: any):Observable<any>{
  //   const formData: FormData = new FormData();
  //   formData.append('ImgLogo', listaPregunta.ImgLogo);
  //   formData.append('Nombre', listaPregunta.Nombre.toString());
  //   formData.append('CantidadPreguntasPorExamen', listaPregunta.CantidadPreguntasPorExamen.toString());
  //   formData.append('CantidadTotal', listaPregunta.CantidadTotal.toString());
  //   formData.append('Proporcion', listaPregunta.Proporcion.toString());
  //   formData.append('IdSimuladorPmpDominio', listaPregunta.IdSimuladorPmpDominio.toString());
  //  console.log(formData)
  //  return null;
  // }
}
