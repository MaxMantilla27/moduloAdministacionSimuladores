export interface CcnaPreguntaRespuestaEnvioDTO{
  Id:number,
  Respuesta:string,
  Correcto:boolean,
  Puntaje:number,
  UrlVideo:string,
  Explicacion:string,
  ImagenArchivo:File
}

export interface CcnaPreguntaRespuestaEnvioAgregarDTO{
  Id:number,
  Respuesta:string,
  Correcto:boolean,
  Puntaje:number,
  UrlVideo:string,
  Explicacion:string,
  ImagenArchivo:File,
  IdSimuladorCcnaPregunta:number,
}
