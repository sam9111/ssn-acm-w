import { extendTheme } from "@chakra-ui/react";
import Button from "./components/Button";

const theme = {
  fonts: {
    heading: "Josefin Sans",
    body: "Josefin Sans",
  },
  components: {
    Button,
  },
};
export default extendTheme(theme);
