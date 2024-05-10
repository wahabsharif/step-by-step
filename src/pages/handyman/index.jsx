import React from "react";
import SEO from "../../components/seo";
import { services_data } from "../../data";
import { Wrapper } from "../../layout";
import Handyman from "../../components/handyman";

const service_item = services_data[1];

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Service Details"} />
      <Handyman />
    </Wrapper>
  );
};

export default index;
