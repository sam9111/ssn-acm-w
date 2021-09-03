import React from "react";
import { SimpleGrid } from "@chakra-ui/react";

import CommonCard from "../components/CommonCard.js";

export default function CommonCardLayout(props) {
  const { events } = props;
  return (
    <SimpleGrid spacing="40px" columns={{ base: 1, md: 3 }} width={"full"}>
      {events.map((event) => (
        <CommonCard
          title={event.title}
          image={event.coverImage.url}
          body={event.about}
          link={event.link}
          cardType="event"
        />
      ))}
    </SimpleGrid>
  );
}
