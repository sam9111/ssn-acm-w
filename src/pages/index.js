// src/pages/index.js
import React from "react";
import { Container, Stack, Box, Heading, Text, Img } from "@chakra-ui/react";
import Saly_19 from "../images/Saly-19.png";

import HomeCard from "../components/HomeCard.js";

function IndexPage() {
  return (
    <Box>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
      >
        <Box position={"relative"} overflow={"hidden"} w={[300, 400, 500]}>
          <Img
            alt={"Hero Image"}
            fit={"cover"}
            align={"center"}
            src={Saly_19}
          />
        </Box>

        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", lg: "6xl" }}
          >
            <Text as={"span"} position={"relative"}>
              SSN ACM-W Student Chapter
            </Text>
          </Heading>
          <Text
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "1xl", sm: "2xl", lg: "3xl" }}
            as={"span"}
            position={"relative"}
            _after={{
              content: "''",
              width: "full",
              height: "30%",
              position: "absolute",
              bottom: 1,
              left: 0,
            }}
          >
            Creating an inclusive environment for women in computing
          </Text>
          <HomeCard />
        </Stack>
      </Stack>
      <HomeCard />
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
      >
        <HomeCard />
        <HomeCard />
        <HomeCard />
      </Stack>
    </Box>
  );
}
export default IndexPage;
