import React from "react";
import {
  Box,
  Center,
  Avatar,
  SimpleGrid,
  Text,
  Heading,
  Stack,
} from "@chakra-ui/react";

function GridItem(props) {
  const { name, image, position } = props;
  return (
    <Center flexDirection="column" p={"auto"}>
      <Avatar size="2xl" src={image} />
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
        fontSize={{ base: "sm", sm: "md", lg: "lg" }}
      >
        {position}
      </Text>
    </Center>
  );
}

export default function TeamGrid(props) {
  const { team, faculty } = props;
  return (
    <Box>
      <Stack
        justify="center"
        align={"center"}
        spacing={{ base: "80px", md: "140px" }}
        direction={{ base: "column", md: "row" }}
      >
        {faculty.map((teamMember) => (
          <GridItem
            name={teamMember.name}
            image={teamMember.image.url}
            position={teamMember.position}
            key={teamMember.id}
          />
        ))}
      </Stack>
      <SimpleGrid
        py={{ base: 10, md: 14 }}
        minChildWidth="240px"
        spacing="80px"
      >
        {team.map((teamMember) => (
          <GridItem
            name={teamMember.name}
            image={teamMember.image.url}
            position={teamMember.position}
            key={teamMember.id}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}
