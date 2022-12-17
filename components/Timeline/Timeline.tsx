import React from "react";
import { Branch } from "../Icon/Branch";
import {
  EventContainer,
  Name,
  Time,
  TimelineContainer,
} from "./Timeline.styles";

export const Timeline: React.FC<{
  events: {
    time: string;
    name: string;
    description: string;
  }[];
}> = ({ events }) => {
  const timelineEvents = events.map((event, index) => (
    <EventContainer isEven={index % 2 === 0} key={event.name}>
      <Time>{event.time}</Time>
      <Name>{event.name}</Name>
      <p>{event.description}</p>
    </EventContainer>
  ));
  return (
    <TimelineContainer>
      <h2>Tidsplan</h2>
      <Branch />
      {timelineEvents}
    </TimelineContainer>
  );
};
