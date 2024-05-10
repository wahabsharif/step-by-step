import React from "react";
import Breadcrumb from "../components/common/breadcrumb/breadcrumb";
import SEO from "../components/seo";
import { FooterThree, Header, Wrapper } from "../layout";
import Image from "next/image";

const ErrorPage = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Not Found"} />
      <Header />
      <Breadcrumb title={"404 Page"} back_home={true} />
      {/* <!--404-area-start --> */}
      <div className="tp-404-area tp-404-circle sky-bg pt-200 pb-150 fix">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tp-404-thumb d-flex justify-content-center align-items-center z-index-1">
                <Image
                  src="/assets/img/contact/404.png"
                  width={450}
                  height={450}
                  alt="Error 404"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- 404-area-end --> */}
      <FooterThree />
    </Wrapper>
  );
};

export default ErrorPage;
