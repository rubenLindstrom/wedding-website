import type { NextPage } from "next";
import { createClient } from "next-sanity";
import Head from "next/head";
import Image from "next/image";
import { Navigation, Headline, Introduction, Timeline } from "../components";
import styles from "../styles/Home.module.css";

type PageProps = {
  infoText: {
    title: string;
    text: string;
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
  const timelineEvents = events
    .map((event) => ({
      name: event.name,
      description: event.description,
      time: event.time,
    }))
    .sort((a, b) => (a.time > b.time ? 1 : -1));
  const lastEvent = timelineEvents.shift();
  timelineEvents.push(
    lastEvent as {
      name: string;
      description: string;
      time: string;
    }
  );

  return (
    <div>
      <Head>
        <title>Wedding Website</title>
        <meta name="description" content="Valeris and Annes wedding website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation
        links={links
          .map((link) => ({ title: link.title, link: link.link }))
          .reverse()}
      />
      <Headline headLine={headLine[0].headline} />
      <Introduction title={infoText[0].title} introduction={infoText[0].text} />
      <Timeline events={timelineEvents} />
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
      headLine,
      infoText,
      links,
      events,
    },
    revalidate: 43200,
  };
};
