export const makeArray = (length: number) => new Array(length).fill(null)

export const range = (max: number, min: number): number[] =>
  makeArray(max - min).map((_, index) => index + min)

export const random = (max: number, min: number): number =>
  Math.floor(Math.random() * (max - min) + min)
