export interface LabcPreguntaRespuestaEnvioDTO{
    Id:number,
    Respuesta:string,
    Correcto:boolean,
    Puntaje:number,
    UrlVideo:string,
    Explicacion:string,
    ImagenArchivo:File
  }
  

  export interface LabcPreguntaRespuestaEnvioAgregarDTO{
    Id:number,
    Respuesta:string,
    Correcto:boolean,
    Puntaje:number,
    UrlVideo:string,
    Explicacion:string,
    ImagenArchivo:File,
    IdSimuladorLabcPregunta:number,
  }
  