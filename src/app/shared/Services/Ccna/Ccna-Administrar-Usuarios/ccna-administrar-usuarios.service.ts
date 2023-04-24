import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CcnaAdministrarUsuariosAccesoDTO } from 'src/app/Models/Ccna/CcnaAdministrarUsuariosDTO';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CcnaAdministrarUsuariosService {
  public urlBase=environment.url_api+'CcnaAdministrarUsuarios';
  constructor(private http: HttpClient) { }

  public ObtenerReporteAdministrarUsuarioResumenCcna():Observable<any>{
    return this.http.get<any>(this.urlBase +'/ObtenerReporteAdministrarUsuarioCompletoCcna');
  }
  public ObtenerReporteAdministrarUsuarioPorCodigoMatriculaCcna(CodigoMatricula:string): Observable<any> {
    console.log(CodigoMatricula)
    return this.http.post<any>(this.urlBase + '/ObtenerReporteAdministrarUsuarioPorCodigoMatriculaCcna?CodigoMatricula='+CodigoMatricula,'');
  }
  public ObtenerReporteAdministrarUsuarioPorCentroCostosCcna(CentroCostos:string): Observable<any> {
    return this.http.post<any>(this.urlBase + '/ObtenerReporteAdministrarUsuarioPorCentroCostosCcna?CentroCostos='+CentroCostos,'');
  }
  public GuardarCambiosAccesoSimuladorCcna(json:CcnaAdministrarUsuariosAccesoDTO): Observable<any> {
    return this.http.post<any>(this.urlBase + '/GuardarCambiosAccesoSimuladorCcna',json);
  }
}
