import styled from "styled-components";

export const NavigationHeader = styled.nav`
  width: 100vw;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const IconContainer = styled.div`
  margin-right: 112px;
  .backgroundFlower {
    transition: fill 0.5s ease-in-out;
  }
  :hover {
    .backgroundFlower {
      fill: #e13357;
    }
  }
`;
