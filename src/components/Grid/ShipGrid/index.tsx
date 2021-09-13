import React from "react";

import { GridWrapper } from "../styles";
import { containsCoordinate } from "../../../utils/helpers";
import GridCell, { CellState } from "../../GridCell";

export type Props = {
  shipsPositions: [number, number][];
  hits: [number, number][];
  misses: [number, number][];
};

const ShipGrid: React.FC<Props> = ({ shipsPositions, hits, misses }) => {
  const gridInfo = [];

  for (let i = 0; i <= 10; ++i) {
    for (let j = 0; j <= 10; ++j) {
      let state = CellState.Default;
      if (containsCoordinate(hits, [i, j])) {
        state = CellState.Hit;
      } else if (containsCoordinate(misses, [i, j])) {
        state = CellState.Miss;
      } else if (containsCoordinate(shipsPositions, [i, j])) {
        state = CellState.PLACED;
      }

      gridInfo.push({
        x: i,
        y: j,
        state,
      });
    }
  }

  return (
    <GridWrapper>
      {gridInfo.map((item) => (
        <GridCell
          key={`${item.x}:${item.y}`}
          x={item.x}
          y={item.y}
          state={item.state}
        />
      ))}
    </GridWrapper>
  );
};

export default ShipGrid;
