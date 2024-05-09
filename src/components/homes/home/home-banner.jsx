import React from "react";
import Image from "next/image";
import useModal from "../../../hooks/use-modal";

const creative_contents = {
  shape_1: "/assets/img/hero/shape-2.png",
  creative_shapes: [
    { img: "/assets/img/creative/creative-hand.png" },
    { img_2: "-2", img: "/assets/img/creative/creative-circle-img.png" },
  ],
  title: (
    <>
      We&apos;are <b>Expert</b> in
    </>
  ),
  creative_box: [
    {
      id: 1,
      duration: ".3s",
      delay: ".6s",
      icon: "/assets/img/icons/carpenter.png",
      box_title: "Carpenter",
    },
    {
      id: 2,
      duration: ".5s",
      delay: ".8s",
      color: "tp-creative-blue",
      icon: "/assets/img/icons/electrician.png",
      box_title: "Electrician",
    },
    {
      id: 3,
      duration: ".7s",
      delay: "1s",
      color: "tp-creative-pink",
      icon: "/assets/img/icons/handyman.png",
      box_title: "Handyman",
    },
    {
      id: 4,
      duration: ".7s",
      delay: "1s",
      color: "tp-creative-pink",
      icon: "/assets/img/icons/home-appliances.png",
      box_title: "Appliances",
    },
    {
      id: 5,
      duration: ".7s",
      delay: "1s",
      icon: "/assets/img/icons/painter.png",
      box_title: "Painter",
    },
    {
      id: 6,
      duration: ".7s",
      delay: "1s",
      color: "tp-creative-blue",
      icon: "/assets/img/icons/plumber.png",
      box_title: "Plumber",
    },
  ],
};

const { creative_shapes, title, video_id, creative_box } = creative_contents;

const HomeBanner = () => {
  const { isVideoOpen, setIsVideoOpen } = useModal();
  return (
    <>
      <div className="p-relative">
        <div className="shape-two z-index-1">
          {/* <img src={shape_1} alt="" /> */}
        </div>
        <div className="tp-creative-area p-relative black-bg pt-140 pb-135 fix">
          <div className="circle-animation testimonial">
            <span className="tp-circle-1"></span>
            <span className="tp-circle-2"></span>
          </div>
          {creative_shapes.map((s, i) => (
            <div
              key={i}
              className={`creative-shape-img${s.img_2 ? s.img_2 : ""}`}
            >
              <Image src={s.img} alt="" width={450} height={450} />
            </div>
          ))}
          <div className="container creative-z-index ">
            <div className="row">
              <div className="col-lg-12">
                <div className="tp-creative-box text-center">
                  <div className="tp-creative-content mb-110">
                    <h4 className="tp-creative-title">{title}</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="creative-box pl-40 pr-40">
              <div className="row gx-5">
                {creative_box.map((b) => (
                  <div
                    key={b.id}
                    className="col-lg-4 col-md-12 col-xs-12 mb-30"
                  >
                    <div
                      className={`tp-creative-item ${b?.color} wow tpfadeUp`}
                      data-wow-duration={b.duration}
                      data-wow-delay={b.delay}
                    >
                      <div className="tp-creative-yellow d-flex align-items-center">
                        <div className="tp-creative-icon mr-35">
                          <Image src={b.icon} alt="" width={40} height={40} />
                          {/* <i className={b.icon}></i> */}
                        </div>
                        <div className="counter-text">
                          <span>{b.box_title}</span>
                          <p className="m-0  text-white">{b.box_text}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
