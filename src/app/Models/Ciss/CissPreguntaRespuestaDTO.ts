export interface CissPreguntaRespuestaEnvioDTO{
    Id:number,
    Respuesta:string,
    Correcto:boolean,
    Puntaje:number,
    UrlVideo:string,
    Explicacion:string,
    ImagenArchivo:File
  }
  

  export interface CissPreguntaRespuestaEnvioAgregarDTO{
    Id:number,
    Respuesta:string,
    Correcto:boolean,
    Puntaje:number,
    UrlVideo:string,
    Explicacion:string,
    ImagenArchivo:File,
    IdSimuladorCissPregunta:number,
  }
  