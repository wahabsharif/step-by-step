import Link from "next/link";
import React from "react";
import services_data from "./services-data";
import Image from "next/image";

const Services = () => {
  return (
    <>
      <div className="tp-service-area pt-110 pb-130">
        <div
          className=" text-center wow tpfadeRight"
          data-wow-duration=".5s"
          data-wow-delay=".9s"
        >
          <div className="tp-feature-section-title-box">
            <h2 className="tp-title tp-title-sm">
              Top Level{" "}
              <span className="tp-section-highlight">
                Plumbers{" "}
                <svg
                  width="247"
                  height="12"
                  viewBox="0 0 247 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-0.000488281 0L247 12H-0.000488281V0Z"
                    fill="#ec3237"
                  />
                </svg>
              </span>{" "}
              In dubai.
            </h2>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {services_data.map((service, i) => {
              const { delay, duration, id, img, title, border_effect } =
                service;
              return (
                <div
                  key={id}
                  className="col-xl-4 col-lg-4 col-md-6 wow tpfadeUp"
                  data-wow-duration={duration}
                  data-wow-delay={delay}
                >
                  <div className={`tp-sv-border-effect ${border_effect}`}>
                    <div
                      className={`tp-service-item-four sv-1-border 
                  ${i + 1 === 8 ? "sv-color-1" : `sv-color-${i + 1}`} mb-30`}
                    >
                      <div className="tp-service-item-four__img  mb-40">
                        <Image src={img} alt="" width={100} height={100} />
                      </div>
                      <div className="tp-service-item-four__title">
                        <h3 className="tp-sv-sm-title">
                          <Link href={`/service-details/${id}`}>
                            <a>{title}</a>
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
