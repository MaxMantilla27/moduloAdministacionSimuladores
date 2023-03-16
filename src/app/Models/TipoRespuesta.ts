export interface actualizarTipoRespuestaDTO {
    id:number,
    nombre: string,
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
  nombre:string,
  fechaModificacion: Date,
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

