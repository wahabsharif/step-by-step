import React, { useEffect } from "react";
import { FooterThree, Header, Wrapper } from "../../layout";
import { animationCreate } from "../../utils/utils";
import Breadcrumb from "../common/breadcrumb/breadcrumb";
import FaqArea from "./faq";
import ServiceDetailsArea from "./service-details-area";
import HandymanService from "./handyman-service";

const Handyman = ({ service }) => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <Header />
      <Breadcrumb title={service?.title ? service?.title : "Handyman"} />
      <HandymanService />
      <ServiceDetailsArea />
      <FaqArea />
      <FooterThree />
    </Wrapper>
  );
};

export default Handyman;
