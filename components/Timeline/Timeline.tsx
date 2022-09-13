import React from "react";
import { EventContainer, Time, TimelineContainer } from "./Timeline.styles";

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
      <span>{event.name}</span>
      <p>{event.description}</p>
    </EventContainer>
  ));
  return <TimelineContainer>{timelineEvents}</TimelineContainer>;
};
