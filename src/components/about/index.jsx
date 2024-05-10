import React, { useEffect } from "react";
import { FooterThree, Header, Wrapper } from "../../layout";
import { animationCreate } from "../../utils/utils";
import Breadcrumb from "../common/breadcrumb/breadcrumb";
import CtaTwo from "../common/cta/cta-2";
import AboutArea from "./introduction";
import FeatureArea from "./feature-area";
import ServicesArea from "./services-area";
import TeamArea from "./team-area";

const About = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);
  return (
    <Wrapper>
      <Header />
      <Breadcrumb title={"About Step By Step"} />
      <AboutArea />
      <ServicesArea />
      <FeatureArea />
      <TeamArea />
      <CtaTwo />
      <FooterThree />
    </Wrapper>
  );
};

export default About;
