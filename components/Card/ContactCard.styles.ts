import styled from "styled-components";

export const CardContainer = styled.div<{
  rotation?: string;
  backgroundColor?: string;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  justify-content: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  height: 100%;
  gap: 12px;
  height: 150px;
  width: 70vw;
  transition: all 0.4s ease-in-out;
  z-index: 10;
  :hover {
    rotate: 0deg;
    scale: 1.2;
  }
  @media screen and (min-width: 800px) {
    height: 180px;
    width: 180px;
    rotate: ${({ rotation }) => rotation};
  }
`;

export const Name = styled.span`
  font-size: 14px;
  font-weight: bold;

  @media screen and (min-width: 800px) {
    font-size: 16px;
  }
`;

export const Detail = styled.span`
  font-size: 12px;
  padding: 0 10px;
  text-align: center;
  @media screen and (min-width: 800px) {
    font-size: 12px;
  }
`;
