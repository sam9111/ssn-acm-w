import React from "react";
import Header from "../components/Header.js";
import "@fontsource/josefin-sans";
import { Box, Center } from "@chakra-ui/react";

export default function Layout({ children }) {
  return (
    <Box>
      <Header />
      <Center bg={"#F0FAFF"}>{children}</Center>
    </Box>
  );
}
