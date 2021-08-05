// src/pages/Events.js
import React, { Component } from "react";
import { Heading, useColorModeValue, VStack } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Box, Button, Flex, Spacer, Link } from "@chakra-ui/react";

import EventHeader from "../components/EventHeader";
import { render } from "react-dom";
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
