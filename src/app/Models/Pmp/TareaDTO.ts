export interface pmpAgregarTareaDTO {
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
