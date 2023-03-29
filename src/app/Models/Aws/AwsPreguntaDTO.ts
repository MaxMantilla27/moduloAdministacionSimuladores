export interface awsPreguntaDTO {
  Nombre: string;
  CantidadPreguntasPorExamen: number;
  CantidadTotal: number;
  ImgLogo: File;
  Leyenda: string;
  Proporcion: number;
  TieneSubCategoria: boolean;
}

export interface awsPreguntaActualizarDTO {
  Id:number;
  Nombre: string;
  CantidadPreguntasPorExamen: number;
  CantidadTotal: number;
  ImgLogo: File ;
  Leyenda: string;
  Proporcion: number;
  TieneSubCategoria: boolean;
}

export interface AwsEnvioFilePreguntaDTO{
   Id: number;
   IdSimuladorAwsDominio: number;
   IdSimuladorAwsTarea: number;
   IdSimuladorTipoRespuesta: number;
   IdAwsTipoPreguntaClasificacion: number;
   Enunciado: string;
   UrlImagenPreguntaArchivo: File;
   TieneRetroalimentacionUnica: boolean; 
   UrlRetroalimentacionVideo: string;
   Retroalimentacion: string;
   ImgRetroalimentacionArchivo: File;
   Respuestas : Array<AwsEnvioRespuesDTO> 
}
export interface AwsEnvioRespuesDTO{
   Id: number; 
   IdSimuladorAwsPregunta: number; 
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
