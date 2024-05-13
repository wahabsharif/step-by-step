import React from "react";

const faq_items = [
  {
    id: "one",
    show: true,
    title: "What types of plumbing issues do you handle?",
    desc: "We handle a wide range of plumbing issues, including but not limited to blocked sinks, clogged toilets, leaking pipes, water heater repair, and mainline drain cleaning.",
  },
  {
    id: "two",
    title: "Are your plumbers licensed and experienced?",
    desc: "Yes, all our plumbers are licensed professionals with extensive experience in the field. They undergo regular training to stay updated on the latest techniques and technologies in plumbing.",
  },
  {
    id: "three",
    title: "Do you offer emergency plumbing services?",
    desc: "Absolutely. We provide 24-hour emergency plumbing services to address urgent issues such as burst pipes, sewage backups, and overflowing toilets. Our team is available round the clock to assist you in emergencies.",
  },
  {
    id: "four",
    title: "How quickly can you respond to service calls?",
    desc: "We understand the urgency of plumbing issues, which is why we strive to respond to service calls promptly. In most cases, we aim to dispatch a plumber to your location within the shortest possible time frame, typically within the hour.",
  },
  {
    id: "five",
    title: " Is your pricing transparent, and do you offer upfront estimates?",
    desc: "Yes, we believe in transparent pricing and provide upfront estimates for all our services. Our plumbers will assess the issue, explain the necessary repairs or replacements, and provide you with a clear breakdown of the costs involved before proceeding with the work.",
  },
];

const FaqArea = () => {
  return (
    <>
      <div className="sd-accordio-area grey-bg pt-130 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-xl-7">
              <h3 className="tp-title-sm mb-90">
                Solutions: Plumber services in Dubai
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-custom-accordio">
                <div className="accordion" id="accordionExample">
                  {faq_items.map((item, i) => {
                    const { id, show, title, desc } = item;
                    return (
                      <div
                        key={id}
                        className={`accordion-items ${
                          show ? "faq-accordio-border" : ""
                        }`}
                      >
                        <h2 className="accordion-header" id={`heading-${id}`}>
                          <button
                            className={`accordion-buttons ${
                              show ? "" : "collapsed"
                            }`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse-${id}`}
                            aria-expanded={show ? "true" : "false"}
                            aria-controls={`collapse-${id}`}
                          >
                            {title}
                          </button>
                        </h2>
                        <div
                          id={`collapse-${id}`}
                          className={`accordion-collapse collapse ${
                            show ? "show" : ""
                          }`}
                          aria-labelledby={`heading-${id}`}
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">{desc}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqArea;
