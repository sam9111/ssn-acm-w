import React from "react";
import { Box, Text, Heading } from "@chakra-ui/react";
import { teamdata } from "../utils/team";
import TeamGrid from "../components/TeamGrid";

function TeamPage() {
  console.log(teamdata);
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
      <TeamGrid team={teamdata.students} faculty={teamdata.faculty} />
    </Box>
  );
}
export default TeamPage;
