// src/pages/index.js
import React from "react";
import { Box, Button } from "@chakra-ui/react";
import "@fontsource/josefin-sans";

function IndexPage() {
  return (
    <Box fontWeight="bold" w={[300, 400, 500]}>
      This is a box
      <Button>Click me</Button>
    </Box>
  );
}

export default IndexPage;
