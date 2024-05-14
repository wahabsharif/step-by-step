import React, { useEffect } from "react";
import { FooterThree, Header, Wrapper } from "../../layout";
import { animationCreate } from "../../utils/utils";
import Breadcrumb from "../common/breadcrumb/breadcrumb";
import FaqArea from "./faq";
import Introduction from "./introduction";
import Services from "./services";

const Electrician = ({ service }) => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <Header />
      <Breadcrumb title={service?.title ? service?.title : "Electrician"} />
      <Services />
      <Introduction />
      <FaqArea />
      <FooterThree />
    </Wrapper>
  );
};

export default Electrician;
