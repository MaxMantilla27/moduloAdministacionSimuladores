import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LssbAdministrarUsuariosAccesoDTO } from 'src/app/Models/Lssb/LssbAdministrarUsuariosDTO';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LssbAdministrarUsuariosService {
  public urlBase=environment.url_api+'LssbAdministrarUsuarios';
  constructor(private http: HttpClient) { }

  public ObtenerReporteAdministrarUsuarioResumenLssb():Observable<any>{
    return this.http.get<any>(this.urlBase +'/ObtenerReporteAdministrarUsuarioCompletoLssb');
  }
  public ObtenerReporteAdministrarUsuarioPorCodigoMatriculaLssb(CodigoMatricula:string): Observable<any> {
    console.log(CodigoMatricula)
    return this.http.post<any>(this.urlBase + '/ObtenerReporteAdministrarUsuarioPorCodigoMatriculaLssb?CodigoMatricula='+CodigoMatricula,'');
  }
  public ObtenerReporteAdministrarUsuarioPorCentroCostosLssb(CentroCostos:string): Observable<any> {
    return this.http.post<any>(this.urlBase + '/ObtenerReporteAdministrarUsuarioPorCentroCostosLssb?CentroCostos='+CentroCostos,'');
  }
  public GuardarCambiosAccesoSimuladorLssb(json:LssbAdministrarUsuariosAccesoDTO): Observable<any> {
    return this.http.post<any>(this.urlBase + '/GuardarCambiosAccesoSimuladorLssb',json);
  }
}
