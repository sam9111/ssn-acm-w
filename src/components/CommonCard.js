import React from "react";
import {
  Stack,
  Box,
  Flex,
  useColorModeValue,
  useColorMode,
  Img,
  Heading,
  Text,
  Button,
  Center,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

export default function CommonCard({ title, image, body, link, cardType }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
        borderRadius={"3xl"}
        boxShadow={colorMode === "light" ? "2xl" : "dark-lg"}
      >
        <Box rounded={"3xl"} pos={"relative"} height={"230px"}>
          <Img
            rounded={"lg"}
            height={230}
            width={280}
            objectFit={"cover"}
            src={image}
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={800} p={2}>
            {title}
          </Heading>
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={5}
            align={"center"}
          >
            {body ? (
              <>
                <Button onClick={onOpen} size={"sm"} align={"center"}>
                  Know More
                </Button>
                <Modal isOpen={isOpen} size="3xl" onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>{title}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <div style={{ fontSize: "1.2em" }}>{body}</div>
                      <Img
                        rounded={"lg"}
                        objectFit={"cover"}
                        src={image}
                        style={{
                          margin: "auto",
                          marginTop: "2em",
                          height: "650px",
                        }}
                      />
                    </ModalBody>

                    <ModalFooter>
                      {link ? (
                        <Box p={5}>
                          <Button as="a" href={link}>
                            {cardType == "blog" ? (
                              <Text>Check it out!</Text>
                            ) : (
                              <Text>Watch Now!</Text>
                            )}
                          </Button>
                        </Box>
                      ) : null}
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </>
            ) : null}

            {link ? (
              <>
                <Button as="a" href={link} size={"sm"} align={"center"}>
                  {cardType == "blog" ? (
                    <Text>Check it out!</Text>
                  ) : (
                    <Text>Watch Now!</Text>
                  )}
                </Button>
              </>
            ) : null}
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
