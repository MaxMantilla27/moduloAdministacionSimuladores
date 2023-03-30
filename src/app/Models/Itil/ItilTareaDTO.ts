export interface ItilAgregarTareaDTO {
  IdSimuladorItilDominio: number;
  Nombre: string;
  CantidadPreguntasPorExamen: number;
  CantidadTotal: number;
  ImgLogo: File;
  Proporcion: number;
}


export interface ItilActualizarTareaDTO {
    Id:number;
    IdSimuladorItilDominio: number;
    Nombre: string;
    CantidadPreguntasPorExamen: number;
    CantidadTotal: number;
    ImgLogo: File;
    Proporcion: number;
  }
