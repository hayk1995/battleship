import React from "react";

import { GridCellWrapper, Label } from "./styles";

export type Props = {
  x: number;
  y: number;
  state: CellState;
  handleClick?: (x: number, y: number) => void;
};

export enum CellState {
  PLACED,
  Hit,
  Miss,
  Default,
}

const GridCell: React.FC<Props> = ({ x, y, state, handleClick }) => {
  if (x == 0 && y == 0) {
    return <div />;
  }

  if (x == 0) {
    return <Label>{"ABCDEFGHIJ".substring(y - 1, y)}</Label>;
  }

  if (y == 0) {
    return <Label>{x}</Label>;
  }

  return (
    <GridCellWrapper
      state={state}
      onClick={() => (handleClick ? handleClick(x, y) : false)}
    />
  );
};

export default GridCell;
