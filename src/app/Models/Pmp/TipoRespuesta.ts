export interface actualizarTipoRespuestaDTO {
    id:number,
    nombre: string,
  }

export interface filtradoPreguntaDTO{
  id:number,
  enunciado:string,
  idCategoria:number,
  categoria:string,
  subcategoria:string,
}

export interface filtradoAdminsitradorDTO{
  codigoMatricula:string,
  alumno:string,
  correo:string,
  nombrePrograma:string,
  centroCostos:string,
  estadoCurso:string,
  estadoPagos:string,
  estadoSolicitud:string,
}

export interface filtradoReporteGeneralDTO{
  codigoMatricula:string,
  alumno:string,
  centroCostos:string,
  tipoMatricula:string,
  nivel:string
}


export interface actualizarParametrosNivel {
  id:number,
  nombre:string,
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

  export interface filtro{
    id:number,
    nombre: string,
    categoria:string,
  }

