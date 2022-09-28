import styled from "styled-components";

export const HeadlineWrapper = styled.div`
  max-width: 1440px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 800px) {
    height: calc(100vh - 200px);
  }
`;

export const StyledHeadline = styled.h1`
  font-family: DPDorkDiary;
  font-size: 32px;
  @media screen and (min-width: 800px) {
    font-size: 48px;
  }
`;
