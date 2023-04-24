import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PbiAdministrarUsuariosAccesoDTO } from 'src/app/Models/Pbi/PbiAdministrarUsuariosDTO';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PbiAdministrarUsuariosService {
  public urlBase=environment.url_api+'PbiAdministrarUsuarios';
  constructor(private http: HttpClient) { }

  public ObtenerReporteAdministrarUsuarioResumenPbi():Observable<any>{
    return this.http.get<any>(this.urlBase +'/ObtenerReporteAdministrarUsuarioCompletoPbi');
  }
  public ObtenerReporteAdministrarUsuarioPorCodigoMatriculaPbi(CodigoMatricula:string): Observable<any> {
    console.log(CodigoMatricula)
    return this.http.post<any>(this.urlBase + '/ObtenerReporteAdministrarUsuarioPorCodigoMatriculaPbi?CodigoMatricula='+CodigoMatricula,'');
  }
  public ObtenerReporteAdministrarUsuarioPorCentroCostosPbi(CentroCostos:string): Observable<any> {
    return this.http.post<any>(this.urlBase + '/ObtenerReporteAdministrarUsuarioPorCentroCostosPbi?CentroCostos='+CentroCostos,'');
  }
  public GuardarCambiosAccesoSimuladorPbi(json:PbiAdministrarUsuariosAccesoDTO): Observable<any> {
    return this.http.post<any>(this.urlBase + '/GuardarCambiosAccesoSimuladorPbi',json);
  }
}
