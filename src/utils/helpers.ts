export const containsCoordinate = (
  arr: [number, number][],
  coords: [number, number]
): boolean => {
  return arr.some(
    (curCoords) => curCoords[0] === coords[0] && curCoords[1] === coords[1]
  );
};
