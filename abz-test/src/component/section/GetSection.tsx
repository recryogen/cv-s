import React from "react";

import typoSize from "../../utils/typo";

import Heading from "../typo/Heading";
function GetSection() {
  return (
    <section>
      <Heading size={typoSize.h1}  >Hello World</Heading>
    </section>
  );
}
export default GetSection;