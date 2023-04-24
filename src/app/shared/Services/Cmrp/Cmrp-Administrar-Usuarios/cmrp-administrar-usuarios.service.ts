import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CmrpAdministrarUsuariosAccesoDTO } from 'src/app/Models/Cmrp/CmrpAdministrarUsuariosDTO';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CmrpAdministrarUsuariosService {
  public urlBase=environment.url_api+'CmrpAdministrarUsuarios';
  constructor(private http: HttpClient) { }

  public ObtenerReporteAdministrarUsuarioResumenCmrp():Observable<any>{
    return this.http.get<any>(this.urlBase +'/ObtenerReporteAdministrarUsuarioCompletoCmrp');
  }
  public ObtenerReporteAdministrarUsuarioPorCodigoMatriculaCmrp(CodigoMatricula:string): Observable<any> {
    console.log(CodigoMatricula)
    return this.http.post<any>(this.urlBase + '/ObtenerReporteAdministrarUsuarioPorCodigoMatriculaCmrp?CodigoMatricula='+CodigoMatricula,'');
  }
  public ObtenerReporteAdministrarUsuarioPorCentroCostosCmrp(CentroCostos:string): Observable<any> {
    return this.http.post<any>(this.urlBase + '/ObtenerReporteAdministrarUsuarioPorCentroCostosCmrp?CentroCostos='+CentroCostos,'');
  }
  public GuardarCambiosAccesoSimuladorCmrp(json:CmrpAdministrarUsuariosAccesoDTO): Observable<any> {
    return this.http.post<any>(this.urlBase + '/GuardarCambiosAccesoSimuladorCmrp',json);
  }
}
