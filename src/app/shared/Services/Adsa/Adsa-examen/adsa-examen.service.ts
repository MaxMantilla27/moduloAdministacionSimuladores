import { HttpClient,HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdsaExamenService {

  public urlBase=environment.url_api+'AdsaExamen';
  constructor(private http: HttpClient) { }

  public ObtenerReporteUsuario(codigoMatricula:any): Observable<any> {
    return this.http.get<any>(this.urlBase + '/ObtenerReporteUsuarioDapper?CodigoMatricula=' + codigoMatricula);
  }
  public ObtenerRankingPorModoUsuario(IdAspNetUsers:string,Modo:number): Observable<any> {
    return this.http.get<any>(this.urlBase + '/ObtenerRankingPorModoUsuario?IdAspNetUsers=' + IdAspNetUsers+ '&Modo=' + Modo);
  }
  public ObtenerRespuestaExamenDetallePreguntaPorId(id:number):Observable<any>{
    return this.http.get<any>(this.urlBase+'/ObtenerRespuestaExamenDetallePreguntaPorId/'+id);
  }
  public ObtenerResumenSimulacionesPorModoUsuario(IdAspNetUsers:string,Modo:number): Observable<any> {
    return this.http.get<any>(this.urlBase + '/ObtenerResumenSimulacionesPorModoUsuario?IdAspNetUsers=' + IdAspNetUsers+ '&Modo=' + Modo);
  }
}
