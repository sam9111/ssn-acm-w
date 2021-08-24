import React from "react";
import {
  Center,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Text,
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";
import b3 from "../images/b3.png";
import CommonCard from "../components/CommonCard.js";

export default function CommonCardLayout() {
  return (
    <SimpleGrid spacing="40px" columns={{ base: 1, md: 2 }} width={"full"}>
      <CommonCard
        title=" Coding Essentials"
        imageImport={b3}
        body="Workshop on essentviewsdfjs  "
        link="Check it Out!"
        cardType="events"
      />
      <CommonCard
        title=" Coding Essentials"
        imageImport={b3}
        body="Workshop on essentviewsdfjs  "
        link="Check it Out!"
        cardType="events"
      />
      <CommonCard
        title=" Coding Essentials"
        imageImport={b3}
        body="Workshop on essentviewsdfjs  "
        link="Check it Out!"
        cardType="events"
      />
      <CommonCard
        title=" Coding Essentials"
        imageImport={b3}
        body="Workshop on essentviewsdfjs  "
        link="Check it Out!"
        cardType="events"
      />
      <CommonCard
        title=" Coding Essentials"
        imageImport={b3}
        body="Workshop on essentviewsdfjs  "
        link="Check it Out!"
        cardType="events"
      />
    </SimpleGrid>
  );
}
