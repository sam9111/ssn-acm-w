import React from "react";
import { Container, Stack, Box, Heading, Text, Img } from "@chakra-ui/react";
import Saly_24 from "../images/Saly-24.png";
import b3 from "../images/b3.png";
import b2 from "../images/b2 1.png";
import b1 from "../images/b1.png";

import Card from "../components/Card";

function BlogPage() {
  return (
    <Box>
      <Stack
        align={"right"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
      >
        <Box
          position={"relative"}
          overflow={"hidden"}
          height={"569"}
          width={"569"}
        >
          <Img
            alt={"Hero Image"}
            fit={"cover"}
            align={"center"}
            src={Saly_24}
            bgSize={"lg"}
            height={"569"}
            width={"569"}
          />
        </Box>
        <Stack flex={1} spacing={{ base: 4, md: 10 }} height={"xl"}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "2xl", lg: "6xl" }}
            align={"center"}
          >
            <Text>Blog</Text>
          </Heading>
          <br />
          <div className="Current">
            <Card
              title=" Coding Essentials"
              imageImport={b3}
              body="Workshop on essentials for coding interviews"
              watch="Check it Out!"
            />
            <br></br>
            <Card
              title=" Career Paths"
              imageImport={b2}
              body="What next after graduation?"
              watch="Check it Out!"
            />
            <br></br>
            <Card
              title=" Successful Entreprenuer"
              imageImport={b1}
              body="What it takes to be a Successful Entrepreneur?"
              watch="Check it Out!"
            />
          </div>
        </Stack>
      </Stack>
    </Box>
  );
}

export default BlogPage;
