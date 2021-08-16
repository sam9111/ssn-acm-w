// src/pages/index.js
import React from "react";
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Img,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
  Center,
} from "@chakra-ui/react";
import Saly_19 from "../images/Saly-19.png";

function IndexPage() {
  return (
    <Container maxW={"7xl"}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
      >
        <Box position={"relative"} overflow={"hidden"} w={[300, 400, 500]}>
          <Img
            alt={"Hero Image"}
            fit={"cover"}
            align={"center"}
            src={Saly_19}
          />
        </Box>

        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", lg: "6xl" }}
          >
            <Text as={"span"} position={"relative"}>
              SSN ACM-W Student Chapter
            </Text>
          </Heading>
          <Text
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "1xl", sm: "2xl", lg: "3xl" }}
            as={"span"}
            position={"relative"}
            _after={{
              content: "''",
              width: "full",
              height: "30%",
              position: "absolute",
              bottom: 1,
              left: 0,
            }}
          >
            Creating an inclusive environment for women in computing
          </Text>
          <Flex
            flex={1}
            justify={"center"}
            align={"center"}
            position={"relative"}
            w={"full"}
          >
            <Center
              bg={useColorModeValue("white", "gray.800")}
              position={"relative"}
              borderRadius={"3xl"}
              boxShadow={"lg"}
              width={"full"}
              overflow={"hidden"}
              p={10}
            >
              <Text
                lineHeight={1.1}
                fontWeight={300}
                fontSize={{ base: "sm", sm: "md", lg: "lg" }}
                as={"span"}
                position={"relative"}
              >
                ACM-W SSN is a team of enthusiastic engineers representing the
                diverse community of Association of Computing Machinery’s
                Council of Women in Computing (ACM - W), with a student chapter
                based out of SSN College of Engineering, Chennai. We work
                towards helping computing professionals to advance in their
                profession by forming connections, skill-building and creating a
                positive social impact.{" "}
              </Text>
            </Center>
          </Flex>
        </Stack>
      </Stack>
      <Flex
        flex={1}
        justify={"center"}
        align={"center"}
        position={"relative"}
        w={"full"}
      >
        <Center
          bg={useColorModeValue("white", "gray.800")}
          position={"relative"}
          borderRadius={"3xl"}
          boxShadow={"lg"}
          width={"full"}
          overflow={"hidden"}
          p={10}
        >
          <Text
            lineHeight={1.1}
            fontWeight={300}
            fontSize={{ base: "sm", sm: "md", lg: "lg" }}
            as={"span"}
            position={"relative"}
          >
            ACM-W SSN is a team of enthusiastic engineers representing the
            diverse community of Association of Computing Machinery’s Council of
            Women in Computing (ACM - W), with a student chapter based out of
            SSN College of Engineering, Chennai. We work towards helping
            computing professionals to advance in their profession by forming
            connections, skill-building and creating a positive social
            impact.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Congue turpis lacus amet eget. Elit a, ut viverra enim. Pellentesque
            scelerisque risus a, consequat cursus consequat. Ullamcorper felis
            cursus morbi quis faucibus volutpat malesuada elementum habitant.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue
            turpis lacus amet eget. Elit a, ut viverra enim. Pellentesque
            scelerisque risus a, consequat cursus consequat. Ullamcorper felis
            cursus morbi quis faucibus volutpat malesuada elementum habitant.
          </Text>
        </Center>
      </Flex>

      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
      >
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Center
            bg={useColorModeValue("white", "gray.800")}
            position={"relative"}
            borderRadius={"3xl"}
            boxShadow={"lg"}
            width={"full"}
            overflow={"hidden"}
            p={10}
          >
            <Text
              lineHeight={1.1}
              fontWeight={300}
              fontSize={{ base: "sm", sm: "md", lg: "lg" }}
              as={"span"}
              position={"relative"}
            >
              ACM-W SSN is a team of enthusiastic engineers representing the
              diverse community of Association of Computing Machinery’s Council
              of Women in Computing (ACM - W), with a student chapter based out
              of SSN College of Engineering, Chennai. We work towards helping
              computing professionals to advance in their profession by forming
              connections, skill-building and creating a positive social
              impact.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Congue turpis lacus amet eget. Elit a, ut viverra enim.
              Pellentesque scelerisque risus a, consequat cursus consequat.
              Ullamcorper felis cursus morbi quis faucibus volutpat malesuada
              elementum habitant. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Congue turpis lacus amet eget. Elit a, ut viverra
              enim. Pellentesque scelerisque risus a, consequat cursus
              consequat. Ullamcorper felis cursus morbi quis faucibus volutpat
              malesuada elementum habitant.
            </Text>
          </Center>
        </Flex>

        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Center
            bg={useColorModeValue("white", "gray.800")}
            position={"relative"}
            borderRadius={"3xl"}
            boxShadow={"lg"}
            width={"full"}
            overflow={"hidden"}
            p={10}
          >
            <Text
              lineHeight={1.1}
              fontWeight={300}
              fontSize={{ base: "sm", sm: "md", lg: "lg" }}
              as={"span"}
              position={"relative"}
            >
              ACM-W SSN is a team of enthusiastic engineers representing the
              diverse community of Association of Computing Machinery’s Council
              of Women in Computing (ACM - W), with a student chapter based out
              of SSN College of Engineering, Chennai. We work towards helping
              computing professionals to advance in their profession by forming
              connections, skill-building and creating a positive social
              impact.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Congue turpis lacus amet eget. Elit a, ut viverra enim.
              Pellentesque scelerisque risus a, consequat cursus consequat.
              Ullamcorper felis cursus morbi quis faucibus volutpat malesuada
              elementum habitant. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Congue turpis lacus amet eget. Elit a, ut viverra
              enim. Pellentesque scelerisque risus a, consequat cursus
              consequat. Ullamcorper felis cursus morbi quis faucibus volutpat
              malesuada elementum habitant.
            </Text>
          </Center>
        </Flex>

        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Center
            bg={useColorModeValue("white", "gray.800")}
            position={"relative"}
            borderRadius={"3xl"}
            boxShadow={"lg"}
            width={"full"}
            overflow={"hidden"}
            p={10}
          >
            <Text
              lineHeight={1.1}
              fontWeight={300}
              fontSize={{ base: "sm", sm: "md", lg: "lg" }}
              as={"span"}
              position={"relative"}
            >
              ACM-W SSN is a team of enthusiastic engineers representing the
              diverse community of Association of Computing Machinery’s Council
              of Women in Computing (ACM - W), with a student chapter based out
              of SSN College of Engineering, Chennai. We work towards helping
              computing professionals to advance in their profession by forming
              connections, skill-building and creating a positive social
              impact.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Congue turpis lacus amet eget. Elit a, ut viverra enim.
              Pellentesque scelerisque risus a, consequat cursus consequat.
              Ullamcorper felis cursus morbi quis faucibus volutpat malesuada
              elementum habitant. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Congue turpis lacus amet eget. Elit a, ut viverra
              enim. Pellentesque scelerisque risus a, consequat cursus
              consequat. Ullamcorper felis cursus morbi quis faucibus volutpat
              malesuada elementum habitant.
            </Text>
          </Center>
        </Flex>
      </Stack>
    </Container>
  );
}
export default IndexPage;
