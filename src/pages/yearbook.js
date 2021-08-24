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
  Select,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

import CommonCardLayout from "../components/CommonCardLayout";

function YearBookPage() {
  return (
    <Box>
      <Stack
        py={{ base: 10, md: 14 }}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
      >
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
          w="xs"
          bg={useColorModeValue("white", "gray.800")}
          fontSize="xl"
          borderRadius={"3xl"}
        >
          <Select placeholder="Select option" size="lg" borderRadius={"3xl"}>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </Box>
        <Box
          bg={useColorModeValue("white", "gray.800")}
          boxShadow="2xl"
          borderRadius={"3xl"}
        >
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
                <CommonCardLayout />
              </TabPanel>
              <TabPanel></TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Stack>
    </Box>
  );
}

export default YearBookPage;
