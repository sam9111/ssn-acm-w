// src/pages/Events.js
import React from "react";
import { Center, Heading } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Box, Text } from "@chakra-ui/react";
function Events() {
  return (
    <Box>
      <Heading textAlign="center" padding="16">
        Events
      </Heading>
      <Center>
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
          <br></br>
          <TabPanels>
            <TabPanel>
              <p style={{ align: "left" }}>Past</p>
            </TabPanel>
            <TabPanel>
              <div>
              </div>
            </TabPanel>
            <TabPanel>
              <p>Upcoming</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Center>
    </Box>
  );
}

export default Events;
