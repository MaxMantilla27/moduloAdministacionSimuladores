import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserCredentialsDTO } from 'src/app/Models/login';
import { pmpPreguntaDTO } from 'src/app/Models/PreguntaDTO';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PmpCategoriasService {

  public urlBase=environment.url_api+'PmpTipoDominio';

  constructor(private http: HttpClient) { }

  public ObtenerCategorias():Observable<any>{
    return this.http.get<any>(this.urlBase +'/ObtenerCategorias');
  }
  public ObtenerComboCategorias(): Observable<any> {
    return this.http.get<any>(this.urlBase + '/ObtenerComboCategorias');
  }
    
  public AgregarCategoria(listaPregunta: pmpPreguntaDTO):Observable<any>{
    return this.http.post<any>(this.urlBase+'/AgregarDominio',listaPregunta);
  }

  public EliminarCategoria(idCategoria: any):Observable<any>{
    return this.http.post<any>(this.urlBase+'/Delete?id=' + idCategoria,'');
  }
}

