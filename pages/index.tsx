import type { NextPage } from "next";
import { createClient } from "next-sanity";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import {
  Navigation,
  Headline,
  Introduction,
  Timeline,
  Wishlist,
  Footer,
} from "../components";
import styles from "../styles/Home.module.css";

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
        currentPage="/"
      />
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
      headLine,
      infoText,
      links,
      events,
    },
    revalidate: 43200,
  };
};
