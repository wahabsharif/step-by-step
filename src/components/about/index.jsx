import React, { useEffect } from "react";
import { FooterThree, Header, Wrapper } from "../../layout";
import { animationCreate } from "../../utils/utils";
import Breadcrumb from "../common/breadcrumb/breadcrumb";
import AboutArea from "./introduction";
import FeatureArea from "./feature-area";
import ServicesArea from "./services-area";
import TeamArea from "./team-area";
import Testimonials from "./testimonial";

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
      <Testimonials />
      <FooterThree />
    </Wrapper>
  );
};

export default About;
