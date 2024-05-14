import React from "react";
import SEO from "../../components/seo";
import { Wrapper } from "../../layout";
import Electrician from "../../components/electrician";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Electrician"} />
      <Electrician />
    </Wrapper>
  );
};

export default index;
