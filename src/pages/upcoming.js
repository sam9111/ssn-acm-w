import React, { Component } from "react";
import { Box, Button, Flex } from "@chakra-ui/react";
import EventHeader from "../components/EventHeader";

class Upcoming extends Component {
  render() {
    return (
      <box>
        <Flex>
          <EventHeader />
          This is future
        </Flex>
      </box>
    );
  }
}

export default Upcoming;
