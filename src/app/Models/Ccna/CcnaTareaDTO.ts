export interface ccnaAgregarTareaDTO {
  IdSimuladorCcnaDominio: number;
  Nombre: string;
  CantidadPreguntasPorExamen: number;
  CantidadTotal: number;
  ImgLogo: File;
  Proporcion: number;
}


export interface ccnaActualizarTareaDTO {
    Id:number;
    IdSimuladorCcnaDominio: number;
    Nombre: string;
    CantidadPreguntasPorExamen: number;
    CantidadTotal: number;
    ImgLogo: File;
    Proporcion: number;
  }