import { HttpClient,HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PmpTareaService {

  public urlBase=environment.url_api+'PmpPregunta';
  constructor(private http: HttpClient) { }

  public ObtenerSubcategoriaCombo(idDominio:any): Observable<any> {
    return this.http.post<any>(this.urlBase + '/ObtenerComboTarea' , idDominio[0 ]);
  }
}
