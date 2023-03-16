export interface actualizarTipoRespuestaDTO {
    id:number,
    nombre: string,
  }


  export interface actualizarParamtrosNivel {
    id:number,
    valorMinimo: number,
    valorMaximo: number,

  }

  export interface actualizarInterfaz {
    id : number
    urlVideo : string
    logo : string
    porcentajeMinimoAprobacion : number
    vigenciaAcceso : number,
    file: File
  }


