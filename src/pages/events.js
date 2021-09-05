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
  Center,
  Img,
} from "@chakra-ui/react";
import { graphql, StaticQuery } from "gatsby";

import CommonCardLayout from "../components/CommonCardLayout";
import Saly_13 from "../images/Saly-13.png";

function Events() {
  return (
    <StaticQuery
      query={graphql`
        query {
          allGraphCmsEvent(filter: { stage: { eq: PUBLISHED } }) {
            nodes {
              id
              title
              about
              when
              coverImage {
                url
              }
              timeCategory
              link
            }
          }
        }
      `}
      render={(data) => (
        <Box>
          <Box py={{ base: 10, md: 14 }} align={"center"}>
            <Heading
              lineHeight={1.1}
              fontWeight={700}
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
                    fontSize={{ base: "sm", md: "xl", lg: "2xl" }}
                    fontWeight="bold"
                  >
                    {new Date().getFullYear() +
                      " - " +
                      (new Date().getFullYear() + 1)}
                  </Text>
                </Tab>
                <Tab>
                  <Text
                    fontSize={{ base: "sm", md: "xl", lg: "2xl" }}
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
                      (event) => event.timeCategory == "Present"
                    )}
                  />
                </TabPanel>
                <TabPanel>
                  {data.allGraphCmsEvent.nodes.filter(
                    (event) => event.timeCategory == "Upcoming"
                  ).length > 0 ? (
                    <CommonCardLayout
                      events={data.allGraphCmsEvent.nodes.filter(
                        (event) => event.timeCategory == "Upcoming"
                      )}
                    />
                  ) : (
                    <Box>
                      <Box position={"relative"} overflow={"hidden"}>
                        <Img
                          alt={"Hero Image"}
                          fit={"cover"}
                          align={"center"}
                          src={Saly_13}
                        />
                      </Box>
                      <Heading
                        p={5}
                        lineHeight={2}
                        fontWeight={500}
                        fontSize={{ base: "xl", sm: "2xl", lg: "3xl" }}
                      >
                        <Text as={"span"} position={"relative"}>
                          We have many exciting events planned.
                          <br />
                          Do keep a lookout for updates on this page!
                        </Text>
                      </Heading>
                    </Box>
                  )}
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
