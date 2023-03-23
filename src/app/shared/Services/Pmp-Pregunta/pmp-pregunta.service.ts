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

  
}
