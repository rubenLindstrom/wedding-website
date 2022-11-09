import styled from "styled-components";

export const TimelineContainer = styled.div`
  margin: 80px auto auto auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1440px;
  position: relative;
  gap: 36px;
  @media screen and (min-width: 900px) {
    margin-top: 224px;
  }
`;

export const Time = styled.span`
  font-weight: bold;
  font-size: 32px;
  @media screen and (min-width: 900px) {
    font-size: 56px;
  }
`;

export const Name = styled.span`
  font-weight: bold;
  font-size: 12px;
  @media screen and (min-width: 900px) {
    font-size: 24px;
  }
`;

export const EventContainer = styled.li<{ isEven: boolean }>`
  display: flex;
  flex-direction: column;
  width: fit-content;
  text-align: center;
  position: relative;
  background-color: white;
  border-radius: 8px;
  padding: 16px;
  @media screen and (min-width: 900px) {
    text-align: left;
    background-color: transparent;
    transform: ${({ isEven }) =>
      isEven ? `translateX(-100%)` : `translateX(100%)`};
  }

  p {
    width: 200px;
    margin: 0;
    font-size: 12px;
    @media screen and (min-width: 900px) {
      font-size: 14px;
      width: 300px;
    }
  }
`;
