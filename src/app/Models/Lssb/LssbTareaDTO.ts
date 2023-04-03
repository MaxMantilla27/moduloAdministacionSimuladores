export interface LssbAgregarTareaDTO {
  IdSimuladorLssbDominio: number;
  Nombre: string;
  CantidadPreguntasPorExamen: number;
  CantidadTotal: number;
  ImgLogo: File;
  // Proporcion: number;
}


export interface LssbActualizarTareaDTO {
    Id:number;
    IdSimuladorLssbDominio: number;
    Nombre: string;
    CantidadPreguntasPorExamen: number;
    CantidadTotal: number;
    ImgLogo: File;
    // Proporcion: number;
  }
