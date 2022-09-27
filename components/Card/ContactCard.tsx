import React from "react";
import { CardContainer, Detail, Name } from "./ContactCard.styles";

export type ContactProps = {
  name: string;
  title: string;
  email?: string;
  tel?: string;
  rotation?: string;
  backgroundColor?: string;
};

const ContactCard: React.FC<ContactProps> = ({
  name,
  title,
  email,
  tel,
  rotation,
  backgroundColor,
}) => {
  return (
    <CardContainer rotation={rotation} backgroundColor={backgroundColor}>
      <Name>{name}</Name>
      <Detail>{title}</Detail>
      <Detail>{email}</Detail>
      <Detail>{tel}</Detail>
    </CardContainer>
  );
};

export { ContactCard };
