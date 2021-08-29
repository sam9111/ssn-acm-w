import React from "react";
import {
  Stack,
  Box,
  Flex,
  useColorModeValue,
  useColorMode,
  Img,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";

export default function CommonCard({
  title,
  imageImport,
  body,
  link,
  cardType,
}) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex justify={"center"} align={"center"} position={"relative"} w={"full"}>
      <Box
        bg={useColorModeValue("white", "gray.800")}
        position={"relative"}
        borderRadius={"3xl"}
        boxShadow={colorMode === "light" ? "2xl" : "dark-lg"}
        width={"full"}
        overflow={"hidden"}
      >
        <Flex
          direction={{ base: "column", md: "row", lg: "xl" }}
          align={"flex-start"}
        >
          <Img src={imageImport} alt={title} fit={"contain"} boxSize="xs" />

          <Stack
            spacing={{ base: 4, md: 5 }}
            w={{ base: "xs", md: "sm" }}
            p={5}
            align={"flex-start"}
          >
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "md", sm: "lg", lg: "xl" }}
            >
              {title}
            </Heading>
            <Text
              fontSize={{ base: "sm", sm: "md", lg: "lg" }}
              fontWeight={400}
            >
              {body}
            </Text>

            <Box align={"flex-end"}>
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
