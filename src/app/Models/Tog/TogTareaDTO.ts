export interface TogAgregarTareaDTO {
  IdSimuladorTogDominio: number;
  Nombre: string;
  CantidadPreguntasPorExamen: number;
  CantidadTotal: number;
  ImgLogo: File;
  // Proporcion: number;
}


export interface TogActualizarTareaDTO {
    Id:number;
    IdSimuladorTogDominio: number;
    Nombre: string;
    CantidadPreguntasPorExamen: number;
    CantidadTotal: number;
    ImgLogo: File;
    // Proporcion: number;
  }
