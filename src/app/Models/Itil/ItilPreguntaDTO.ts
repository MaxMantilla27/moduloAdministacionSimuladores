export interface ItilPreguntaDTO {
  Nombre: string;
  CantidadPreguntasPorExamen: number;
  CantidadTotal: number;
  ImgLogo: File;
  Leyenda: string;
  Proporcion: number;
  TieneSubCategoria: boolean;
}

export interface ItilPreguntaActualizarDTO {
  Id:number;
  Nombre: string;
  CantidadPreguntasPorExamen: number;
  CantidadTotal: number;
  ImgLogo: File ;
  Leyenda: string;
  Proporcion: number;
  TieneSubCategoria: boolean;
}

export interface ItilEnvioFilePreguntaDTO{
   Id: number;
   IdSimuladorItilDominio: number;
   IdSimuladorItilTarea: number;
   IdSimuladorTipoRespuesta: number;
   IdItilTipoPreguntaClasificacion: number;
   Enunciado: string;
   UrlImagenPreguntaArchivo: File;
   TieneRetroalimentacionUnica: boolean;
   UrlRetroalimentacionVideo: string;
   Retroalimentacion: string;
   ImgRetroalimentacionArchivo: File;
   Respuestas : Array<ItilEnvioRespuesDTO>
}
export interface ItilEnvioRespuesDTO{
   Id: number;
   IdSimuladorItilPregunta: number;
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
  idSimuladorItilDominio:number,
  idSimuladorItilTarea:number,
  idSimuladorTipoRespuesta:number,
  enunciado:string,
  urlImagenPregunta:string,
  tieneRetroalimentacionUnica:boolean,
  tieneRetroalimentacion:boolean,
  urlRetroalimentacionVideo:string,
  imgRetroalimentacion:string,
  retroalimentacion:string,
  idItilTipoPreguntaClasificacion:number
}
export interface ItilEnvioFilePreguntaActualizarDTO{
  Id: number;
  IdSimuladorItilDominio: number;
  IdSimuladorItilTarea: number;
  IdSimuladorTipoRespuesta: number;
  IdItilTipoPreguntaClasificacion: number;
  Enunciado: string;
  UrlImagenPreguntaArchivo: File;
  TieneRetroalimentacionUnica: boolean;
  UrlRetroalimentacionVideo: string;
  Retroalimentacion: string;
  ImgRetroalimentacionArchivo: File;
}
