export interface CmrpAgregarTareaDTO {
  IdSimuladorCmrpDominio: number;
  Nombre: string;
  CantidadPreguntasPorExamen: number;
  CantidadTotal: number;
  ImgLogo: File;
  // Proporcion: number;
}


export interface CmrpActualizarTareaDTO {
    Id:number;
    IdSimuladorCmrpDominio: number;
    Nombre: string;
    CantidadPreguntasPorExamen: number;
    CantidadTotal: number;
    ImgLogo: File;
    // Proporcion: number;
  }
