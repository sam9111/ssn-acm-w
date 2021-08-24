import React from "react";
import { Stack, Box, Heading, Text, Img } from "@chakra-ui/react";
import Saly_24 from "../images/Saly-24.png";
import b3 from "../images/b3.png";

import CommonCard from "../components/CommonCard.js";

function BlogPage() {
  return (
    <Box>
      <Stack
        align={"right"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
      >
        <Box>
          <Img
            alt={"Hero Image"}
            fit={"cover"}
            align={"center"}
            src={Saly_24}
          />
        </Box>

        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "5xl" }}
            align={"center"}
          >
            <Text as={"span"} position={"relative"}>
              Blog
            </Text>
          </Heading>
          <Stack spacing={{ base: 4, md: 5 }}>
            <CommonCard
              title=" Coding Essentials"
              imageImport={b3}
              body="Workshop on essentihthth thytht  rrtrt als for coding inte rviewsdf jsfbiwsfiiefnw  ofnwofwfwnfowfwonfnwsfnownfowg"
              link="Check it Out!"
              cardType="blog"
            />
            <CommonCard
              title=" Coding Essentials"
              imageImport={b3}
              body="Workshop on essentviewsdfjs  "
              link="Check it Out!"
              cardType="blog"
            />
            <CommonCard
              title=" Coding Essentials"
              imageImport={b3}
              body="Workshop on essentialsw sdfjsfbi wsfiiefn wnfowfwon fnwsfnownfowg"
              link="Check it Out!"
              cardType="blog"
            />
            <CommonCard
              title=" Coding Essentials"
              imageImport={b3}
              body="Wr coding   wsfiiefnwof nwofwfwnfow fwonfnw sfnownfowg"
              link="Check it Out!"
              cardType="blog"
            />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}

export default BlogPage;
