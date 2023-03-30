export interface AdsaPreguntaRespuestaEnvioDTO{
  Id:number,
  Respuesta:string,
  Correcto:boolean,
  Puntaje:number,
  UrlVideo:string,
  Explicacion:string,
  ImagenArchivo:File
}

export interface AdsaPreguntaRespuestaEnvioAgregarDTO{
  Id:number,
  Respuesta:string,
  Correcto:boolean,
  Puntaje:number,
  UrlVideo:string,
  Explicacion:string,
  ImagenArchivo:File,
  IdSimuladorAdsaPregunta:number,
}
