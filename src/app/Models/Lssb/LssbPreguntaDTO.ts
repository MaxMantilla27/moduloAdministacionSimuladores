export interface LssbPreguntaDTO {
  Nombre: string;
  CantidadPreguntasPorExamen: number;
  CantidadTotal: number;
  ImgLogo: File;
  Leyenda: string;
  // Proporcion: number;
  TieneSubCategoria: boolean;
}

export interface LssbPreguntaActualizarDTO {
  Id:number;
  Nombre: string;
  CantidadPreguntasPorExamen: number;
  CantidadTotal: number;
  ImgLogo: File ;
  Leyenda: string;
  // Proporcion: number;
  TieneSubCategoria: boolean;
}

export interface LssbEnvioFilePreguntaDTO{
   Id: number;
   IdSimuladorLssbDominio: number;
   IdSimuladorLssbTarea: number;
   IdSimuladorTipoRespuesta: number;
   IdLssbTipoPreguntaClasificacion: number;
   Enunciado: string;
   UrlImagenPreguntaArchivo: File;
   TieneRetroalimentacionUnica: boolean;
   UrlRetroalimentacionVideo: string;
   Retroalimentacion: string;
   ImgRetroalimentacionArchivo: File;
   Respuestas : Array<LssbEnvioRespuesDTO>
}
export interface LssbEnvioRespuesDTO{
   Id: number;
   IdSimuladorLssbPregunta: number;
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
  idSimuladorLssbDominio:number,
  idSimuladorLssbTarea:number,
  idSimuladorTipoRespuesta:number,
  enunciado:string,
  urlImagenPregunta:string,
  tieneRetroalimentacionUnica:boolean,
  tieneRetroalimentacion:boolean,
  urlRetroalimentacionVideo:string,
  imgRetroalimentacion:string,
  retroalimentacion:string,
  idLssbTipoPreguntaClasificacion:number
}
export interface LssbEnvioFilePreguntaActualizarDTO{
  Id: number;
  IdSimuladorLssbDominio: number;
  IdSimuladorLssbTarea: number;
  IdSimuladorTipoRespuesta: number;
  IdLssbTipoPreguntaClasificacion: number;
  Enunciado: string;
  UrlImagenPreguntaArchivo: File;
  TieneRetroalimentacionUnica: boolean;
  UrlRetroalimentacionVideo: string;
  Retroalimentacion: string;
  ImgRetroalimentacionArchivo: File;
}
