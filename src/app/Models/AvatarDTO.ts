
export interface AvatarDTO{
  id:number,
  idPersonal:number,
  top:string,
  accessories:string,
  hairColor:string,
  facialHair:string,
  facialHairColor:string,
  clothes:string,
  clothesColor:string,
  eyes:string,
  eyesbrow:string,
  mouth:string,
  skin:string,
  usuario:string,
  idSexo:number,
}
export interface AvatarCaracteristicaDTO{
  IdAvatarCaracteristica:number,
  Etiqueta:string,
  Valor:string,
}
export interface AvatarCombosDTO{
  listaCabello:Array<any>,
  listaColorCabello:Array<any>,
  listaBarbaBigote:Array<any>,
  listaColorBarbaBigote:Array<any>,
  listaMirada:Array<any>,
  listaCejas:Array<any>,
  listaBoca:Array<any>,
  listaColorPiel:Array<any>,
  listaRopa:Array<any>,
  listaColorRopa:Array<any>,
  listaAccesorios:Array<any>,
  UrlAvatar:string,
  DatosAvatar:AvatarDTO,
}
