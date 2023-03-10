export interface actualizarTipoRespuestaDTO {
    id:number,
    nombre: string,
    fechaModificacion: Date,

  }


  export interface actualizarParamtrosNivel {
    id:number,
    valorMinimo: number,
    valorMaximo: number,

  }

  export interface actualizarInterfaz {
    Id : number
    UrlVideo : string
    Logo : string
    PorcentajeMinimoAprobacion : number
    VigenciaAcceso : number
    UsuarioModificacion : string
    FechaModificacion : Date
  }



