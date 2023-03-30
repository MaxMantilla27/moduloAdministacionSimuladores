export interface CmrpPreguntaDTO {
  Nombre: string;
  CantidadPreguntasPorExamen: number;
  CantidadTotal: number;
  ImgLogo: File;
  Leyenda: string;
  Proporcion: number;
  TieneSubCategoria: boolean;
}

export interface CmrpPreguntaActualizarDTO {
  Id:number;
  Nombre: string;
  CantidadPreguntasPorExamen: number;
  CantidadTotal: number;
  ImgLogo: File ;
  Leyenda: string;
  Proporcion: number;
  TieneSubCategoria: boolean;
}

export interface CmrpEnvioFilePreguntaDTO{
   Id: number;
   IdSimuladorCmrpDominio: number;
   IdSimuladorCmrpTarea: number;
   IdSimuladorTipoRespuesta: number;
   IdCmrpTipoPreguntaClasificacion: number;
   Enunciado: string;
   UrlImagenPreguntaArchivo: File;
   TieneRetroalimentacionUnica: boolean;
   UrlRetroalimentacionVideo: string;
   Retroalimentacion: string;
   ImgRetroalimentacionArchivo: File;
   Respuestas : Array<CmrpEnvioRespuesDTO>
}
export interface CmrpEnvioRespuesDTO{
   Id: number;
   IdSimuladorCmrpPregunta: number;
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
  idSimuladorCmrpDominio:number,
  idSimuladorCmrpTarea:number,
  idSimuladorTipoRespuesta:number,
  enunciado:string,
  urlImagenPregunta:string,
  tieneRetroalimentacionUnica:boolean,
  tieneRetroalimentacion:boolean,
  urlRetroalimentacionVideo:string,
  imgRetroalimentacion:string,
  retroalimentacion:string,
  idCmrpTipoPreguntaClasificacion:number
}
export interface CmrpEnvioFilePreguntaActualizarDTO{
  Id: number;
  IdSimuladorCmrpDominio: number;
  IdSimuladorCmrpTarea: number;
  IdSimuladorTipoRespuesta: number;
  IdCmrpTipoPreguntaClasificacion: number;
  Enunciado: string;
  UrlImagenPreguntaArchivo: File;
  TieneRetroalimentacionUnica: boolean;
  UrlRetroalimentacionVideo: string;
  Retroalimentacion: string;
  ImgRetroalimentacionArchivo: File;
}
