import React from "react";
import {
  Box,
  Center,
  Avatar,
  SimpleGrid,
  Text,
  Heading,
  Stack,
  Link,
} from "@chakra-ui/react";
import { FaLinkedin } from "react-icons/fa";
function GridItem(props) {
  const { name, image, position, link } = props;
  return (
    <Box placeItems={"center"} align={"center"} p={5}>
      <Center flexDirection="column" p={"auto"}>
        <Avatar size="2xl" src={image} />
        {link ? (
          <Link href={link} isExternal pt={5}>
            <FaLinkedin size="20px" />
          </Link>
        ) : null}
        <Text
          fontWeight={"bold"}
          fontSize={{ base: "lg", sm: "xl", lg: "2xl" }}
          py={{ base: 3, md: 4 }}
        >
          {name}
        </Text>
        <Text
          fontWeight={"thin"}
          as={"span"}
          position={"relative"}
          fontSize={{ base: "md", sm: "lg", lg: "xl" }}
        >
          {position}
        </Text>
      </Center>
    </Box>
  );
}

export default function TeamGrid(props) {
  const { team, faculty } = props;
  return (
    <Box width={"full"}>
      <Stack
        justify="center"
        align={"center"}
        spacing={{ base: 6, md: 20 }}
        direction={{ base: "column", md: "row" }}
      >
        {faculty.map((teamMember) => (
          <GridItem
            name={teamMember.name}
            image={teamMember.image}
            position={teamMember.position}
            key={teamMember.name}
            link={teamMember.linkedin}
          />
        ))}
      </Stack>
      <SimpleGrid py={10} columns={{ base: 1, md: 4 }}>
        {team.map((teamMember) => (
          <GridItem
            name={teamMember.name}
            image={teamMember.image}
            position={teamMember.position}
            key={teamMember.id}
            link={teamMember.linkedin}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}
