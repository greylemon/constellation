import { IIds, IPosition, IStar, IStars, IStarsData, IState } from "../../@types/state";
import uniqid from "uniqid"

export const generateRandomNumber = (base: number) => {
  let num = Math.random() * base
  if (Math.random() < 0.5) num = -num 
  return num
}

export const generateRandomPosition = (base: number): IPosition => ({
  x: generateRandomNumber(base),
  y: generateRandomNumber(base),
  z: generateRandomNumber(base)
})

const createStarsData = (
  starCount: number,
  starRadius: number,
  radius: number
): IStarsData => {
  let ids: IIds = []
  let stars: IStars = {}
  for (let i = 0; i < starCount; i++) {
    const id = uniqid()
    const idlePosition = generateRandomPosition(radius)
    const star: IStar = {
      idlePosition,
      position: idlePosition,
      rangeRadius: starRadius
    }

    stars[id] = star
    ids.push(id)
  }

  return {
    ids,
    stars
  }
}

export const createState = (): IState => {
  const starsData = createStarsData(10, 5, 100)
  const state: IState = {
    direction: { x: 0, y: 0, z: 0 },
    postiion: { x: 0, y: 0, z: 0 },
    starsData,
    radius: 100
  }

  return state
}
