import React from "react";

const Introduction = () => {
  return (
    <>
      <div className="service-details-area">
        <div className="container">
          <div className="row service-pt-pb">
            <div className="col-xl-6 col-lg-6">
              <div className="sd-service-details">
                <h3 className="tp-title-sm service-details-space">
                  Skilled Handyman Services in Dubai
                </h3>
                <a href="#">
                  Schedule a free expert session
                  <i className="fal fa-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="sd-service-details-paragraph">
                <p className="pb-15">
                  Transforming your space can feel daunting, while moving
                  necessitates inevitable tasks like measuring, drilling, and
                  mounting.{" "}
                </p>
                <p className="pb-10">
                  Whether it&apos;s hanging pictures, assembling furniture,
                  organizing cables, or installing safety features like smoke
                  alarms, our Dubai handyman services handle all the challenging
                  and time-consuming tasks, leaving you free to enjoy your home.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduction;
