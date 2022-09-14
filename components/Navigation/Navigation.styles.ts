import styled from "styled-components";

export const NavigationHeader = styled.nav`
  height: 200px;
  display: flex;
  align-items: center;
  gap: 24px;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 51;
  @media screen and (min-width: 900px) {
    justify-content: flex-end;
    width: calc(100vw - 86px);
  }
`;

export const IconContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;

  svg {
    width: 75%;
    @media screen and (min-width: 900px) {
      width: 100%;
    }
  }

  .backgroundFlower {
    transition: fill 0.5s ease-in-out;
  }
  :hover {
    .backgroundFlower {
      fill: #e13357;
    }
  }
`;

export const StyledAnchor = styled.a`
  position: absolute;
  font-weight: bold;
  font-size: 12px;
  @media screen and (min-width: 900px) {
    font-size: 16px;
  }
`;
