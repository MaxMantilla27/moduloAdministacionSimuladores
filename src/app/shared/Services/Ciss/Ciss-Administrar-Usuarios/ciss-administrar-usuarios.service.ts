import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CissAdministrarUsuariosAccesoDTO } from 'src/app/Models/Ciss/CissAdministrarUsuariosDTO';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CissAdministrarUsuariosService {

  public urlBase=environment.url_api+'CissAdministrarUsuarios';
  constructor(private http: HttpClient) { }

  public ObtenerReporteAdministrarUsuarioResumen():Observable<any>{
    return this.http.get<any>(this.urlBase +'/ObtenerReporteAdministrarUsuarioCompletoCiss');
  }
  public ObtenerReporteAdministrarUsuarioPorCodigoMatricula(CodigoMatricula:string): Observable<any> {
    console.log(CodigoMatricula)
    return this.http.post<any>(this.urlBase + '/ObtenerReporteAdministrarUsuarioPorCodigoMatricula?CodigoMatricula='+CodigoMatricula,'');

  }
  public ObtenerReporteAdministrarUsuarioPorCentroCostos(CentroCostos:string): Observable<any> {
    return this.http.post<any>(this.urlBase + '/ObtenerReporteAdministrarUsuarioPorCentroCostos?CentroCostos='+CentroCostos,'');
  }
  public GuardarCambiosAccesoSimulador(json:CissAdministrarUsuariosAccesoDTO): Observable<any> {
    return this.http.post<any>(this.urlBase + '/GuardarCambiosAccesoSimulador',json);
  }
}
