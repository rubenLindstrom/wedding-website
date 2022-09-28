import styled from "styled-components";

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  align-items: center;
  margin-top: 180px;

  @media screen and (min-width: 800px) {
    margin-top: 0;
    display: grid;
    grid-template-rows: 180px 180px;
    grid-template-columns: 180px 180px 180px;
    grid-gap: 96px;
  }
`;
