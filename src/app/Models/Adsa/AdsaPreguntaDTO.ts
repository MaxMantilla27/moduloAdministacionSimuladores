export interface adsaPreguntaDTO {
  Nombre: string;
  CantidadPreguntasPorExamen: number;
  CantidadTotal: number;
  ImgLogo: File;
  Leyenda: string;
  Proporcion: number;
  TieneSubCategoria: boolean;
}

export interface adsaPreguntaActualizarDTO {
  Id:number;
  Nombre: string;
  CantidadPreguntasPorExamen: number;
  CantidadTotal: number;
  ImgLogo: File ;
  Leyenda: string;
  Proporcion: number;
  TieneSubCategoria: boolean;
}

export interface AdsaEnvioFilePreguntaDTO{
   Id: number;
   IdSimuladorAdsaDominio: number;
   IdSimuladorAdsaTarea: number;
   IdSimuladorTipoRespuesta: number;
   IdAdsaTipoPreguntaClasificacion: number;
   Enunciado: string;
   UrlImagenPreguntaArchivo: File;
   TieneRetroalimentacionUnica: boolean; 
   UrlRetroalimentacionVideo: string;
   Retroalimentacion: string;
   ImgRetroalimentacionArchivo: File;
   Respuestas : Array<AdsaEnvioRespuesDTO> 
}
export interface AdsaEnvioRespuesDTO{
   Id: number; 
   IdSimuladorAdsaPregunta: number; 
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
  idSimuladorAdsaDominio:number,
  idSimuladorAdsaTarea:number,
  idSimuladorTipoRespuesta:number,
  enunciado:string,
  urlImagenPregunta:string,
  tieneRetroalimentacionUnica:boolean,
  tieneRetroalimentacion:boolean,
  urlRetroalimentacionVideo:string,
  imgRetroalimentacion:string,
  retroalimentacion:string,
  idAdsaTipoPreguntaClasificacion:number
}
export interface AdsaEnvioFilePreguntaActualizarDTO{
  Id: number;
  IdSimuladorAdsaDominio: number;
  IdSimuladorAdsaTarea: number;
  IdSimuladorTipoRespuesta: number;
  IdAdsaTipoPreguntaClasificacion: number;
  Enunciado: string;
  UrlImagenPreguntaArchivo: File;
  TieneRetroalimentacionUnica: boolean;
  UrlRetroalimentacionVideo: string;
  Retroalimentacion: string;
  ImgRetroalimentacionArchivo: File;
}