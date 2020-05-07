export const getRandom = (max: number, min = 1) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
