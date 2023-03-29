export interface pbiPreguntaDTO {
  Nombre: string;
  CantidadPreguntasPorExamen: number;
  CantidadTotal: number;
  ImgLogo: File;
  Leyenda: string;
  Proporcion: number;
  TieneSubCategoria: boolean;
}

export interface pbiPreguntaActualizarDTO {
  Id:number;
  Nombre: string;
  CantidadPreguntasPorExamen: number;
  CantidadTotal: number;
  ImgLogo: File ;
  Leyenda: string;
  Proporcion: number;
  TieneSubCategoria: boolean;
}

export interface PbiEnvioFilePreguntaDTO{
   Id: number;
   IdSimuladorPbiDominio: number;
   IdSimuladorPbiTarea: number;
   IdSimuladorTipoRespuesta: number;
   IdPbiTipoPreguntaClasificacion: number;
   Enunciado: string;
   UrlImagenPreguntaArchivo: File;
   TieneRetroalimentacionUnica: boolean; 
   UrlRetroalimentacionVideo: string;
   Retroalimentacion: string;
   ImgRetroalimentacionArchivo: File;
   Respuestas : Array<PbiEnvioRespuesDTO> 
}
export interface PbiEnvioRespuesDTO{
   Id: number; 
   IdSimuladorPbiPregunta: number; 
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
