import React from "react";
import { SimpleGrid, useProps } from "@chakra-ui/react";
import careertalk from "../images/careertalk.png";
import CommonCard from "../components/CommonCard.js";

export default function CommonCardLayout(props) {
  // const entries = Object.entries(props);
  const value = Object.values(props);
  console.log(value);
  const temp = value[0];

  return (
    <SimpleGrid spacing="40px" columns={{ base: 1, md: 2 }} width={"full"}>
<<<<<<< Updated upstream
      <CommonCard
        title=" Coding Essentials"
        imageImport={careertalk}
        body="Workshop on essentviewsdfjs  "
        link="Check it Out!"
        cardType="events"
      />
      <CommonCard
        title=" Coding Essentials"
        imageImport={careertalk}
        body="Workshop on essentviewsdfjs  "
        link="Check it Out!"
        cardType="events"
      />
      <CommonCard
        title=" Coding Essentials"
        imageImport={careertalk}
        body="Workshop on essentviewsdfjs  "
        link="Check it Out!"
        cardType="events"
      />
      <CommonCard
        title=" Coding Essentials"
        imageImport={careertalk}
        body="Workshop on essentviewsdfjs  "
        link="Check it Out!"
        cardType="events"
      />
      <CommonCard
        title=" Coding Essentials"
        imageImport={careertalk}
        body="Workshop on essentviewsdfjs  "
        link="Check it Out!"
        cardType="events"
      />
=======
      {temp.map((eventElement) => (
        <CommonCard
          title={eventElement.title}
          imageImport={careertalk}
          body={eventElement.about}
          link="www.google.com"
          cardType="event"
        />
      ))}
>>>>>>> Stashed changes
    </SimpleGrid>
  );
}
