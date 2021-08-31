import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import careertalk from "../images/careertalk.png";
import CommonCard from "../components/CommonCard.js";

export default function CommonCardLayout() {
  return (
    <SimpleGrid spacing="40px" columns={{ base: 1, md: 2 }} width={"full"}>
      <CommonCard
        title=" Coding Essentials"
        imageImport={careertalk}
        body="Workshop on essentviewsdfjs  "
        link="Check it Out!"
        cardType="events"
      />
    </SimpleGrid>
  );
}
