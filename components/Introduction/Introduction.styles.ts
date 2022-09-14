import styled from "styled-components";

export const IntroductionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1440px;
  position: relative;
  height: 100%;
  margin: 64px auto auto auto;

  h3 {
    z-index: 10;
    background-color: white;
    padding: 8px;
    border-radius: 8px;
    @media screen and (min-width: 900px) {
      background-color: transparent;
      padding: 0;
      border-radius: 0;
    }
  }
  p {
    margin: 16px;
    z-index: 10;
    background-color: white;
    padding: 16px;
    border-radius: 8px;
    font-size: 14px;
    @media screen and (min-width: 900px) {
      margin: 24px 112px;
      background-color: transparent;
      padding: 0;
      border-radius: 0;
      font-size: 16px;
    }
    max-width: 600px;
    text-align: center;
  }

  .left-rose {
    left: 10px;
  }
  .right-rose {
    right: 10px;
  }
`;
