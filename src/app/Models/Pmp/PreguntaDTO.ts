export interface pmpPreguntaDTO {
  Nombre: string;
  CantidadPreguntasPorExamen: number;
  CantidadTotal: number;
  ImgLogo: File;
  Leyenda: string;
  // Proporcion: number;
  TieneSubCategoria: boolean;
}

export interface pmpPreguntaActualizarDTO {
  Id:number;
  Nombre: string;
  CantidadPreguntasPorExamen: number;
  CantidadTotal: number;
  ImgLogo: File ;
  Leyenda: string;
  // Proporcion: number;
  TieneSubCategoria: boolean;
}

export interface PmpEnvioFilePreguntaDTO{
   Id: number;
   IdSimuladorPmpDominio: number;
   IdSimuladorPmpTarea: number;
   IdSimuladorTipoRespuesta: number;
   IdPmpTipoPreguntaClasificacion: number;
   Enunciado: string;
   UrlImagenPreguntaArchivo: File;
   TieneRetroalimentacionUnica: boolean;
   UrlRetroalimentacionVideo: string;
   Retroalimentacion: string;
   ImgRetroalimentacionArchivo: File;
   Respuestas : Array<PmpEnvioRespuesDTO>
}
export interface PmpEnvioRespuesDTO{
   Id: number;
   IdSimuladorPmpPregunta: number;
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
  idSimuladorPmpDominio:number,
  idSimuladorPmpTarea:number,
  idSimuladorTipoRespuesta:number,
  enunciado:string,
  urlImagenPregunta:string,
  tieneRetroalimentacionUnica:boolean,
  tieneRetroalimentacion:boolean,
  urlRetroalimentacionVideo:string,
  imgRetroalimentacion:string,
  retroalimentacion:string,
  idPmpTipoPreguntaClasificacion:number
}
export interface PmpEnvioFilePreguntaActualizarDTO{
  Id: number;
  IdSimuladorPmpDominio: number;
  IdSimuladorPmpTarea: number;
  IdSimuladorTipoRespuesta: number;
  IdPmpTipoPreguntaClasificacion: number;
  Enunciado: string;
  UrlImagenPreguntaArchivo: File;
  TieneRetroalimentacionUnica: boolean;
  UrlRetroalimentacionVideo: string;
  Retroalimentacion: string;
  ImgRetroalimentacionArchivo: File;
}
