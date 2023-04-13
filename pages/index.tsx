import type { NextPage } from "next";
import { createClient } from "next-sanity";
import Head from "next/head";
import { useEffect } from "react";
import {
  Navigation,
  Headline,
  Introduction,
  Timeline,
  Wishlist,
  Footer,
} from "../components";
import { fieldMask } from "../util";

type PageProps = {
  infoText: {
    title: string;
    text: string;
    type: string;
  }[];
  headLine: {
    headline: string;
  }[];
  links: {
    title: string;
    link: string;
  }[];
  events: {
    name: string;
    time: string;
    description: string;
  }[];
};

const client = createClient({
  projectId: "mam500cy",
  apiVersion: "2022-09-12",
  useCdn: false,
  dataset: "production",
});

const Home: NextPage<PageProps> = ({ infoText, headLine, links, events }) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const timelineEvents = events
    .slice()
    .sort((a, b) => (a.time > b.time ? 1 : -1));
  const dayBefore = timelineEvents.find((ev) =>
    ev.name.includes("Dagen innan")
  )!;
  timelineEvents.splice(timelineEvents.indexOf(dayBefore), 1);
  const lastEvent = timelineEvents.shift();
  timelineEvents.push(
    lastEvent as {
      name: string;
      description: string;
      time: string;
    }
  );
  timelineEvents.unshift(dayBefore);

  return (
    <div style={{ top: 0 }}>
      <Head>
        <title>Wedding Website</title>
        <meta name="description" content="Valeris and Annes wedding website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation links={links.slice().reverse()} currentPage="/" />
      <main>
        <Headline headLine={headLine[0].headline} />
        <Introduction
          title={infoText.find((info) => info.type === "Intro")!.title}
          introduction={infoText.find((info) => info.type === "Intro")!.text}
        />
        <Timeline events={timelineEvents} />
        <Wishlist
          title={infoText.find((info) => info.type === "Wishlist")!.title}
          text={infoText.find((info) => info.type === "Wishlist")!.text}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const headLine = await client.fetch(`*[_type == "headLine"]`);
  const infoText = await client.fetch(`*[_type == "infoText"]`);
  const links = await client.fetch(`*[_type == "link"]`);
  const events = await client.fetch(`*[_type == "event"]`);

  return {
    props: {
      headLine: fieldMask(headLine, ["headline"]),
      infoText: fieldMask(infoText, ["title", "text", "type"]),
      links: fieldMask(links, ["title", "link"]),
      events: fieldMask(events, ["name", "time", "description"]),
    },
    revalidate: 43200,
  };
};
