import * as React from "react";
import { Img, Box, Center, Text, Container, Button } from "@chakra-ui/react";
import { Link } from "gatsby";
import Saly_17 from "../images/Saly-17.png";
function NotFoundPage() {
  return (
    <Box py={{ base: 10, md: 14 }} align={"center"}>
      <Center>
        <Text fontWeight={"extrabold"} fontSize={{ base: "10em", lg: "15em" }}>
          404
        </Text>
      </Center>
      <Center>
        <Text fontWeight={"bold"} fontSize={{ base: "3em", lg: "5em" }}>
          Oops!
        </Text>
      </Center>
      <Center p={5}>
        <Text
          fontWeight={"normal"}
          fontSize={{ base: "md", lg: "xl" }}
          align={"center"}
        >
          Hey there! Looks like you wandered and got lost!
        </Text>
      </Center>
      <Center>
        <Button size="lg" height="3em" colorScheme="#000000">
          <Link to="/">
            <Text fontSize={{ base: "lg", sm: "1em", lg: "2em" }}>
              Go Back!
            </Text>
          </Link>
        </Button>
      </Center>
      <Box position={"relative"} overflow={"hidden"} width={"full"}>
        <Img alt={"Wanderer"} fit={"full"} src={Saly_17} />
      </Box>
    </Box>
  );
}
export default NotFoundPage;
