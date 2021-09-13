import styled from "styled-components";

import { CellState } from "./index";

type Props = {
  state: CellState;
};

export const GridCellWrapper = styled.div`
  border: 1px solid blue;
  background-color: ${(props: Props) => {
    switch (props.state) {
      case CellState.PLACED:
        return "blue";
      case CellState.Hit:
        return "red";
      case CellState.Miss:
        return "grey";
      default:
        return "";
    }
  }};
`;

export const Label = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
