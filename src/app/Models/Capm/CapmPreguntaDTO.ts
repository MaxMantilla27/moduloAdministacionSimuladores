export interface CapmPreguntaDTO {
  Nombre: string;
  CantidadPreguntasPorExamen: number;
  CantidadTotal: number;
  ImgLogo: File;
  Leyenda: string;
  Proporcion: number;
  TieneSubCategoria: boolean;
}

export interface CapmPreguntaActualizarDTO {
  Id:number;
  Nombre: string;
  CantidadPreguntasPorExamen: number;
  CantidadTotal: number;
  ImgLogo: File ;
  Leyenda: string;
  Proporcion: number;
  TieneSubCategoria: boolean;
}

export interface CapmEnvioFilePreguntaDTO{
   Id: number;
   IdSimuladorCapmDominio: number;
   IdSimuladorCapmTarea: number;
   IdSimuladorTipoRespuesta: number;
   IdCapmTipoPreguntaClasificacion: number;
   Enunciado: string;
   UrlImagenPreguntaArchivo: File;
   TieneRetroalimentacionUnica: boolean;
   UrlRetroalimentacionVideo: string;
   Retroalimentacion: string;
   ImgRetroalimentacionArchivo: File;
   Respuestas : Array<CapmEnvioRespuesDTO>
}
export interface CapmEnvioRespuesDTO{
   Id: number;
   IdSimuladorCapmPregunta: number;
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
  idSimuladorCapmDominio:number,
  idSimuladorCapmTarea:number,
  idSimuladorTipoRespuesta:number,
  enunciado:string,
  urlImagenPregunta:string,
  tieneRetroalimentacionUnica:boolean,
  tieneRetroalimentacion:boolean,
  urlRetroalimentacionVideo:string,
  imgRetroalimentacion:string,
  retroalimentacion:string,
  idCapmTipoPreguntaClasificacion:number
}
export interface CapmEnvioFilePreguntaActualizarDTO{
  Id: number;
  IdSimuladorCapmDominio: number;
  IdSimuladorCapmTarea: number;
  IdSimuladorTipoRespuesta: number;
  IdCapmTipoPreguntaClasificacion: number;
  Enunciado: string;
  UrlImagenPreguntaArchivo: File;
  TieneRetroalimentacionUnica: boolean;
  UrlRetroalimentacionVideo: string;
  Retroalimentacion: string;
  ImgRetroalimentacionArchivo: File;
}
