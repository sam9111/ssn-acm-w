import React from "react";
import Header from "../components/Header.js";
import "@fontsource/josefin-sans";
import { Box, Center, useColorModeValue } from "@chakra-ui/react";

export default function Layout({ children }) {
  return (
    <Box>
      <Header />
      <Box bg={useColorModeValue("#F0FAFF", "gray.800")}>{children}</Box>
    </Box>
  );
}
