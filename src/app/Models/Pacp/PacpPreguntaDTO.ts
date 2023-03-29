export interface PacpPreguntaDTO {
    Nombre: string;
    CantidadPreguntasPorExamen: number;
    CantidadTotal: number;
    ImgLogo: File;
    Leyenda: string;
    Proporcion: number;
  }
  
  export interface PacpPreguntaActualizarDTO {
    Id:number;
    Nombre: string;
    CantidadPreguntasPorExamen: number;
    CantidadTotal: number;
    ImgLogo: File ;
    Leyenda: string;
    Proporcion: number;
  }
  
  export interface PacpEnvioFilePreguntaDTO{
     Id: number;
     IdSimuladorPacpDominio: number;
     IdSimuladorPacpTarea: number;
     IdSimuladorTipoRespuesta: number;
     IdPacpTipoPreguntaClasificacion: number;
     Enunciado: string;
     UrlImagenPreguntaArchivo: File;
     TieneRetroalimentacionUnica: boolean; 
     UrlRetroalimentacionVideo: string;
     Retroalimentacion: string;
     ImgRetroalimentacionArchivo: File;
     Respuestas : Array<PacpEnvioRespuesDTO> 
  }
  export interface PacpEnvioRespuesDTO{
     Id: number; 
     IdSimuladorPacpPregunta: number; 
     Respuesta: string; 
     Valor: number; 
     Correcto: boolean; 
     Puntaje: number; 
     UrlRetroalimentacionVideo: string; 
     Explicacion: string; 
     UrlImagenArchivo: File;  
  }
  
  export interface Alternativa{
    Id: number,
    Alternativa: string,
    Correcto: boolean,
    Puntaje: number,
    UrlVideo: string,
    Texto:string,
    Imagen: string
  }
  