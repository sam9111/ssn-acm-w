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

import TeamGrid from "../components/TeamGrid";


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
      <TeamGrid team={currentTeamMembers.nodes} />
    </Box>
  );
}

export default TeamPage;
