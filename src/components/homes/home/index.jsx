import React, { useEffect } from "react";
import { FooterThree, Header, Wrapper } from "../../../layout";
import { animationCreate } from "../../../utils/utils";
// import BlogArea from "./blog-area";
// import BrandArea from "./brand-area";
import CreativeArea from "./home-banner";
import WhereWeServeMap from "./where-we-serve-map";
// import HeroArea from "./hero-area";
// import NewsLetter from "./news-letter";
// import ProjectArea from "./project-area";
// import ServicesArea from "./services-area";
// import Testimonial from "./testimonial";

const Home = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);
  return (
    <Wrapper>
      <Header />
      {/* <HeroArea /> */}
      <CreativeArea />
      <WhereWeServeMap />
      {/* <BrandArea/> */}
      {/* <ServicesArea/> */}
      {/* <ProjectArea/> */}
      {/* <Testimonial/> */}
      {/* <BlogArea/> */}
      {/* <NewsLetter/> */}
      <FooterThree />
    </Wrapper>
  );
};

export default Home;
