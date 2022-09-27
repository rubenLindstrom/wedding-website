import React from "react";
import { ContactProps, ContactCard } from "../Card/ContactCard";
import { Grid } from "./ContactGrid.styles";

type ContactGridProps = {
  cards: ContactProps[];
};

const ContactGrid: React.FC<ContactGridProps> = ({ cards }) => {
  const rotations = ["-10deg", "10deg", "0deg", "0deg", "-5deg", "5deg"];
  const colors = [
    "#F5BEED",
    "#d8626f",
    "#9BD96C",
    "#d8626f",
    "#9BD96C",
    "#F5BEED",
  ];
  const contactCards = cards.map((card, index) => (
    <ContactCard
      name={card.name}
      title={card.title}
      email={card.email}
      tel={card.tel}
      key={card.name}
      rotation={rotations[index]}
      backgroundColor={colors[index]}
    />
  ));
  return <Grid>{contactCards}</Grid>;
};

export { ContactGrid };
