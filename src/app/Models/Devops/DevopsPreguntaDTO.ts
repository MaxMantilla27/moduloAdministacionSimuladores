export interface DevopsPreguntaDTO {
    Nombre: string;
    CantidadPreguntasPorExamen: number;
    CantidadTotal: number;
    ImgLogo: File;
    Leyenda: string;
    Proporcion: number;
  }
  
  export interface DevopsPreguntaActualizarDTO {
    Id:number;
    Nombre: string;
    CantidadPreguntasPorExamen: number;
    CantidadTotal: number;
    ImgLogo: File ;
    Leyenda: string;
    Proporcion: number;
  }
  
  export interface DevopsEnvioFilePreguntaDTO{
     Id: number;
     IdSimuladorDevopsDominio: number;
     IdSimuladorDevopsTarea: number;
     IdSimuladorTipoRespuesta: number;
     IdDevopsTipoPreguntaClasificacion: number;
     Enunciado: string;
     UrlImagenPreguntaArchivo: File;
     TieneRetroalimentacionUnica: boolean; 
     UrlRetroalimentacionVideo: string;
     Retroalimentacion: string;
     ImgRetroalimentacionArchivo: File;
     Respuestas : Array<DevopsEnvioRespuesDTO> 
  }
  export interface DevopsEnvioRespuesDTO{
     Id: number; 
     IdSimuladorDevopsPregunta: number; 
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
  