import React from "react";
import { Tulip } from "../Icon/Tulip";
import { HeadlineWrapper, StyledHeadline } from "./Headline.styles";

export const Headline: React.FC<{ headLine: string }> = ({ headLine }) => (
  <HeadlineWrapper>
    <StyledHeadline>{headLine}</StyledHeadline>
    <Tulip />
  </HeadlineWrapper>
);
