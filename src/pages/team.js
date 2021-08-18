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
import { graphql, useStaticQuery } from "gatsby";

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
function TeamPage() {
  const { currentTeamMembers } = useStaticQuery(graphql`
    {
      currentTeamMembers: allGraphCmsTeamMember(
        filter: { currentMember: { eq: true } }
      ) {
        nodes {
          name
          position
          image {
            url
            height
            width
          }
        }
      }
    }
  `);
  return (
    <Box>
      <Box py={{ base: 10, md: 14 }} align={"center"}>
        <Heading
          lineHeight={1.1}
          fontWeight={700}
          fontSize={{ base: "3xl", sm: "4xl", lg: "5xl" }}
        >
          <Text as={"span"} position={"relative"}>
            Our Team
          </Text>
        </Heading>
      </Box>
      <Stack
        justify="center"
        align={"center"}
        spacing={{ base: "80px", md: "140px" }}
        direction={{ base: "column", md: "row" }}
      >
        <GridItem />
        <GridItem />
      </Stack>
      <SimpleGrid
        py={{ base: 10, md: 14 }}
        minChildWidth="240px"
        spacing="80px"
      >
        {currentTeamMembers.nodes.map((currentTeamMember) => (
          <GridItem
            name={currentTeamMember.name}
            image={currentTeamMember.image.url}
            position={currentTeamMember.position}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default TeamPage;
