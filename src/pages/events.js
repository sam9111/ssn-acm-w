// src/pages/Events.js
// src/pages/Events.js
import React from "react";
import { Heading, useColorModeValue } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Box, Text } from "@chakra-ui/react";

function Events() {
  return (
    <Box>
      <Heading textAlign="center" padding="16">
        Events
      </Heading>
      <Tabs variant="line" size="lg">
        <TabList>
          <Tab>
            <Text fontSize="2xl" fontWeight="bold">
              Past
            </Text>
          </Tab>
          <Tab>
            <Text fontSize="2xl" fontWeight="bold">
              2020-2021
            </Text>
          </Tab>
          <Tab>
            <Text fontSize="2xl" fontWeight="bold">
              Upcoming
            </Text>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>Past</p>
          </TabPanel>
          <TabPanel>
            <p>Present</p>
          </TabPanel>
          <TabPanel>
            <p>Upcoming</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default Events;
