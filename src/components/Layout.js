import React from "react";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import "@fontsource/josefin-sans";
import { Container, Box, useColorModeValue } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
export default function Layout({ children }) {
  return (
    <Box>
      <Helmet>
        <meta charSet="utf-8" />
        <title>SSN ACM-W</title>
      </Helmet>
      <Header />
      <Box bg={useColorModeValue("#e3f4fc", "gray.900")}>
        <Container maxW={"7xl"}>{children}</Container>
      </Box>
      <Footer />
    </Box>
  );
}
