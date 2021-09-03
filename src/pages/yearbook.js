import React, { useState } from "react";
import {
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Text,
  Select,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

import CommonCardLayout from "../components/CommonCardLayout";
import { graphql, StaticQuery } from "gatsby";

import TeamGrid from "../components/TeamGrid";

function generate_years() {
  const years = [];
  const yearNow = new Date().getFullYear();
  for (var i = 0; i < yearNow - 2018 + 1; i++) {
    years.push(yearNow - i);
  }
  return years;
}
const YEARS = generate_years();

function YearBookPage() {
  const [year, setYear] = useState(YEARS[0]);
  console.log(year);
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
              link
            }
          }
        }
      `}
      render={(data) => (
        <Box py={{ base: 10, md: 14 }} align={"center"}>
          <Stack align={"center"} spacing={{ base: 8, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "3xl", sm: "4xl", lg: "5xl" }}
            >
              <Text as={"span"} position={"relative"}>
                Yearbook
              </Text>
            </Heading>
            <Box
              bg={useColorModeValue("white", "gray.800")}
              fontSize="xl"
              borderRadius={"3xl"}
            >
              <Select
                placeholder="Select option"
                size="lg"
                borderRadius={"3xl"}
                value={year}
                onChange={(e) => setYear(e.target.value)}
              >
                {YEARS.map((year) => (
                  <option value={year}>{year + "-" + (year + 1)}</option>
                ))}
              </Select>
            </Box>
            <Box boxShadow="md" borderRadius={"3xl"}>
              <Tabs
                variant="enclosed"
                align="center"
                isFitted
                width={"full"}
                borderRadius={"3xl"}
              >
                <TabList>
                  <Tab>
                    <Text
                      fontSize={{ base: "lg", sm: "xl", lg: "2xl" }}
                      fontWeight="bold"
                    >
                      Events
                    </Text>
                  </Tab>
                  <Tab>
                    <Text
                      fontSize={{ base: "lg", sm: "xl", lg: "2xl" }}
                      fontWeight="bold"
                    >
                      Team
                    </Text>
                  </Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    {" "}
                    <CommonCardLayout
                      events={data.allGraphCmsEvent.nodes.filter((event) => {
                        var d = new Date(event.when);
                        var y = d.getUTCFullYear();
                        d.getUTCMonth() < 6 ? y-- : y;
                        return y == year;
                      })}
                    />
                  </TabPanel>
                  <TabPanel>
                    <TeamGrid team={[]} faculty={[]} />
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
          </Stack>
        </Box>
      )}
    />
  );
}

export default YearBookPage;
