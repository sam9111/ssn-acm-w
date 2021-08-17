import React from "react";
import { Flex, Text, useColorModeValue, Center } from "@chakra-ui/react";

export default function HomeCard() {
  return (
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
          ACM-W SSN is a team of enthusiastic engineers representing the diverse
          community of Association of Computing Machinery’s Council of Women in
          Computing (ACM - W), with a student chapter based out of SSN College
          of Engineering, Chennai. We work towards helping computing
          professionals to advance in their profession by forming connections,
          skill-building and creating a positive social impact.Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Congue turpis lacus amet eget.
          Elit a, ut viverra enim. Pellentesque scelerisque risus a, consequat
          cursus consequat. Ullamcorper felis cursus morbi quis faucibus
          volutpat malesuada elementum habitant. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Congue turpis lacus amet eget. Elit a, ut
          viverra enim. Pellentesque scelerisque risus a, consequat cursus
          consequat. Ullamcorper felis cursus morbi quis faucibus volutpat
          malesuada elementum habitant.
        </Text>
      </Center>
    </Flex>
  );
}
