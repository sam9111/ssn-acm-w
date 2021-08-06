// src/pages/Events.js
import React, { Component } from "react";
import { Flex } from "@chakra-ui/react";

import EventHeader from "../components/EventHeader";
class Events extends Component {
  render() {
    return (
      <box>
        <Flex>
          <EventHeader />
          This is current year 2020-2021
        </Flex>
      </box>
    );
  }
}
export default Events;
