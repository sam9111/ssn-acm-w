import React, { Component } from "react";
import { chakra, Box, Flex, useColorModeValue, Link } from "@chakra-ui/react";
import vvcoding from "../images/vvvcoding.svg";
import EventHeader from "../components/EventHeader";
import { render } from "react-dom";
class Past extends Component {
  render() {
    return (
      <Flex p={30} w="full" alignItems="center" justifyContent="left">
        <EventHeader />

        <Box
          as="span"
          //  bg={useColorModeValue("white", "gray.900")}
          // mx={{ md: 3 }}
          display="flex"
          //maxW="700px"
          // shadow={{ md: "md" }}
          // rounded={{ md: "md" }}
          //padding="30"
          width="800px"
          height="305px"
          borderWidth="2px"
          borderRadius="lg"
        >
          <Box w={{ lg: "45%" }}>
            <Box
              h={{ base: 14, sm: "full" }}
              rounded={{ lg: "lg" }}
              bgSize="cover"
              bgImage={vvcoding}
              width={300}
              bgSize="contain"
            ></Box>
          </Box>

          <Box
            py={10}
            px={5}
            maxW={{ base: "xl", lg: "4xl" }}
            w={{ lg: "50%" }}
          >
            <chakra.h2
              fontSize={{ base: "xl", md: "3xl" }}
              // color={useColorModeValue("gray.800", "white")}
              fontWeight="bold"
            >
              Workshop on essentials for Coding Interview{" "}
              <chakra.span
              // color={useColorModeValue("brand.600", "brand.400")}
              ></chakra.span>
            </chakra.h2>
            {/* </Box><chakra.p mt={15} color={useColorModeValue("gray.600", "gray.400")}> */}
            <chakra.p mt={15}>By Vrishin Vigneshwar -SDE @Motorq</chakra.p>

            <Box mt={10} px={59} alignItems="baseline">
              <Link
                bgGradient="linear(90deg, #56C1FD 0%, #2C88BC 100%)"
                px={5}
                py={3}
                fontWeight="semibold"
                rounded="lg"
                _hover={{ bg: "gray.800" }}
              >
                Watch Now
              </Link>
            </Box>
          </Box>
        </Box>
      </Flex>
    );
  }
}
export default Past;
