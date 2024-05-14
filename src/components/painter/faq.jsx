import React from "react";

const faq_items = [
  {
    id: "one",
    show: true,
    title: "What types of electrical services do you offer?",
    desc: "We offer a wide range of electrical services, including emergency electrical repairs, faulty wiring corrections, water heater leakage fixing, burnt wire repairs, AC short circuit repairs, and electrical installations and upgrades for houses, apartments, and villas.",
  },
  {
    id: "two",
    title: "How quickly can you respond to an emergency electrical issue?",
    desc: "We provide 24/7 emergency electrical services and aim to respond as quickly as possible. Typically, one of our experienced electricians can be at your location within an hour of your call.",
  },
  {
    id: "three",
    title: "Are your electricians licensed and insured?",
    desc: "Yes, all our electricians are fully licensed, insured, and highly trained to handle a variety of electrical issues safely and efficiently.",
  },
  {
    id: "four",
    title: "How much do your electrician services cost?",
    desc: " Our rates are very competitive and reasonable. The cost depends on the specific service required, but we always provide a clear quotation before starting any work, ensuring no hidden fees.",
  },
  {
    id: "five",
    title: "Can you provide electrical services for commercial properties?",
    desc: "While our primary focus is on residential properties such as houses, apartments, and villas, we do offer services for some commercial properties. Please contact us to discuss your specific needs, and we will let you know how we can assist you.",
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
                Solutions: Electrician services in Dubai
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
