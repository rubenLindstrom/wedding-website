import type { NextPage } from "next";
import { createClient } from "next-sanity";
import Head from "next/head";
import Image from "next/image";
import { Navigation, Headline, ContactGrid } from "../components";
import styles from "../styles/Home.module.css";

const client = createClient({
  projectId: "mam500cy",
  apiVersion: "2022-09-12",
  useCdn: false,
  dataset: "production",
});

type PageProps = {
  links: {
    title: string;
    link: string;
  }[];
  contacts: {
    name: string;
    title: string;
    email: string;
    tel: string;
    description: string;
  }[];
};

const Home: NextPage<PageProps> = ({ links, contacts }) => {
  return (
    <div>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Contact information" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation
        links={links
          .map((link) => ({ title: link.title, link: link.link }))
          .reverse()}
        currentPage="contact"
      />
      <ContactGrid
        cards={contacts.map((contact) => ({
          name: contact.name,
          title: contact.title,
          email: contact?.email,
          tel: contact?.tel,
          description: contact?.description,
        }))}
      />
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const links = await client.fetch(`*[_type == "link"]`);
  const contacts = await client.fetch(`*[_type == "contact"]`);
  return {
    props: {
      links,
      contacts,
    },
    revalidate: 43200,
  };
};
