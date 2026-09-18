export interface pmpAgregarTareaDTO {
  /** Esquema del contenido del examen (ECO) al que debe pertenecer la categoria indicada */
  IdPmpEsquemaExamen: number;
  IdSimuladorPmpDominio: number;
  Nombre: string;
  CantidadPreguntasPorExamen: number;
  CantidadTotal: number;
  ImgLogo: File;
  // Proporcion: number;
}


export interface pmpActualizarTareaDTO {
    Id:number;
    IdSimuladorPmpDominio: number;
    Nombre: string;
    CantidadPreguntasPorExamen: number;
    CantidadTotal: number;
    ImgLogo: File;
    // Proporcion: number;
  }
