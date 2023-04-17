export interface TogPreguntaDTO {
  IdNivel:number,
  Nombre: string;
  CantidadPreguntasPorExamen: number;
  CantidadTotal: number;
  ImgLogo: File;
  Leyenda: string;
  // Proporcion: number;
  TieneSubCategoria: boolean;
}

export interface TogPreguntaActualizarDTO {
  Id:number;
  IdNivel:number;
  Nombre: string;
  CantidadPreguntasPorExamen: number;
  CantidadTotal: number;
  ImgLogo: File ;
  Leyenda: string;
  // Proporcion: number;
  TieneSubCategoria: boolean;
}

export interface TogEnvioFilePreguntaNivel1DTO{
   Id: number;
   IdSimuladorTogDominio: number;
   IdSimuladorTogTarea: number;
   IdSimuladorTogNivel:number;
   IdSimuladorTipoRespuesta: number;
   IdTogTipoPreguntaClasificacion: number;
   Enunciado: string;
   UrlImagenPreguntaArchivo: File;
   TieneRetroalimentacionUnica: boolean;
   UrlRetroalimentacionVideo: string;
   Retroalimentacion: string;
   ImgRetroalimentacionArchivo: File;
   Respuestas : Array<TogEnvioRespuestaNivel1DTO>
}
export interface TogEnvioRespuestaNivel1DTO{
   Id: number;
   IdSimuladorTogPregunta: number;
   Respuesta: string;
   Valor: number;
   Correcto: boolean;
   Puntaje: number;
   UrlRetroalimentacionVideo: string;
   Explicacion: string;
   UrlImagenArchivo: File;
}
export interface TogEnvioFilePreguntaNivel2DTO{
  Id: number;
  IdSimuladorTogDominio: number;
  IdSimuladorTogTarea: number;
  IdSimuladorTogNivel:number;
  IdSimuladorTipoRespuesta: number;
  IdTogTipoPreguntaClasificacion: number;
  Enunciado: string;
  UrlImagenPreguntaArchivo: File;
  TieneRetroalimentacionUnica: boolean;
  UrlRetroalimentacionVideo: string;
  Retroalimentacion: string;
  ImgRetroalimentacionArchivo: File;
  Respuestas : Array<TogEnvioRespuestaNivel2DTO>
}
export interface TogEnvioRespuestaNivel2DTO{
  Id: number;
  IdSimuladorTogPregunta: number;
  Respuesta: string;
  OpcionRespuesta: string;
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
  idSimuladorTogDominio:number,
  idSimuladorTogTarea:number,
  idSimuladorTipoRespuesta:number,
  enunciado:string,
  urlImagenPregunta:string,
  tieneRetroalimentacionUnica:boolean,
  tieneRetroalimentacion:boolean,
  urlRetroalimentacionVideo:string,
  imgRetroalimentacion:string,
  retroalimentacion:string,
  idTogTipoPreguntaClasificacion:number
}
export interface TogEnvioFilePreguntaActualizarDTO{
  Id: number;
  IdSimuladorTogDominio: number;
  IdSimuladorTogTarea: number;
  IdSimuladorTogNivel: number;
  IdSimuladorTipoRespuesta: number;
  IdTogTipoPreguntaClasificacion: number;
  Enunciado: string;
  UrlImagenPreguntaArchivo: File;
  TieneRetroalimentacionUnica: boolean;
  UrlRetroalimentacionVideo: string;
  Retroalimentacion: string;
  ImgRetroalimentacionArchivo: File;
}
