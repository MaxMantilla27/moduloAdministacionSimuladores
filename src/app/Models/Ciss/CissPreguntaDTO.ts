export interface CissPreguntaDTO {
    Nombre: string;
    CantidadPreguntasPorExamen: number;
    CantidadTotal: number;
    ImgLogo: File;
    Leyenda: string;
    Proporcion: number;
  }
  
  export interface CissPreguntaActualizarDTO {
    Id:number;
    Nombre: string;
    CantidadPreguntasPorExamen: number;
    CantidadTotal: number;
    ImgLogo: File ;
    Leyenda: string;
    Proporcion: number;
  }
  
  export interface CissEnvioFilePreguntaDTO{
    Id: number;
    IdSimuladorCissDominio: number;
    IdSimuladorCissTarea: number;
    IdSimuladorTipoRespuesta: number;
    IdCissTipoPreguntaClasificacion: number;
    Enunciado: string;
    UrlImagenPreguntaArchivo: File;
    TieneRetroalimentacionUnica: boolean;
    UrlRetroalimentacionVideo: string;
    Retroalimentacion: string;
    ImgRetroalimentacionArchivo: File;
    Respuestas : Array<CissEnvioRespuesDTO>
 }
  export interface CissEnvioRespuesDTO{
     Id: number; 
     IdSimuladorCissPregunta: number; 
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

  export interface DetallePreguntaDTO{
    id:number,
    idAspenetUsers:string,
    idSimuladorCissDominio:number,
    idSimuladorCissTarea:number,
    idSimuladorTipoRespuesta:number,
    enunciado:string,
    urlImagenPregunta:string,
    tieneRetroalimentacionUnica:boolean,
    tieneRetroalimentacion:boolean,
    urlRetroalimentacionVideo:string,
    imgRetroalimentacion:string,
    retroalimentacion:string,
    idCissTipoPreguntaClasificacion:number
  }


  export interface CissEnvioFilePreguntaActualizarDTO{
    Id: number;
    IdSimuladorCissDominio: number;
    IdSimuladorCissTarea: number;
    IdSimuladorTipoRespuesta: number;
    IdCissTipoPreguntaClasificacion: number;
    Enunciado: string;
    UrlImagenPreguntaArchivo: File;
    TieneRetroalimentacionUnica: boolean;
    UrlRetroalimentacionVideo: string;
    Retroalimentacion: string;
    ImgRetroalimentacionArchivo: File;
  }
  