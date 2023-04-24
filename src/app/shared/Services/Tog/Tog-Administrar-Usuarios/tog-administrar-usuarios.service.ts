import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TogAdministrarUsuariosAccesoDTO } from 'src/app/Models/Tog/TogAdministrarUsuariosDTO';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TogAdministrarUsuariosService {
  public urlBase=environment.url_api+'TogAdministrarUsuarios';
  constructor(private http: HttpClient) { }

  public ObtenerReporteAdministrarUsuarioResumenTog():Observable<any>{
    return this.http.get<any>(this.urlBase +'/ObtenerReporteAdministrarUsuarioCompleto');
  }
  public ObtenerReporteAdministrarUsuarioPorCodigoMatriculaTog(CodigoMatricula:string): Observable<any> {
    console.log(CodigoMatricula)
    return this.http.post<any>(this.urlBase + '/ObtenerReporteAdministrarUsuarioPorCodigoMatriculaTog?CodigoMatricula='+CodigoMatricula,'');
  }
  public ObtenerReporteAdministrarUsuarioPorCentroCostosTog(CentroCostos:string): Observable<any> {
    return this.http.post<any>(this.urlBase + '/ObtenerReporteAdministrarUsuarioPorCentroCostosTog?CentroCostos='+CentroCostos,'');
  }
  public GuardarCambiosAccesoSimuladorTog(json:TogAdministrarUsuariosAccesoDTO): Observable<any> {
    return this.http.post<any>(this.urlBase + '/GuardarCambiosAccesoSimuladorTog',json);
  }
}
