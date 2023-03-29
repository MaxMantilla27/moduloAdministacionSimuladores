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
  

  export interface DevopsEnvioFilePreguntaActualizarDTO{
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
  }
  

  export interface DetallePreguntaDTO{
    id:number,
    idAspenetUsers:string,
    idSimuladorDevopsDominio:number,
    idSimuladorDevopsTarea:number,
    idSimuladorTipoRespuesta:number,
    enunciado:string,
    urlImagenPregunta:string,
    tieneRetroalimentacionUnica:boolean,
    tieneRetroalimentacion:boolean,
    urlRetroalimentacionVideo:string,
    imgRetroalimentacion:string,
    retroalimentacion:string,
    idDevopsTipoPreguntaClasificacion:number
  }