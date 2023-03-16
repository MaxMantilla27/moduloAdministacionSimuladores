export interface actualizarTipoRespuestaDTO {
    id:number,
    nombre: string,
    fechaModificacion: Date
  }

  export interface filtradoPreguntaDTO{
    id:number,
    pregunta:string,
    idCategoria:number,
    categoria:string,
    subcategoria:string,
  }


  export interface actualizarParametrosNivel {
    id:number,
    valorMinimo: number,
    valorMaximo: number
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


