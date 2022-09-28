import styled from "styled-components";

export const HeadlineWrapper = styled.div`
  max-width: 1440px;
  display: flex;
  margin-top: 180px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 800px) {
    height: calc(100vh - 200px);
    margin: auto;
  }
`;

export const StyledHeadline = styled.h1`
  font-family: DPDorkDiary;
  font-size: 32px;
  @media screen and (min-width: 800px) {
    font-size: 48px;
  }
`;
