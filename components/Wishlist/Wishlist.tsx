import React from "react";
import { IntroductionContainer } from "../Introduction/Introduction.styles";

export const Wishlist: React.FC<{
  title: string;
  text: string;
}> = ({ title, text }) => (
  <IntroductionContainer>
    <h3>{title}</h3>
    <p>{text}</p>
  </IntroductionContainer>
);
