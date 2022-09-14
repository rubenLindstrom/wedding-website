import styled from "styled-components";

export const StyledTulip = styled.svg`
  width: calc(100% - 16px * 2);
  @media screen and (min-width: 900px) {
    width: calc(100% - 112px * 2);
  }
  path {
    transition: all 0.5s ease-in-out;
  }
  :hover {
    .bottom-leaf-left {
      rotate: 2deg;
    }
    .bottom-leaf-right {
      rotate: -2deg;
    }
    .top-leaf {
      rotate: -1deg;
    }
    .flower-right {
      rotate: 1deg;
    }
    .flower-left {
      rotate: 0.5deg;
    }
  }
`;
