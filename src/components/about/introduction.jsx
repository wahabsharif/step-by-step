import React from "react";

const contents = {
  title:
    "Introducing Dubai's premier independent maintenance company, renowned for its size and reliability.",
  right_text_1:
    "Struggling to secure dependable and exceptional maintenance services in Dubai. Step By Step with a mission to cater to the significant demand. Our motivation stemmed from the frustrations of dealing with notoriously unreliable technicians and the inconvenience of multiple visits.",
  right_text_2:
    "Step By Step was born out of a commitment to deliver reliable, professional, and cost-effective property maintenance services across Dubai. Central to their ethos is a dedication to exceptional customer service and the execution of maintenance tasks at a high standard. They achieve this by employing well-trained technicians equipped with the necessary expertise to address underlying issues and provide lasting solutions.",
};
const { right_text_1, right_text_2, title } = contents;

const Introduction = () => {
  return (
    <>
      <div className="ac-about-content-area pt-130">
        <div className="container">
          <div className="ac-border-bottom ac-bottom-space">
            <div className="row">
              <div
                className="col-xl-6 col-lg-6 wow tpfadeLeft"
                data-wow-duration=".3s"
                data-wow-delay=".5s"
              >
                <div className="ac-about-left">
                  <h3 className="ac-ab-title">
                    <a href="#">{title}</a>
                  </h3>
                </div>
              </div>
              <div
                className="col-xl- col-lg-6 wow tpfadeRight"
                data-wow-duration=".5s"
                data-wow-delay=".7s"
              >
                <div className="ac-about-right">
                  <p className="pb-25">{right_text_1}</p>
                  <p>{right_text_2}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduction;
