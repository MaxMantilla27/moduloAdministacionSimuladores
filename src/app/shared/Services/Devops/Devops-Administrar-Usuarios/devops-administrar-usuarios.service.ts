import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DevopsAdministrarUsuariosAccesoDTO } from 'src/app/Models/Devops/DevopsAdministrarUsuariosDTO';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DevopsAdministrarUsuariosService {

  public urlBase=environment.url_api+'DevopsAdministrarUsuarios';
  constructor(private http: HttpClient) { }

  public ObtenerReporteAdministrarUsuarioResumen():Observable<any>{
    return this.http.get<any>(this.urlBase +'/ObtenerReporteAdministrarUsuarioCompletoDevops');
  }
  public ObtenerReporteAdministrarUsuarioPorCodigoMatricula(CodigoMatricula:string): Observable<any> {
    console.log(CodigoMatricula)
    return this.http.post<any>(this.urlBase + '/ObtenerReporteAdministrarUsuarioPorCodigoMatricula?CodigoMatricula='+CodigoMatricula,'');

  }
  public ObtenerReporteAdministrarUsuarioPorCentroCostos(CentroCostos:string): Observable<any> {
    return this.http.post<any>(this.urlBase + '/ObtenerReporteAdministrarUsuarioPorCentroCostos?CentroCostos='+CentroCostos,'');
  }
  public GuardarCambiosAccesoSimulador(json:DevopsAdministrarUsuariosAccesoDTO): Observable<any> {
    return this.http.post<any>(this.urlBase + '/GuardarCambiosAccesoSimulador',json);
  }
}
