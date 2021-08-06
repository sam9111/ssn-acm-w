import React from "react";
import { Box, Button } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react"

function TeamPage() {
  return <Box>     
    <Box w="338px" h="72px" left="551px" top="164xl" bgGradient="linear(to-t, green.200, pink.500)">
    <Text fontSize="72px" Align="center" fontWeight="bold" lineHeight="72px" > Our Team</Text>  
    </Box>

    <Box w="255px" h="29px" mr="429px" mt="432px" bgGradient="linear(to-t, green.200, pink.500)">
    <Text fontSize="36px" Align="center" fontWeight="normal" lineHeight="36px"> Dr. Chitra Babu</Text>
    </Box>

    <Box w="297px" h="27px" ml="727px" mt="434xl" bgGradient="linear(to-t, green.200, pink.500)">
    <Text fontSize="36px" Align="center" fontWeight="normal" lineHeight="36px"> Dr. K. Madheswari</Text>
    </Box>
   </Box>;
}

export default TeamPage;
