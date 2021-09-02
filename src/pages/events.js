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
import { graphql, StaticQuery } from "gatsby";

import CommonCardLayout from "../components/CommonCardLayout";

function Events() {
  return (
    <StaticQuery
      query={graphql`
        query {
          allGraphCmsEvent(filter: { stage: { eq: PUBLISHED } }) {
            nodes {
              title
              about
              when
              coverImage {
                url
              }
              timeCategory
            }
          }
        }
      `}
      render={(data) => (
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
                  <CommonCardLayout
                    events={data.allGraphCmsEvent.nodes.filter(
                      (event) => event.timeCategory == "Past"
                    )}
                  />
                </TabPanel>
                <TabPanel>
                  <CommonCardLayout
                    events={data.allGraphCmsEvent.nodes.filter(
                      (event) => event.timeCategory == "Present"
                    )}
                  />
                </TabPanel>
                <TabPanel>
                  <CommonCardLayout
                    events={data.allGraphCmsEvent.nodes.filter(
                      (event) => event.timeCategory == "Upcoming"
                    )}
                  />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Box>
      )}
    />
  );
}

export default Events;
