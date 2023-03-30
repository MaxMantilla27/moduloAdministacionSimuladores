import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdsaAdministrarUsuariosAccesoDTO } from 'src/app/Models/Adsa/AdsaAdministrarUsuariosDTO';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdsaAdministrarUsuariosService {
  public urlBase=environment.url_api+'AdsaAdministrarUsuarios';
  constructor(private http: HttpClient) { }

  public ObtenerReporteAdministrarUsuarioResumen():Observable<any>{
    return this.http.get<any>(this.urlBase +'/ObtenerReporteAdministrarUsuarioResumenAdsa');
  }
  public ObtenerReporteAdministrarUsuarioPorCodigoMatricula(CodigoMatricula:string): Observable<any> {
    console.log(CodigoMatricula)
    return this.http.post<any>(this.urlBase + '/ObtenerReporteAdministrarUsuarioPorCodigoMatricula?CodigoMatriculaAdsa='+CodigoMatricula,'');

  }
  public ObtenerReporteAdministrarUsuarioPorCentroCostos(CentroCostos:string): Observable<any> {
    return this.http.post<any>(this.urlBase + '/ObtenerReporteAdministrarUsuarioPorCentroCostosAdsa?CentroCostos='+CentroCostos,'');
  }
  public GuardarCambiosAccesoSimulador(json:AdsaAdministrarUsuariosAccesoDTO): Observable<any> {
    return this.http.post<any>(this.urlBase + '/GuardarCambiosAccesoSimuladorAdsa',json);
  }
}
