export interface TogPreguntaRespuestaEnvioDTO{
  Id:number,
  Respuesta:string,
  Correcto:boolean,
  Puntaje:number,
  UrlVideo:string,
  Explicacion:string,
  ImagenArchivo:File
}



export interface TogPreguntaRespuestaEnvioAgregarDTO{
  Id:number,
  Respuesta:string,
  Correcto:boolean,
  Puntaje:number,
  UrlVideo:string,
  Explicacion:string,
  ImagenArchivo:File,
  IdSimuladorTogPregunta:number,
}
export interface TogPreguntaRespuestaEnvioNivel2DTO{
  Id:number,
  Respuesta:string,
  IdSimuladorTogNivel:number,
  OpcionRespuesta:string,
  Puntaje:number,
  UrlVideo:string,
  Explicacion:string,
  ImagenArchivo:File
}



export interface TogPreguntaRespuestaEnvioAgregarNivel2DTO{
  Id:number,
  Respuesta:string,
  IdSimuladorTogNivel:number
  OpcionRespuesta:string,
  Puntaje:number,
  UrlVideo:string,
  Explicacion:string,
  ImagenArchivo:File,
  IdSimuladorTogPregunta:number,
}
