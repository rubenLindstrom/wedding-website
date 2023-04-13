import type { NextPage } from "next";
import { createClient } from "next-sanity";
import Head from "next/head";
import { Navigation, ContactGrid, Footer } from "../components";
import { fieldMask } from "../util";

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
      <Navigation links={links.slice().reverse()} currentPage="contact" />
      <ContactGrid cards={contacts} />
      <Footer />
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const links = await client.fetch(`*[_type == "link"]`);
  const contacts = await client.fetch(`*[_type == "contact"]`);
  return {
    props: {
      links: fieldMask(links, ["title", "link"]),
      contacts: fieldMask(contacts, [
        "name",
        "title",
        "email",
        "tel",
        "description",
      ]),
    },
    revalidate: 43200,
  };
};
