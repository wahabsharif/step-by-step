import React from "react";
import SEO from "../../components/seo";
import { Wrapper } from "../../layout";
import Carpenter from "../../components/carpenter";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Carpenter"} />
      <Carpenter />
    </Wrapper>
  );
};

export default index;
