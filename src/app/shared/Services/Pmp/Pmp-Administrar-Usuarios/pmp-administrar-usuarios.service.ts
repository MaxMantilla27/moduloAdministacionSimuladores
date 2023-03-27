import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PmpAdministrarUsuariosAccesoDTO } from 'src/app/Models/Pmp/PmpAdministrarUsuariosDTO';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PmpAdministrarUsuariosService {
  public urlBase=environment.url_api+'PmpAdministrarUsuarios';
  constructor(private http: HttpClient) { }

  public ObtenerReporteAdministrarUsuarioResumen():Observable<any>{
    return this.http.get<any>(this.urlBase +'/ObtenerReporteAdministrarUsuarioResumen');
  }
  public ObtenerReporteAdministrarUsuarioPorCodigoMatricula(CodigoMatricula:string): Observable<any> {
    console.log(CodigoMatricula)
    return this.http.post<any>(this.urlBase + '/ObtenerReporteAdministrarUsuarioPorCodigoMatricula?CodigoMatricula='+CodigoMatricula,'');

  }
  public ObtenerReporteAdministrarUsuarioPorCentroCostos(CentroCostos:string): Observable<any> {
    return this.http.post<any>(this.urlBase + '/ObtenerReporteAdministrarUsuarioPorCentroCostos?CentroCostos='+CentroCostos,'');
  }
  public GuardarCambiosAccesoSimulador(json:PmpAdministrarUsuariosAccesoDTO): Observable<any> {
    return this.http.post<any>(this.urlBase + '/GuardarCambiosAccesoSimulador',json);
  }
}
