import React from "react";
import { Box, Text, Stack, Img, Heading, Button } from "@chakra-ui/react";
import Saly_12 from "../images/Saly-12.png";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  Name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),

  Email: Yup.string().email("Invalid email").required("Required"),

  Message: Yup.string()
    .min(2, "Too Short!")
    .max(800, "Too Long!")
    .required("Required"),
});

const ValidationSchemaExample = () => (
  <div>
    <Formik
      initialValues={{
        Name: "",
        Email: "",
        Message: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <h1>Name</h1>
          <Field name="Name" />
          {errors.Name && touched.Name ? <div>{errors.Name}</div> : null}

          <br></br>
          <br></br>

          <h1>Email</h1>
          <Field name="Email" type="Email" />
          {errors.Email && touched.Email ? <div>{errors.Email}</div> : null}

          <br></br>
          <br></br>

          <h1>Your message</h1>
          <Field name="Message" />
          {errors.Message && touched.Message ? (
            <div>{errors.Message}</div>
          ) : null}

          <br></br>
          <br></br>
          <br></br>
          <Button type="submit">Submit</Button>
        </Form>
      )}
    </Formik>
  </div>
);

function ContactPage() {
  return (
    <Box>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
      >
        <Box position={"relative"} overflow={"hidden"} w={[300, 400, 500]}>
          <Img
            alt={"Contact Image"}
            fit={"cover"}
            align={"center"}
            src={Saly_12}
          />
        </Box>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", lg: "6xl" }}
          >
            <Text as={"span"} position={"relative"}>
              Get in Touch!
            </Text>
          </Heading>
          <Text
            lineHeight={1.1}
            fontWeight={100}
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
            Send a message!
          </Text>
        </Stack>
        <Stack>
          <ValidationSchemaExample />
        </Stack>
      </Stack>
    </Box>
  );
}

export default ContactPage;
