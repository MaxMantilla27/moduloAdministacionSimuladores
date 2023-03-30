export interface DevopsPreguntaRespuestaEnvioDTO{
    Id:number,
    Respuesta:string,
    Correcto:boolean,
    Puntaje:number,
    UrlVideo:string,
    Explicacion:string,
    ImagenArchivo:File
  }
  

  export interface DevopsPreguntaRespuestaEnvioAgregarDTO{
    Id:number,
    Respuesta:string,
    Correcto:boolean,
    Puntaje:number,
    UrlVideo:string,
    Explicacion:string,
    ImagenArchivo:File,
    IdSimuladorDevopsPregunta:number,
  }
  