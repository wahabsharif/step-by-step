import Link from "next/link";
import React from "react";

function FeatureItem({ title, subtitle, color }) {
  return (
    <div className="col-xl-3 col-lg-3 col-md-6">
      <div className="acfeature mb-50">
        <div
          className={`ac-circle ${color ? `ac-cirle-color-${color}` : ""}`}
        ></div>
        <div className="acfeature__item">
          <h3 className="ac-feature-sm-title">
            <Link href="/#">
              <a>{title}</a>
            </Link>
          </h3>
          <p>{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

const contents = {
  title: "Why People Love Step By Step",
  sm_desc_1:
    "At Step By Step, we offer comprehensive maintenance solutions for various settings, whether it's your home, office, warehouse, or any other workplace. Our commitment to excellence is reflected in our steadfast dedication to upholding superior standards of work, training, and customer service. We prioritize safeguarding our reputation, ensuring that every task we undertake is executed with precision and care.",
  sm_desc_2:
    "Renowned for our exceptional service quality, our highly knowledgeable bookings team stands out among our clients. With their expertise and professionalism, they ensure seamless coordination and delivery of our maintenance services, consistently earning top ratings from satisfied customers.",
};
const { title, sm_desc_1, sm_desc_2 } = contents;

const FeatureArea = () => {
  return (
    <>
      <div className="ac-feature-area">
        <div className="container">
          <div className="row ac-feature-space">
            <div className="col-xl-6 col-lg-6">
              <div className="ac-feature-left">
                <h3 className="ac-feature-title">{title}</h3>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="ac-feature-right">
                <p className="pb-25">{sm_desc_1}</p>
                <p>{sm_desc_2}</p>
              </div>
            </div>
          </div>
          <div className="ac-feature-border-top">
            <div className="row">
              <FeatureItem
                title={"PUNCTUALITY"}
                subtitle={
                  "We provide precise arrival times, reaching 98.5% early or on time. If delayed, we'll notify you beforehand."
                }
              />
              <FeatureItem
                title={"KNOWLEDGEABLE TEAM"}
                color={"2"}
                subtitle={
                  "Expert call handlers aided by tradesmen ensure accurate diagnostics and quotes."
                }
              />
              <FeatureItem
                title={"SATISFACTION GUARANTEED"}
                color={"3"}
                subtitle={
                  "Customers are top priority; expect friendly, professional service from start-finish."
                }
              />
              <FeatureItem
                title={"FLEXIBLE SERVICE"}
                color={"4"}
                subtitle={
                  "Book services or annual contracts for 24/7 property support."
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureArea;
