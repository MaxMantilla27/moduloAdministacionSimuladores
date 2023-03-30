export interface PacpPreguntaRespuestaEnvioDTO{
    Id:number,
    Respuesta:string,
    Correcto:boolean,
    Puntaje:number,
    UrlVideo:string,
    Explicacion:string,
    ImagenArchivo:File
  }
  

  export interface PacpPreguntaRespuestaEnvioAgregarDTO{
    Id:number,
    Respuesta:string,
    Correcto:boolean,
    Puntaje:number,
    UrlVideo:string,
    Explicacion:string,
    ImagenArchivo:File,
    IdSimuladorPacpPregunta:number,
  }
  