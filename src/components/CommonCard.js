import React from "react";
import {
  Stack,
  Box,
  Flex,
  useColorModeValue,
  Link,
  Img,
  Heading,
  Text,
  Center,
  Container,
  Button,
  LinkBox,
  Spacer,
  Wrap,
} from "@chakra-ui/react";

export default function CommonCard({
  title,
  imageImport,
  body,
  link,
  cardType,
}) {
  return (
    <Flex justify={"center"} align={"center"} position={"relative"} w={"full"}>
      <Box
        bg={useColorModeValue("white", "gray.800")}
        position={"relative"}
        borderRadius={"3xl"}
        boxShadow={"lg"}
        width={"full"}
        overflow={"hidden"}
      >
        <Flex
          direction={{ base: "column", md: "row", lg: "xl" }}
          align={"stretch"}
        >
          <Box position={"relative"} overflow={"hidden"} minWidth="sm">
            <Img src={imageImport} alt={title} fit={"fill"} />
          </Box>

          <Stack
            spacing={{ base: 4, md: 5 }}
            maxWidth="sm"
            p={5}
            align={"stretch"}
          >
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "xl", sm: "2xl", lg: "3xl" }}
            >
              {title}
            </Heading>
            <Text
              fontSize={{ base: "sm", sm: "md", lg: "lg" }}
              fontWeight={400}
            >
              {body}
            </Text>

            <Box align={"center"}>
              <Button as="a" href="https://github.com">
                {cardType == "blog" ? (
                  <Text>Check it out!</Text>
                ) : (
                  <Text>Watch Now!</Text>
                )}
              </Button>
            </Box>
          </Stack>
        </Flex>
      </Box>
    </Flex>
  );
}
