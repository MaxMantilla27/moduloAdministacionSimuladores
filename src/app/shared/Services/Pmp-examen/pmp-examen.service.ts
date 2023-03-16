import { HttpClient,HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PmpExamenService {

  public urlBase=environment.url_api+'PmpExamen';
  constructor(private http: HttpClient) { }

  public ObtenerReporteUsuario(codigoMatricula:any): Observable<any> {
    return this.http.get<any>(this.urlBase + '/ObtenerReporteUsuarioDapper?CodigoMatricula=' + codigoMatricula);
  }
}
