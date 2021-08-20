import * as React from "react";
import { Link ,Img} from "gatsby";
import Saly_17 from "../images/Saly-17.png";
function TeamPage() {
return  ( <Box>
<Box position={"relative"} overflow={"hidden"} w={[300, 400, 500]}>
          <Img
            alt={"Wanderer"}
            fit={"cover"}
            align={"center"}
            src={Saly_17}
          />
        </Box>
</Box>
);
}
export default NotFoundPage;
