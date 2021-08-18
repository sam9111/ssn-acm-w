import React from "react";
import Card from "./Card";
import vvcoding from "../images/vvvcoding.svg";
import carrer from "../images/careertalk.png";
import { Center } from "@chakra-ui/react";
function Current() {
  return (
    <flex>
      <div className="Current">
        <Card
          title=" Workshop on essentials for Coding Interview"
          imageImport={vvcoding}
          body="By Vrishin Vigneshwar SDE @Motorq"
          watch="Watch Now"
        />
        <br></br>
        <Card
          title=" What next after graduation?"
          imageImport={carrer}
          body="By Satish Palaniappan - SDE @ Microsoft"
          watch="Watch Now"
        />
      </div>
    </flex>
  );
}

export default Current;
