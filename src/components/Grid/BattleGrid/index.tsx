import React from "react";

import { GridWrapper } from "../styles";
import GridCell, { CellState } from "../../GridCell";
import { containsCoordinate } from "../../../utils/helpers";

export type Props = {
  hits: [number, number][];
  misses: [number, number][];
  handlePlayerMove: (x: number, y: number) => void;
};

const BattleGrid: React.FC<Props> = ({ hits, misses, handlePlayerMove }) => {
  const gridInfo = [];

  for (let x = 0; x <= 10; ++x) {
    for (let y = 0; y <= 10; ++y) {
      let state = CellState.Default;
      if (containsCoordinate(hits, [x, y])) {
        state = CellState.Hit;
      }
      if (containsCoordinate(misses, [x, y])) {
        state = CellState.Miss;
      }

      gridInfo.push({
        x,
        y,
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
          handleClick={handlePlayerMove}
        />
      ))}
    </GridWrapper>
  );
};

export default BattleGrid;
