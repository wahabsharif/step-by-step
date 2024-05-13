import React from "react";
import SEO from "../../components/seo";
import { Wrapper } from "../../layout";
import Plumber from "../../components/plumber";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Plumber"} />
      <Plumber />
    </Wrapper>
  );
};

export default index;
