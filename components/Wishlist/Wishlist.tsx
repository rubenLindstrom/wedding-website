import Image from "next/image";
import React from "react";
import { IntroductionContainer } from "../Introduction/Introduction.styles";

export const Wishlist: React.FC<{
  title: string;
  text: string;
}> = ({ title, text }) => {
  const splitText = text.split("\\n");
  const fullText = splitText.map((txt) => (
    <p key={txt} className="wishlistText">
      {txt}
    </p>
  ));
  return (
    <IntroductionContainer>
      <h2>{title}</h2>
      <div style={{ marginBottom: "24px" }}>{fullText}</div>
      <Image src="/SwishQRKod.jpeg" width="200px" height="200px" alt="qrkod" />
    </IntroductionContainer>
  );
};
