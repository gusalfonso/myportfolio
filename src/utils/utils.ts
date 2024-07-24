export const ROWS = 19;
const width = window.innerWidth;
const height = window.innerHeight;
const aspectratio = height / width;
export const COLS = Math.ceil(ROWS / aspectratio);

export const cellSide = 37;

export const createEmptyGrid = () => {
  return Array.from({ length: Math.ceil(height / cellSide) }, () =>
    Array(Math.ceil(width / cellSide)).fill(0)
  );
};

export const DIRECTIONS = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];
