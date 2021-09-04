import React, { useState } from "react";
import {
  Box,
  Text,
  Stack,
  Img,
  Heading,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Flex,
  Textarea,
  useColorModeValue,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
  Center,
  Link,
} from "@chakra-ui/react";
import Saly_12 from "../images/Saly-12.png";
import { Formik, Form, Field } from "formik";
import emailjs from "emailjs-com";

function ContactPage() {
  const [success, setSuccess] = React.useState(false);

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ee52o9n",
        "template_eey5b7i",
        e.target,
        "user_b3JDGcM7Xay0Aj2BFlhs7"
      )
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setSuccess(false);
        }
      );
  }

  function validate(value) {
    let error;
    if (!value) {
      error = "Required field!";
    }
    return error;
  }

  return (
    <Box py={{ base: 10, md: 14 }}>
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
            src={Saly_12}
          />
        </Box>
        <Stack flex={1} spacing={{ base: 10, md: 14 }}>
          {success ? (
            <Alert status="success">
              <AlertIcon />
              <Box flex="1">
                <AlertTitle>Success!</AlertTitle>
                <AlertDescription display="block">
                  Thank you for your message! It has been sent to our email and
                  our team will get back to you as soon as possible.
                </AlertDescription>
              </Box>
            </Alert>
          ) : null}
          <Heading
            lineHeight={1.1}
            fontWeight={700}
            fontSize={{ base: "3xl", sm: "4xl", lg: "5xl" }}
          >
            Get in touch!
            <br />
            <Text as={"span"} position={"relative"} fontSize={"xl"}>
              We are always happy to hear from you.
            </Text>
          </Heading>

          <Stack
            bg={useColorModeValue("white", "gray.800")}
            position={"relative"}
            borderRadius={"3xl"}
            boxShadow={"2xl"}
            width={"full"}
            overflow={"hidden"}
            p={10}
            lineHeight={1.1}
            fontWeight={300}
            fontSize={{ base: "md", sm: "lg", lg: "xl" }}
          >
            <Text as={"span"} position={"relative"}>
              Our email address is{" "}
              <Link href={`mailto:${CONTACT.email}`} textColor={"blue.300"}>
                {CONTACT.email}
              </Link>
              .
            </Text>
            <Flex>
              <Flex direction={"column"}>
                <Text fontWeight={"bold"}>
                  {CONTACT.chairperson.name}
                  <br />
                  (Chairperson)
                </Text>
                <Text fontWeight={"bold"} mt={2}>
                  {CONTACT.vicechairperson.name}
                  <br />
                  (Vice-Chairperson)
                </Text>
              </Flex>
              <Flex direction={"column"}>
                <Text textDecor={"underline"} ml={10} fontSize={{ base: "sm",md: "xl" }}>
                  {CONTACT.chairperson.phone}
                </Text>
                <Text
                  textDecor={"underline"}
                  ml={10}
                  mt={7}
                  fontSize={{ base: "sm",md: "xl" }}
                >
                  {CONTACT.vicechairperson.phone}
                </Text>
              </Flex>
            </Flex>
          </Stack>

          <Box>
            <Text fontWeight={500} fontSize={"2xl"}>
              Send us a message!
            </Text>
            <Text fontWeight={300} fontSize={"md"}>
              Note: This form will send us an email( your email address will not
              be used).
            </Text>
            <Formik
              initialValues={{
                name: "",
                email: "",
                message: "",
              }}
              onSubmit={(values, actions) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  actions.setSubmitting(false);
                }, 1000);
              }}
            >
              {(props) => (
                <Form onSubmit={sendEmail}>
                  <Field name="name" validate={validate}>
                    {({ field, form }) => (
                      <FormControl
                        isRequired
                        isInvalid={form.errors.name && form.touched.name}
                        py={2}
                      >
                        <FormLabel
                          htmlFor="name"
                          fontSize={"2xl"}
                          fontFamily={"body"}
                          fontWeight={800}
                        >
                          Your name
                        </FormLabel>
                        <Input
                          {...field}
                          id="name"
                          bg={useColorModeValue("white", "gray.800")}
                          width={{ base: "xs", md: "sm" }}
                          size="lg"
                        />
                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="email" validate={validate}>
                    {({ field, form }) => (
                      <FormControl
                        isRequired
                        isInvalid={form.errors.name && form.touched.name}
                        py={2}
                      >
                        <FormLabel
                          htmlFor="email"
                          fontSize={"2xl"}
                          fontFamily={"body"}
                          fontWeight={800}
                        >
                          Your email
                        </FormLabel>
                        <Input
                          {...field}
                          id="email"
                          bg={useColorModeValue("white", "gray.800")}
                          width={{ base: "xs", md: "sm" }}
                          type="email"
                          size="lg"
                        />
                        <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="message" validate={validate}>
                    {({ field, form }) => (
                      <FormControl
                        isRequired
                        isInvalid={form.errors.message && form.touched.message}
                        py={2}
                      >
                        <FormLabel
                          htmlFor="message"
                          fontSize={"2xl"}
                          fontFamily={"body"}
                          fontWeight={800}
                        >
                          Your message
                        </FormLabel>
                        <Textarea
                          {...field}
                          id="message"
                          bg={useColorModeValue("white", "gray.800")}
                          width={{ base: "xs", md: "sm" }}
                          size="lg"
                        />
                        <FormErrorMessage>
                          {form.errors.message}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Box py={5}>
                    <Button type="submit" size={"lg"}>
                      Submit
                    </Button>
                  </Box>
                </Form>
              )}
            </Formik>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
}

export default ContactPage;

const CONTACT = {
  email: "acm-w@cse.ssn.edu.in",
  chairperson: {
    phone: "+916383688836",
    name: "Likhitha Verma",
  },
  vicechairperson: {
    phone: "+918884406088",
    name: "Samyuktha Ganeshkumar",
  },
};
