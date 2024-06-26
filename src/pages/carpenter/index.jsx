import React from "react";
import Carpenter from "../../components/carpenter";
import SEO from "../../components/seo";
import { Wrapper } from "../../layout";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Carpenter"} />
      <Carpenter />
    </Wrapper>
  );
};

export default index;
