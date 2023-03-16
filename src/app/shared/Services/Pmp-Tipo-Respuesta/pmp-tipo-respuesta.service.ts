import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  actualizarTipoRespuestaDTO,
  actualizarInterfaz,
} from 'src/app/Models/TipoRespuesta';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PmpTipoRespuestaService {
  public urlBase = environment.url_api + 'PmpTipoRespuesta';
  public urlBase2 = environment.url_api + 'PmpParametrosNivel';
  public urlBase3 = environment.url_api + 'PmpTipoDominio';
  public urlBase4 = environment.url_api + 'PmpConfiguracionSimulador';
  public urlBase5 = environment.url_api + 'PmpPregunta';
  public urlBase6 = environment.url_api + 'PmpTarea';
  constructor(private http: HttpClient) {}

  public ObtenerTipoRespuesta(): Observable<any> {
    return this.http.get<any>(this.urlBase + '/ObtenerTipoRespuestaEntity');
  }

  public actualizarTipoRespuesta(
    Json: actualizarTipoRespuestaDTO
  ): Observable<any> {
    console.log(Json);
    return this.http.post<any>(this.urlBase + '/actualizarTipoRespuesta', Json);
  }

  public ObtenerParametrosNivelEntity(): Observable<any> {
    return this.http.get<any>(this.urlBase2 + '/ObtenerParametrosNivelEntity');
  }

  public ObtenerDominioCategorias(): Observable<any> {
    return this.http.get<any>(this.urlBase3 + '/ObtenerDominioCategorias');
  }

  public ObtenerComboDominio(): Observable<any> {
    return this.http.get<any>(this.urlBase3 + '/ObtenerComboCategorias');
  }
  public ObtenerConfiguracionSimuladorEntity(): Observable<any> {
    return this.http.get<any>(
      this.urlBase4 + '/ObtenerConfiguracionSimuladorEntity'
    );
  }

  public actualizarConfiguracionSimulador(
    Json: actualizarInterfaz
  ): Observable<any> {
    console.log(Json);
    return this.http.post<any>(
      this.urlBase4 + '/actualizarConfiguracionSimulador',
      Json
    );
  }

  public ObtenerPregunta(): Observable<any> {
    return this.http.get<any>(this.urlBase5 + '/ObtenerListaModoDapper');
  }

  public ObtenerSubcategoriaCombo(idDominio:any): Observable<any> {
    return this.http.post<any>(this.urlBase6 + '/ObtenerComboTarea' , idDominio[0]);
  }
}
