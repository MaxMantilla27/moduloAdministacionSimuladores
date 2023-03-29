export interface ccnaPreguntaDTO {
  Nombre: string;
  CantidadPreguntasPorExamen: number;
  CantidadTotal: number;
  ImgLogo: File;
  Leyenda: string;
  Proporcion: number;
  TieneSubCategoria: boolean;
}

export interface ccnaPreguntaActualizarDTO {
  Id:number;
  Nombre: string;
  CantidadPreguntasPorExamen: number;
  CantidadTotal: number;
  ImgLogo: File ;
  Leyenda: string;
  Proporcion: number;
  TieneSubCategoria: boolean;
}

export interface CcnaEnvioFilePreguntaDTO{
   Id: number;
   IdSimuladorCcnaDominio: number;
   IdSimuladorCcnaTarea: number;
   IdSimuladorTipoRespuesta: number;
   IdCcnaTipoPreguntaClasificacion: number;
   Enunciado: string;
   UrlImagenPreguntaArchivo: File;
   TieneRetroalimentacionUnica: boolean; 
   UrlRetroalimentacionVideo: string;
   Retroalimentacion: string;
   ImgRetroalimentacionArchivo: File;
   Respuestas : Array<CcnaEnvioRespuesDTO> 
}
export interface CcnaEnvioRespuesDTO{
   Id: number; 
   IdSimuladorCcnaPregunta: number; 
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
