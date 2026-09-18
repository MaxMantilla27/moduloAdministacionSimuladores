import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import {
  pmpEsquemaExamenActualizarDTO,
  pmpEsquemaExamenRegistrarDTO,
} from 'src/app/Models/Pmp/EsquemaExamenDTO';
import { environment } from 'src/environments/environment';

/**
 * Servicio del esquema del contenido del examen (ECO) del simulador PMP.
 *
 * Ademas de los endpoints de api/PmpEsquemaExamen, guarda cual es el esquema que el
 * administrador tiene seleccionado. Las pantallas de categorias, subcategorias y preguntas
 * se suscriben a EsquemaSeleccionado$ y recargan sus listas cuando cambia.
 *
 * Los tabs del simulador se crean todos juntos al abrir la pantalla, asi que los combos de
 * esquema solo consultan la lista una vez. Por eso, cuando se crea, edita, activa o elimina un
 * esquema, la pantalla de configuracion de esquemas llama a NotificarCambioListaEsquemas() y
 * los combos vuelven a consultarla sin que el administrador tenga que recargar el navegador.
 */
@Injectable({
  providedIn: 'root',
})
export class PmpEsquemaExamenService {
  public urlBase = environment.url_api + 'PmpEsquemaExamen';

  /** 0 significa que todavia no se eligio ninguno; las pantallas no deben consultar con 0. */
  private esquemaSeleccionado = new BehaviorSubject<number>(0);
  public EsquemaSeleccionado$: Observable<number> =
    this.esquemaSeleccionado.asObservable();

  /** Avisa a los combos de esquema que la lista cambio y deben volver a consultarla. */
  private listaEsquemasActualizada = new Subject<void>();
  public ListaEsquemasActualizada$: Observable<void> =
    this.listaEsquemasActualizada.asObservable();

  constructor(private http: HttpClient) {}

  /** Se llama despues de crear, editar, activar o eliminar un esquema. */
  public NotificarCambioListaEsquemas(): void {
    this.listaEsquemasActualizada.next();
  }

  /** Id del esquema seleccionado en este momento. */
  public get IdEsquemaSeleccionado(): number {
    return this.esquemaSeleccionado.value;
  }

  /** Cambia el esquema seleccionado y avisa a las pantallas que lo escuchan. */
  public SeleccionarEsquema(IdPmpEsquemaExamen: number): void {
    if (
      IdPmpEsquemaExamen != null &&
      IdPmpEsquemaExamen > 0 &&
      IdPmpEsquemaExamen != this.esquemaSeleccionado.value
    ) {
      this.esquemaSeleccionado.next(IdPmpEsquemaExamen);
    }
  }

  /** Lista los esquemas vigentes. */
  public Obtener(): Observable<any> {
    return this.http.get<any>(this.urlBase + '/Obtener');
  }

  /** Devuelve el esquema activo, que es el que toman las simulaciones nuevas del alumno. */
  public ObtenerActivo(): Observable<any> {
    return this.http.get<any>(this.urlBase + '/ObtenerActivo');
  }

  /** Lista los esquemas con la cantidad de contenido de cada uno, para la grilla. */
  public ObtenerResumen(): Observable<any> {
    return this.http.get<any>(this.urlBase + '/ObtenerResumen');
  }

  /** Registra un esquema vacio e inactivo. */
  public Registrar(Json: pmpEsquemaExamenRegistrarDTO): Observable<any> {
    return this.http.post<any>(this.urlBase + '/Registrar', Json);
  }

  /** Actualiza nombre, descripcion y porcentaje minimo de aprobacion de un esquema. */
  public Actualizar(Json: pmpEsquemaExamenActualizarDTO): Observable<any> {
    return this.http.put<any>(this.urlBase + '/Actualizar', Json);
  }

  /** Devuelve si el esquema se puede activar y, si no, que contenido le falta. */
  public ObtenerValidacionActivacion(
    IdPmpEsquemaExamen: number
  ): Observable<any> {
    return this.http.get<any>(
      this.urlBase +
        '/ObtenerValidacionActivacion?IdPmpEsquemaExamen=' +
        IdPmpEsquemaExamen
    );
  }

  /** Activa un esquema y desactiva el que estaba vigente. */
  public Activar(IdPmpEsquemaExamen: number): Observable<any> {
    return this.http.put<any>(
      this.urlBase + '/Activar?IdPmpEsquemaExamen=' + IdPmpEsquemaExamen,
      ''
    );
  }

  /** Elimina logicamente un esquema vacio que no sea el activo. */
  public Eliminar(IdPmpEsquemaExamen: number): Observable<any> {
    return this.http.post<any>(
      this.urlBase + '/Eliminar?IdPmpEsquemaExamen=' + IdPmpEsquemaExamen,
      ''
    );
  }
}
