import React from "react";
import {
  Box,
  Center,
  Avatar,
  SimpleGrid,
  Text,
  Heading,
  Stack,
} from "@chakra-ui/react";
//import avatar from "../images/avatar.svg";

function GridItem(props) {
  return (
    <Center flexDirection="column" p={"auto"}>
      <Avatar size="2xl" />
      <Text
        fontWeight={"bold"}
        fontSize={{ base: "lg", sm: "xl", lg: "2xl" }}
        py={{ base: 3, md: 4 }}
      >
        Dr. K. Madheswari
      </Text>
      <Text
        fontWeight={"thin"}
        as={"span"}
        position={"relative"}
        fontSize={{ base: "sm", sm: "md", lg: "lg" }}
      >
        Our Team
      </Text>
    </Center>
  );
}
function TeamPage() {
  return (
    <Box>
      <Box py={{ base: 10, md: 14 }} align={"center"}>
        <Heading
          lineHeight={1.1}
          fontWeight={700}
          fontSize={{ base: "3xl", sm: "4xl", lg: "5xl" }}
        >
          <Text as={"span"} position={"relative"}>
            Our Team
          </Text>
        </Heading>
      </Box>
      <Stack
        justify="center"
        align={"center"}
        spacing={{ base: "80px", md: "140px" }}
        direction={{ base: "column", md: "row" }}
      >
        <GridItem />
        <GridItem />
      </Stack>
      <SimpleGrid
        py={{ base: 10, md: 14 }}
        minChildWidth="240px"
        spacing="80px"
      >
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
      </SimpleGrid>
    </Box>
  );
}

export default TeamPage;
