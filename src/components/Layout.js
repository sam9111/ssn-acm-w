import React from "react";
import Header from "../components/Header.js";
import "@fontsource/josefin-sans";
import { Container, Box, useColorModeValue } from "@chakra-ui/react";

export default function Layout({ children }) {
  return (
    <Box>
      <Header />
      <Box bg={useColorModeValue("#F0FAFF", "gray.900")}>
        <Container maxW={"7xl"}>{children}</Container>
      </Box>
    </Box>
  );
}
