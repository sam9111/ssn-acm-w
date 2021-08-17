import React from "react";
import {
  Box,
  Flex,
  Spacer,
  Center,
  Wrap,
  WrapItem,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
//import avatar from "../images/avatar.svg";

function TeamPage() {
  return (
    <Box>
      <Flex>
        <Center w="338px" h="72px" ml="740px" mt="40px">
          <Text fontSize="72px" fontWeight="bold" lineHeight="72px">
            {" "}
            Our Team
          </Text>
        </Center>
      </Flex>
      <Wrap>
        <WrapItem>
          <Avatar ml="492px" mt="49px" w="130px" h="130px" />
        </WrapItem>
        <WrapItem>
          <Avatar ml="600px" mt="49px" w="130px" h="130px" />
        </WrapItem>
      </Wrap>
      <Flex>
        <Box ml="429px" w="255px" h="29px" mt="17px">
          <Text fontSize="36px" lineHeight="36px">
            Dr. Chitra Babu
          </Text>
        </Box>
        <Spacer />
        <Box mr="417px" w="297px" h="27px" mt="17px">
          <Text fontSize="36px" lineHeight="36px">
            Dr. K. Madheswari
          </Text>
        </Box>
      </Flex>
      <Flex>
        <Box ml="416px" w="290px" h="27px" mt="19px">
          <Text
            fontSize="24px"
            lineHeight="24px"
            color={useColorModeValue("#3F3F3F", "#909090")}
          >
            Head of Department, CSE
          </Text>
        </Box>
        <Spacer />
        <Box mr="355px" w="281px" h="27px" mt="19px">
          <Text
            fontSize="24px"
            lineHeight="24px"
            color={useColorModeValue("#3F3F3F", "#909090")}
          >
            Faculty Sponsor
          </Text>
        </Box>
      </Flex>
      <Wrap>
        <WrapItem>
          <Avatar ml="165px" mt="84px" w="130px" h="130px" />
        </WrapItem>
        <WrapItem>
          <Avatar ml="320px" mt="84px" w="130px" h="130px" />
        </WrapItem>
        <WrapItem>
          <Avatar ml="370px" mt="84px" w="130px" h="130px" />
        </WrapItem>
        <WrapItem>
          <Avatar ml="260px" mt="84px" w="130px" h="130px" />
        </WrapItem>
      </Wrap>
      <Flex>
        <Box ml="89px" w="298px" h="27px" mt="19px">
          <Text fontSize="36px" lineHeight="36px">
            A Likhitha Verma
          </Text>
        </Box>
        <Spacer />
        <Box ml="53px" w="234px" h="27px" mt="19px">
          <Text fontSize="36px" lineHeight="36px">
            Samyuktha
          </Text>
        </Box>
        <Spacer />
        <Box ml="88px" w="269px" h="27px" mt="19px">
          <Text fontSize="36px" lineHeight="36px">
            Gunaanica Arun
          </Text>
        </Box>
        <Spacer />
        <Box mr="133px" w="201px" h="27px" mt="19px">
          <Text fontSize="36px" lineHeight="36px">
            Mrithula KL
          </Text>
        </Box>
      </Flex>

      <Flex>
        <Box ml="129px" w="202px" h="27px" mt="19px">
          <Text
            fontSize="24px"
            lineHeight="24px"
            color={useColorModeValue("#3F3F3F", "#909090")}
          >
            Chairperson
          </Text>
        </Box>
        <Spacer />
        <Box ml="-30px" w="234px" h="27px" mt="12px">
          <Text fontSize="36px" lineHeight="36px">
            Ganeshkumar
          </Text>
        </Box>
        <Spacer />
        <Box ml="75px" w="104px" h="27px" mt="19px">
          <Text
            fontSize="24px"
            lineHeight="24px"
            color={useColorModeValue("#3F3F3F", "#909090")}
          >
            Secretary
          </Text>
        </Box>
        <Spacer />
        <Box mr="120px" w="200px" h="27px" mt="19px">
          <Text
            fontSize="24px"
            lineHeight="24px"
            color={useColorModeValue("#3F3F3F", "#909090")}
          >
            Joint Secretary
          </Text>
        </Box>
      </Flex>

      <Flex>
        <Box ml="600px" w="202px" h="27px" mt="12px">
          <Text
            fontSize="24px"
            lineHeight="24px"
            color={useColorModeValue("#3F3F3F", "#909090")}
          >
            Vice Chairperson
          </Text>
        </Box>
      </Flex>
      <Wrap>
        <WrapItem>
          <Avatar ml="165px" mt="87px" w="130px" h="130px" />
        </WrapItem>
        <WrapItem>
          <Avatar ml="320px" mt="87px" w="130px" h="130px" />
        </WrapItem>
        <WrapItem>
          <Avatar ml="370px" mt="87px" w="130px" h="130px" />
        </WrapItem>
        <WrapItem>
          <Avatar ml="260px" mt="87px" w="130px" h="130px" />
        </WrapItem>
      </Wrap>
      <Flex>
        <Box ml="119px" w="221px" h="27px" mt="19px">
          <Text fontSize="36px" lineHeight="36px">
            Kathiyayini S
          </Text>
        </Box>
        <Spacer />
        <Box ml="100px" w="178px" h="27px" mt="19px">
          <Text fontSize="36px" lineHeight="36px">
            Sushaanth
          </Text>
        </Box>
        <Spacer />
        <Box ml="115px" w="273px" h="27px" mt="19px">
          <Text fontSize="36px" lineHeight="36px">
            Kanyalakshmi G
          </Text>
        </Box>
        <Spacer />
        <Box mr="80px" w="225px" h="27px" mt="19px">
          <Text fontSize="36px" lineHeight="36px">
            Krithika
          </Text>
        </Box>
      </Flex>

      <Flex>
        <Box ml="129px" w="202px" h="27px" mt="19px">
          <Text
            fontSize="24px"
            lineHeight="24px"
            color={useColorModeValue("#3F3F3F", "#909090")}
          >
            Chief Editor
          </Text>
        </Box>
        <Spacer />
        <Box ml="145px" w="234px" h="27px" mt="12px">
          <Text fontSize="36px" lineHeight="36px">
            Srinivasan
          </Text>
        </Box>
        <Spacer />
        <Box ml="160px" w="202px" h="27px" mt="19px">
          <Text
            fontSize="24px"
            lineHeight="24px"
            color={useColorModeValue("#3F3F3F", "#909090")}
          >
            Event Head
          </Text>
        </Box>
        <Spacer />
        <Box mr="112px" w="234px" h="27px" mt="12px">
          <Text fontSize="36px" lineHeight="36px">
            Swaminathan
          </Text>
        </Box>
      </Flex>

      <Flex>
        <Box ml="630px" w="202px" h="27px" mt="12px">
          <Text
            fontSize="24px"
            lineHeight="24px"
            color={useColorModeValue("#3F3F3F", "#909090")}
          >
            Design Head
          </Text>
        </Box>
        <Spacer />
        <Box mr="117px" w="202px" h="27px" mt="12px">
          <Text
            fontSize="24px"
            lineHeight="24px"
            color={useColorModeValue("#3F3F3F", "#909090")}
          >
            Public Relations
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default TeamPage;
