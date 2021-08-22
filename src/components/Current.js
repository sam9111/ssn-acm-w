import React from "react";
import Card from "./Card";
import vvcoding from "../images/vvvcoding.svg";
import career from "../images/careertalk.png";
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
        <br />
        <Card
          title=" What next after graduation?"
          imageImport={career}
          body="By Satish Palaniappan - SDE @ Microsoft"
          watch="Watch Now"
        />
      </div>
    </flex>
  );
}

export default Current;
