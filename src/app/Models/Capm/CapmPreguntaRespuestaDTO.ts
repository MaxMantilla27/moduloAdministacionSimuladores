export interface CapmPreguntaRespuestaEnvioDTO{
  Id:number,
  Respuesta:string,
  Correcto:boolean,
  Puntaje:number,
  UrlVideo:string,
  Explicacion:string,
  ImagenArchivo:File
}