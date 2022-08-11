import React from "react";
import { Ranukel } from "../Icon/Ranukel";
import { IconContainer, NavigationHeader } from "./Navigation.styles";

const Navigation = () => {
  return (
    <NavigationHeader>
      <IconContainer>
        <Ranukel />
      </IconContainer>
    </NavigationHeader>
  );
};

export { Navigation };
