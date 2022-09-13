import styled from "styled-components";

export const TimelineContainer = styled.div`
  margin-top: 112px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Time = styled.span`
  font-weight: bold;
  font-size: 56px;
`;

export const EventContainer = styled.li<{ isEven: boolean }>`
  display: flex;
  flex-direction: column;
  width: fit-content;
  position: relative;

  p {
    width: 300px;
    position: absolute;
    top: 100%;
    margin: 0;
    margin-left: ${({ isEven }) => (isEven ? "0" : "16px")};
    transform: ${({ isEven }) =>
      isEven ? `translateX(-100%)` : `translateX(50%)`};
  }
`;
