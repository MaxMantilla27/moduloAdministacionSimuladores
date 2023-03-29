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
