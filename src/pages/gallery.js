import React from "react";
import { Box, Button } from "@chakra-ui/react";
import "@fontsource/josefin-sans";

function GalleryPage() {
  return (
    <Box fontWeight="bold" w={[300, 400, 500]}>
      gallery
      <Button>Click me</Button>
    </Box>
  );
}

export default GalleryPage;
