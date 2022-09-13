import React from "react";
import { Ranukel } from "../Icon/Ranukel";
import { RoseLeft, RoseRight } from "../Icon/Roses";
import { IconContainer, StyledAnchor } from "../Navigation/Navigation.styles";
import { IntroductionContainer } from "./Introduction.styles";

export const Introduction: React.FC<{
  title: string;
  introduction: string;
}> = ({ title, introduction }) => (
  <IntroductionContainer>
    <h3>{title}</h3>
    <p>{introduction}</p>
    <IconContainer>
      <Ranukel />
      <StyledAnchor href="https://spritmuseum.se/" target="_blank">
        Venue
      </StyledAnchor>
    </IconContainer>
    <RoseLeft />
    <RoseRight />
  </IntroductionContainer>
);
