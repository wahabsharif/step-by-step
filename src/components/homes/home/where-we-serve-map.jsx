import Link from "next/link";
import React from "react";
import Image from "next/image";

const cta_contents = {
  shapes: [
    {
      class: "creative-shape-img-2",
      img: "/assets/img/creative/creative-circle-img.png",
    },
    {
      class: "project-shape-img",
      img: "/assets/img/project/project-zoom-img.png",
    },
  ],
  //   subtitle: "What We Do?",
  title: "Where We Serve.",
  cta_img: "/assets/img/cta/cta-1.png",
  social_info: [
    { title: "Damac Hill" },
    { title: "Arbina Ranchers" },
    { title: "The Villa" },
    { title: "Nove Villa" },
    { title: "Mira Town" },
    { title: "Suqar" },
    { title: "Mudon" },
    { title: "Furjan" },
    { title: "Marina" },
    { title: "Palm" },
    { title: "Jumeirah" },
    { title: "The Leakes" },
    { title: "Greens" },
    { title: "Springs" },
    { title: "Jumeirah Golf Club" },
    { title: "Sport City" },
    { title: "Al Barsha" },
    { title: "Barsha South" },
    { title: "Dubai Hills" },
    { title: "Emirates Hills" },
  ],
};
const { cta_img, shapes, social_info, subtitle, title } = cta_contents;

const WhereWeServeMap = () => {
  return (
    <div className="tp-cta-area black-bg p-relative fix">
      {shapes.map((s, i) => (
        <div key={i} className={s.class}>
          <Image src={s.img} alt="" width={400} height={400} />
        </div>
      ))}
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="tp-cta-section-title-box wow tpfadeUp"
              data-wow-duration=".3s"
              data-wow-delay=".6s"
            >
              {/* <h5 className="tp-subtitle">{subtitle}</h5> */}
              <h2 className="tp-title tp-white-text pb-10">{title}</h2>
            </div>
          </div>
          <div
            className="col-12  z-index-1 wow tpfadeRight"
            data-wow-duration=".5s"
            data-wow-delay=".8s"
          >
            <div className="google-map">
              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                allowfullscreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.682844716!2d54.897802933404115!3d25.076280441863283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1714824133785!5m2!1sen!2s"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-cta-bottom-wrapper">
              <div className="row justify-content-center">
                {social_info.map((s, i) => (
                  <div key={i} className="col-xl-3 col-lg-6 col-md-6 col-10">
                    <div className="tp-cta-social-info">
                      <a className="tp-btn-white-lg" href="#">
                        <span>{s.title}</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhereWeServeMap;
