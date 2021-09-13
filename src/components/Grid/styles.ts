import styled from "styled-components";

export const GridWrapper = styled.div`
  display: grid;
  grid-gap: 0px;
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: repeat(11, 1fr);
  height: 300px;
  width: 300px;
  margin: 10px;
`;
