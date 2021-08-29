import React from "react";
import { Box, Text, Heading } from "@chakra-ui/react";
import { graphql, StaticQuery } from "gatsby";

import TeamGrid from "../components/TeamGrid";

function TeamPage() {
  return (
    <StaticQuery
      query={graphql`
        query {
          allGraphCmsTeamMember(filter: { currentMember: { eq: true } }) {
            nodes {
              name
              position
              image {
                url
              }
            }
          }
          allGraphCmsFacultyMember(filter: { currentMember: { eq: true } }) {
            nodes {
              name
              position
              image {
                url
              }
            }
          }
        }
      `}
      render={(data) => (
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
          <TeamGrid
            team={data.allGraphCmsTeamMember.nodes}
            faculty={data.allGraphCmsFacultyMember.nodes}
          />
        </Box>
      )}
    />
  );
}
export default TeamPage;
