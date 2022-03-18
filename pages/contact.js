import { Container } from "@chakra-ui/react";
import ContactCard from "../Components/ContactCard";
import Head from "next/head";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Sanzip Chhetri</title>
        <meta
          name="description"
          content="Contact Sanzip Chhetri using email address:sanjeeev@darshansolutions.com"
        ></meta>
        <link rel="icon" href="./SC.png" />
      </Head>
      <Container
        maxWidth={{
          base: "container.sm",
          md: "container.lg",
          xl: "1200",
        }}
      >
        <ContactCard />
      </Container>
    </>
  );
};

export default Contact;
