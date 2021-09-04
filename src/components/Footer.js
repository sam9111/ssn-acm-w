import React from "react";
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FiInstagram, FiLinkedin, FiYoutube } from "react-icons/fi";
import { ReactNode } from "react";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={"whiteAlpha.100"}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      target={"_blank"}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bgGradient={"linear-gradient(to-r,blue.300,blue.500,blue.700,black)"}
      color={"white"}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Stack direction={"row"} spacing={6}>
          <SocialButton label={"Linkedin"} href={SOCIAL_MEDIA.LINKEDIN}>
            <FiLinkedin size="2x" />
          </SocialButton>
          <SocialButton label={"YouTube"} href={SOCIAL_MEDIA.YOUTUBE}>
            <FiYoutube size="2x" />
          </SocialButton>
          <SocialButton label={"Instagram"} href={SOCIAL_MEDIA.INSTAGRAM}>
            <FiInstagram size="2x" />
          </SocialButton>
        </Stack>
        <Text>SSN ACM - W Student Chapter © 2021</Text>
      </Container>
    </Box>
  );
}

const SOCIAL_MEDIA = {
  LINKEDIN: "https://www.linkedin.com/company/ssn-acm-w-student-chapter",
  YOUTUBE: "https://www.youtube.com/channel/UCd6XWQr408WoWJFThGfychw",
  INSTAGRAM: "https://instagram.com/ssnacmw?utm_medium=copy_link",
};
