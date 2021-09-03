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
  Center,
} from "@chakra-ui/react";

export default function CommonCard({ title, image, body, link, cardType }) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
        borderRadius={"3xl"}
        boxShadow={colorMode === "light" ? "2xl" : "dark-lg"}
      >
        <Box rounded={"lg"} mt={-12} pos={"relative"} height={"230px"}>
          <Img
            rounded={"lg"}
            height={230}
            width={282}
            objectFit={"cover"}
            src={image}
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={800}>
            {title}
          </Heading>
          <Stack direction={"row"} align={"center"}>
            <Text fontWeight={500} fontSize={"xl"}>
              {body}
            </Text>
          </Stack>

          {link ? (
            <Box p={5}>
              <Button as="a" href={link}>
                {cardType == "blog" ? (
                  <Text>Check it out!</Text>
                ) : (
                  <Text>Watch Now!</Text>
                )}
              </Button>
            </Box>
          ) : null}
        </Stack>
      </Box>
    </Center>
  );
}
