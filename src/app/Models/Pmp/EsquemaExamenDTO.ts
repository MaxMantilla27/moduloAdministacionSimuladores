/**
 * Esquema del contenido del examen (ECO 2021, ECO 2026...) del simulador PMP.
 * Se llama siempre "EsquemaExamen" y nunca "Esquema" a secas, porque en este modulo
 * "esquema" ya significa el esquema SQL del simulador (configuracionSimulador.esquema).
 */
export interface pmpEsquemaExamenDTO {
  idPmpEsquemaExamen: number;
  nombre: string;
  descripcion: string;
  porcentajeMinimoAprobacion: number;
  activo: boolean;
}

/**
 * Esquema con la cantidad de contenido asociado. Alimenta la grilla de configuracion
 * de esquemas y decide si el esquema se puede eliminar.
 */
export interface pmpEsquemaExamenResumenDTO {
  idPmpEsquemaExamen: number;
  nombre: string;
  descripcion: string;
  activo: boolean;
  cantidadDominio: number;
  cantidadTarea: number;
  cantidadPregunta: number;
  cantidadPreguntaActiva: number;
  cantidadExamen: number;
  cantidadParametrosNivel: number;
  sePuedeEliminar: boolean;
}

/** Datos que envia el modulo administrativo para crear un esquema. El esquema se crea vacio. */
export interface pmpEsquemaExamenRegistrarDTO {
  Nombre: string;
  Descripcion: string;
  PorcentajeMinimoAprobacion: number;
}

/** Datos que envia el modulo administrativo para editar un esquema existente. */
export interface pmpEsquemaExamenActualizarDTO {
  IdPmpEsquemaExamen: number;
  Nombre: string;
  Descripcion: string;
  PorcentajeMinimoAprobacion: number;
}

/** Fila de cobertura de preguntas que falta para poder activar un esquema. */
export interface pmpEsquemaExamenValidacionFilaDTO {
  idPmpDominio: number;
  nombreDominio: string;
  idPmpTarea: number;
  nombreTarea: string;
  idPmpModo: number;
  nombreModo: string;
  cantidadPreguntasPorExamen: number;
  cantidadPreguntaDisponible: number;
}

/** Resultado de la validacion previa a activar un esquema. Los mensajes los arma el backend. */
export interface pmpEsquemaExamenValidacionDTO {
  idPmpEsquemaExamen: number;
  puedeActivar: boolean;
  esActivo: boolean;
  mensajes: Array<string>;
  faltantes: Array<pmpEsquemaExamenValidacionFilaDTO>;
}

/** Resultado de una operacion de escritura sobre esquemas. */
export interface pmpEsquemaExamenRespuestaDTO {
  exito: boolean;
  mensaje: string;
  idPmpEsquemaExamen: number;
}
