import { containsCoordinate } from "./helpers";

describe("Specification tests for helpers", () => {
  it("Test containsCoordinate success", () => {
    const coords: [number, number][] = [
      [1, 2],
      [1, 3],
    ];
    let result = containsCoordinate(coords, [1, 2]);
    expect(result).toEqual(true);
    result = containsCoordinate(coords, [3, 4]);
    expect(result).toEqual(false);
  });
});
