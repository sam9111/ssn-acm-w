import React from "react";
import { Stack, Box, Heading, Text, Img } from "@chakra-ui/react";
import Saly_24 from "../images/Saly-24.png";

import CommonCard from "../components/CommonCard.js";

function BlogPage() {
  return (
    <Box py={{ base: 10, md: 14 }} align={"center"}>
      <Stack
        align={"right"}
        spacing={{ base: 8, md: 10 }}
        direction={{ base: "column", md: "row" }}
      >
        <Box>
          <Img
            alt={"Hero Image"}
            fit={"cover"}
            align={"center"}
            src={Saly_24}
          />
        </Box>

        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={700}
            fontSize={{ base: "3xl", sm: "4xl", lg: "5xl" }}
            align={"center"}
          >
            <Text as={"span"} position={"relative"}>
              Blog
            </Text>
          </Heading>
          <Stack spacing={{ base: 8, md: 10 }}>
            {/* <CommonCard
              title=" Coding Essentials"
              imageImport={careertalk}
              body="Workshop on essentihthth thytht  rrtrt als for coding inte rviewsdf jsfbiwsfiiefnw  ofnwofwfwnfowfwonfnwsfnownfowg"
              link="Check it Out!"
              cardType="blog"
            /> */}
            <Text
              fontWeight={500}
              fontSize={{ base: "lg", sm: "xl", lg: "2xl" }}
              align={"center"}
            >
              Impressive blogs by our students are in the making! <br></br> Do
              contact us if you want to see your blog here!
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}

export default BlogPage;
