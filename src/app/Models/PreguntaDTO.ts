export interface pmpPreguntaDTO {
  Nombre: string;
  CantidadPreguntasPorExamen: number;
  CantidadTotal: number;
  ImgLogo: File;
  Leyenda: string;
  Proporcion: number;
  TieneSubCategoria: boolean;
}

export interface pmpPreguntaActualizarDTO {
  Id:number;
  Nombre: string;
  CantidadPreguntasPorExamen: number;
  CantidadTotal: number;
  ImgLogo: File;
  Leyenda: string;
  Proporcion: number;
  TieneSubCategoria: boolean;
}

export interface PmpEnvioFilePreguntaDTO{
   Id: number;
   nombreArchivo: string; 
   IdSimuladorPmpTarea: number;
   IdSimuladorTipoRespuesta: number;
   Enunciado: string;
   TieneRetroalimentacion: true; 
   UrlRetroalimentacionVideo: string;
   Retroalimentacion: string;
   Imagen: File;
   ImgRetroalimentacion?: File;
   Respuestas : Array<PmpEnvioRespuesDTO> 
}
export interface PmpEnvioRespuesDTO{
   Id: number; 
   IdSimuladorPmpPregunta: number; 
   Alternativa: string; 
   Valor: number; 
   Correcto: boolean; 
   IdAspNetUsers: string; 
   Puntaje: number; 
   UrlRetroalimentacionVideo: string; 
   Imagen: File; 
   Retroalimentacion: string; 
   UrlImagen?: string 
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
