import React from "react";
import Card from "./Card";
import vvcoding from "../images/vvvcoding.svg";
import carrer from "../images/careertalk.png";
function Current() {
  return (
    <flex>
      <div className="Current">
        <Card
          title=" Workshop on essentials for Coding Interview"
          imageImport={vvcoding}
          body="By Vrishin Vigneshwar SDE @Motorq"
        />
        <br></br>
        <Card
          title=" What next after graduation?"
          imageImport={carrer}
          body="By Satish Palaniappan - SDE @ Microsoft"
        />
      </div>
    </flex>
  );
}

export default Current;
