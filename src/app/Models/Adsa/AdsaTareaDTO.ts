export interface adsaAgregarTareaDTO {
  IdSimuladorAdsaDominio: number;
  Nombre: string;
  CantidadPreguntasPorExamen: number;
  CantidadTotal: number;
  ImgLogo: File;
  Proporcion: number;
}


export interface adsaActualizarTareaDTO {
    Id:number;
    IdSimuladorAdsaDominio: number;
    Nombre: string;
    CantidadPreguntasPorExamen: number;
    CantidadTotal: number;
    ImgLogo: File;
    Proporcion: number;
  }