export interface LabcPreguntaDTO {
    Nombre: string;
    CantidadPreguntasPorExamen: number;
    CantidadTotal: number;
    ImgLogo: File;
    Leyenda: string;
    Proporcion: number;
  }
  
  export interface LabcPreguntaActualizarDTO {
    Id:number;
    Nombre: string;
    CantidadPreguntasPorExamen: number;
    CantidadTotal: number;
    ImgLogo: File ;
    Leyenda: string;
    Proporcion: number;
  }
  
  export interface LabcEnvioFilePreguntaDTO{
     Id: number;
     IdSimuladorLabcDominio: number;
     IdSimuladorLabcTarea: number;
     IdSimuladorTipoRespuesta: number;
     IdLabcTipoPreguntaClasificacion: number;
     Enunciado: string;
     UrlImagenPreguntaArchivo: File;
     TieneRetroalimentacionUnica: boolean; 
     UrlRetroalimentacionVideo: string;
     Retroalimentacion: string;
     ImgRetroalimentacionArchivo: File;
     Respuestas : Array<LabcEnvioRespuesDTO> 
  }
  export interface LabcEnvioRespuesDTO{
     Id: number; 
     IdSimuladorLabcPregunta: number; 
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
  

  export interface LabcEnvioFilePreguntaActualizarDTO{
    Id: number;
    IdSimuladorLabcDominio: number;
    IdSimuladorLabcTarea: number;
    IdSimuladorTipoRespuesta: number;
    IdLabcTipoPreguntaClasificacion: number;
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
    idSimuladorLabcDominio:number,
    idSimuladorLabcTarea:number,
    idSimuladorTipoRespuesta:number,
    enunciado:string,
    urlImagenPregunta:string,
    tieneRetroalimentacionUnica:boolean,
    tieneRetroalimentacion:boolean,
    urlRetroalimentacionVideo:string,
    imgRetroalimentacion:string,
    retroalimentacion:string,
    idLabcTipoPreguntaClasificacion:number
  }