export type IPosition = { x: number, y: number, z: number }
export type IId = string
export type IIds = IId[]
export type IStar = {
  idlePosition: IPosition,
  position: IPosition,
  rangeRadius: number,
}
export type IStars = { [key: string]: IStar }
export type IStarsData = {
  ids: IIds,
  stars: IStars
}
export type IRadius = number
export type IState = {
  starsData: IStarsData,
  postiion: IPosition,
  direction: IPosition,
  radius: IRadius
}
