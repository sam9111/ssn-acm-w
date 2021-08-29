// src/pages/index.js
import React from "react";
import {
  Stack,
  Box,
  Heading,
  Text,
  Img,
  Flex,
  Center,
  useColorModeValue,
} from "@chakra-ui/react";
import Saly_19 from "../images/Saly-19.png";
import { graphql, StaticQuery } from "gatsby";
function HomeCard({ text, heading }) {
  return (
    <Flex
      flex={1}
      justify={"center"}
      align={"center"}
      position={"relative"}
      w={"full"}
      direction={"column"}
    >
      {heading ? (
        <Heading
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: "2xl", sm: "3xl", lg: "4xl" }}
          py={5}
        >
          <Text as={"span"} position={"relative"}>
            {heading}
          </Text>
        </Heading>
      ) : null}
      <Center
        bg={useColorModeValue("white", "gray.800")}
        position={"relative"}
        borderRadius={"3xl"}
        boxShadow={"2xl"}
        width={"full"}
        overflow={"hidden"}
        p={10}
      >
        <Text
          lineHeight={1.1}
          fontWeight={300}
          fontSize={{ base: "md", sm: "lg", lg: "xl" }}
          as={"span"}
          position={"relative"}
        >
          {text}
        </Text>
      </Center>
    </Flex>
  );
}

function IndexPage() {
  return (
    <StaticQuery
      query={graphql`
        query {
          graphCmsAbout {
            about
            chapter_name
            mission
            tagline
            vision
          }
        }
      `}
      render={(data) => (
        <Box>
          <Stack
            align={"center"}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 10, md: 14 }}
            direction={{ base: "column", md: "row" }}
          >
            <Box position={"relative"} overflow={"hidden"}>
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
                fontSize={{ base: "3xl", sm: "5xl", lg: "7xl" }}
              >
                <Text as={"span"} position={"relative"}>
                  {data.graphCmsAbout.chapter_name}
                </Text>
              </Heading>
              <Text
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "2xl", sm: "3xl", lg: "4xl" }}
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
                {data.graphCmsAbout.tagline}
              </Text>
              <HomeCard text={data.graphCmsAbout.about} />
            </Stack>
          </Stack>

          <Stack
            align={"center"}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 5, md: 7 }}
            direction={{ base: "column", md: "row" }}
          >
            <HomeCard text={data.graphCmsAbout.mission} heading="Mission" />
            <HomeCard text={data.graphCmsAbout.vision} heading="Vision" />
          </Stack>
        </Box>
      )}
    />
  );
}
export default IndexPage;
