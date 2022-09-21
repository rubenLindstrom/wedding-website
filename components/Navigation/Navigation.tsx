import React from "react";
import Link from "next/link";

import { Ranukel } from "../Icon/Ranukel";
import {
  IconContainer,
  NavigationHeader,
  StyledAnchor,
} from "./Navigation.styles";

type LinkProps = { links: { title: string; link: string }[] };

const Navigation: React.FC<LinkProps> = ({ links }) => {
  const ranukels = links.map((link) => (
    <Link href={link.link} passHref>
      <IconContainer
        key={link.link}
        target={link.title === "RSVP" ? "_blank" : "_self"}
      >
        <Ranukel />
        <StyledAnchor>{link.title}</StyledAnchor>
      </IconContainer>
    </Link>
  ));
  return <NavigationHeader>{ranukels}</NavigationHeader>;
};

export { Navigation };
