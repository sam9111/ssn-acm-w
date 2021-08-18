// src/pages/Events.js
import React from "react";
import { Heading, useColorModeValue } from "@chakra-ui/react";
import { Tab, Tabs, TabList } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Box, Spacer, Link } from "@chakra-ui/react";
import { Link as ReachLink } from "gatsby";

function EventHeader() {
  const linkColor = useColorModeValue("black.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  return (
    <Box>
      <Heading textAlign="center" padding="16">
        Events
      </Heading>
      <Tabs variant="line">
        <TabList>
          {NAV_ITEMS.map((navItem, index) => (
            <Tab key={index}>
              <Box key={navItem.tab} px="20">
                <Link
                  as={ReachLink}
                  to={"/" + navItem.tab}
                  fontSize={"lg"}
                  fontWeight={600}
                  color={linkColor}
                  _hover={{
                    textDecoration: "none",
                    color: linkHoverColor,
                  }}
                >
                  {navItem.label}
                </Link>
                <Spacer />
              </Box>
            </Tab>
          ))}
        </TabList>
      </Tabs>
    </Box>
  );
}

const NAV_ITEMS = [
  {
    label: "Past",
    tab: "past",
  },
  {
    label: "2020-2021",
    tab: "events",
  },
  {
    label: "Upcoming",
    tab: "upcoming",
  },
];

export default EventHeader;
