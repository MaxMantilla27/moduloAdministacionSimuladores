export interface CapmAgregarTareaDTO {
  IdSimuladorCapmDominio: number;
  Nombre: string;
  CantidadPreguntasPorExamen: number;
  CantidadTotal: number;
  ImgLogo: File;
  // Proporcion: number;
}


export interface CapmActualizarTareaDTO {
    Id:number;
    IdSimuladorCapmDominio: number;
    Nombre: string;
    CantidadPreguntasPorExamen: number;
    CantidadTotal: number;
    ImgLogo: File;
    // Proporcion: number;
  }
