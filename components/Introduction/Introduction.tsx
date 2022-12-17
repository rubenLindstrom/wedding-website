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
    <h2>{title}</h2>
    <p>{introduction}</p>
    <IconContainer href="https://spritmuseum.se/" target="_blank">
      <Ranukel />
      <StyledAnchor>Lokal</StyledAnchor>
    </IconContainer>
    <RoseLeft />
    <RoseRight />
  </IntroductionContainer>
);
