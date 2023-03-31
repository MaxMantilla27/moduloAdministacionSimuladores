export interface pbiAgregarTareaDTO {
  IdSimuladorPbiDominio: number;
  Nombre: string;
  CantidadPreguntasPorExamen: number;
  CantidadTotal: number;
  ImgLogo: File;
  Proporcion: number;
}


export interface pbiActualizarTareaDTO {
    Id:number;
    IdSimuladorPbiDominio: number;
    Nombre: string;
    CantidadPreguntasPorExamen: number;
    CantidadTotal: number;
    ImgLogo: File;
    Proporcion: number;
  }