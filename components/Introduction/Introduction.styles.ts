import styled from "styled-components";

export const IntroductionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1440px;
  position: relative;
  height: 100%;
  margin: 64px auto auto auto;

  h2 {
    z-index: 10;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 8px;
    border-radius: 8px;
    font-family: "Rosario";
    font-weight: 700;
    @media screen and (min-width: 900px) {
      background-color: transparent;
      padding: 0;
      border-radius: 0;
    }
  }
  p {
    margin: 16px;
    z-index: 10;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 16px;
    border-radius: 8px;
    font-family: "Rosario";
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
    &.wishlistText {
      margin-bottom: 0;
    }
  }

  .left-rose {
    left: 10px;
  }
  .right-rose {
    right: 10px;
  }
`;
