// src/pages/Events.js
import React from "react";
import {
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Text,
  Flex,
} from "@chakra-ui/react";

import CommonCardLayout from "../components/CommonCardLayout";

function Events() {
  return (
    <Box>
      <Box py={{ base: 10, md: 14 }} align={"center"}>
        <Heading
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", lg: "5xl" }}
        >
          <Text as={"span"} position={"relative"}>
            Events
          </Text>
        </Heading>
        <Tabs variant="line" align="center" isFitted width={"full"} p={10}>
          <TabList>
            <Tab>
              <Text
                fontSize={{ base: "lg", sm: "xl", lg: "2xl" }}
                fontWeight="bold"
              >
                Past
              </Text>
            </Tab>
            <Tab>
              <Text
                fontSize={{ base: "lg", sm: "xl", lg: "2xl" }}
                fontWeight="bold"
              >
                {new Date().getFullYear() +
                  " - " +
                  (new Date().getFullYear() + 1)}
              </Text>
            </Tab>
            <Tab>
              <Text
                fontSize={{ base: "lg", sm: "xl", lg: "2xl" }}
                fontWeight="bold"
              >
                Upcoming
              </Text>
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <CommonCardLayout />
            </TabPanel>
            <TabPanel>
              <CommonCardLayout />
            </TabPanel>
            <TabPanel>
              <CommonCardLayout />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
}

export default Events;
