import React from "react";
import SEO from "../../components/seo";
import { Wrapper } from "../../layout";
import Handyman from "../../components/handyman";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Handyman"} />
      <Handyman />
    </Wrapper>
  );
};

export default index;
