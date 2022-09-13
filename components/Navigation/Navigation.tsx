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
    <IconContainer key={link.link}>
      <Ranukel />
      <Link href={link.link} passHref>
        <StyledAnchor>{link.title}</StyledAnchor>
      </Link>
    </IconContainer>
  ));
  return <NavigationHeader>{ranukels}</NavigationHeader>;
};

export { Navigation };
