import React, { Component } from "react";
//import "./Card.css";
import vvcoding from "../images/vvvcoding.svg";
import { chakra, Box, Flex, useColorModeValue, Link } from "@chakra-ui/react";
function Card({ title, imageImport, body, watch }) {
  return (
    <Flex
      className=".card-container"
      style={{ display: "flex", flexDirection: "row" }}
      bg={useColorModeValue("", "#000000")}
      //p={50}
      w="full"
      alignItems="center"
      justifyContent="left"
    >
      <Box
        bg={useColorModeValue("white", "#000000")}
        display={{ lg: "flex" }}
        shadow={{ lg: "lg" }}
        rounded={{ lg: "lg" }}
        width="580px"
        height="205px"
        borderRadius="lg"
      >
        <Box w={{ xl: "60%" }}>
          <img src={imageImport} alt="" />
        </Box>

        <Box py={11} px={6} maxW={{ base: "xl", lg: "5xl" }} w={{ lg: "50%" }}>
          <chakra.h1
            fontSize={{ base: "xl", md: "xl" }}
            color={useColorModeValue("#000000", "white")}
            fontWeight="extrabold"
          >
            {title}{" "}
          </chakra.h1>
          <chakra.h2 mt={2} color={useColorModeValue("#000000", "white")}>
            {body}
          </chakra.h2>

          <Box mt={9} px="10" boxSize="xl">
            <Link
              bgGradient="linear(90deg, #56C1FD 0%, #2C88BC 100%)"
              px={9}
              py={4}
              fontWeight="semibold"
              rounded="md"
            >
              {watch}
            </Link>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}
export default Card;
