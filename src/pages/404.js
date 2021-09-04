import * as React from "react";
import {Img,Box,Center,Text,Container,Button} from "@chakra-ui/react";
import {Link} from "gatsby";
;
import Saly_17 from "../images/Saly-17.png";
function NotFoundPage() {
return  ( <Box>
<Center h="25em"><Text
        fontWeight={"extrabold"}
        fontSize={{ base: "lg", sm: "11em", lg: "15em" }}
        >404</Text>
        </Center>
        <Center h="0.1em">
        <Text fontWeight={"bold"}
        fontSize={{base: "lg" , sm: "3em" , lg:"5em"}}
        >Oops!</Text>
        </Center>
        <Center h="10em">
        <Text fontWeight={"normal"}
        fontSize={{base: "lg" , sm: "2em" , lg:"3em"}}
        >Hey there! Looks like you wandered and got lost!</Text>
        </Center>
        <Center >
          <Button size="lg" height="3em" colorScheme="#000000">
      <Link to="/"><Text fontSize={{base: "lg" , sm: "1em" , lg:"2em"}}
        >Go Back!</Text></Link>
      </Button>
    </Center>
        <Center>
          <Img
            alt={"Wanderer"}
            fit={"cover"}
            align={"center"}
            src={Saly_17}
          />
          
        </Center>
</Box>
);
}
export default NotFoundPage;
