export interface CmrpPreguntaRespuestaEnvioDTO{
  Id:number,
  Respuesta:string,
  Correcto:boolean,
  Puntaje:number,
  UrlVideo:string,
  Explicacion:string,
  ImagenArchivo:File
}



export interface CmrpPreguntaRespuestaEnvioAgregarDTO{
  Id:number,
  Respuesta:string,
  Correcto:boolean,
  Puntaje:number,
  UrlVideo:string,
  Explicacion:string,
  ImagenArchivo:File,
  IdSimuladorCmrpPregunta:number,
}
