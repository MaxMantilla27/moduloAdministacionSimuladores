export interface awsAgregarTareaDTO {
  IdSimuladorAwsDominio: number;
  Nombre: string;
  CantidadPreguntasPorExamen: number;
  CantidadTotal: number;
  ImgLogo: File;
  Proporcion: number;
}


export interface awsActualizarTareaDTO {
    Id:number;
    IdSimuladorAwsDominio: number;
    Nombre: string;
    CantidadPreguntasPorExamen: number;
    CantidadTotal: number;
    ImgLogo: File;
    Proporcion: number;
  }