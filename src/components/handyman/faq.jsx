import React from "react";

const faq_items = [
  {
    id: "one",
    show: true,
    title: "What type of clients do you cater to in Dubai?",
    desc: "-Our client base includes everyone right from individuals at residential units and offices to commercial spaces.",
  },
  {
    id: "two",
    title: "What areas do you cover?",
    desc: "- Step By Step has prolonged experience in providing handyman service across UAE.",
  },
  {
    id: "three",
    title:
      "What to do in case of any problem or concern about a service I required?",
    desc: "- Customer satisfaction is the core focus of Step By Step. In case of any issue in any service, you can simply call us on our helpline or speak to our online chat support.",
  },
  {
    id: "four",
    title: "Are the repairs guaranteed?",
    desc: "- Yes. We are a trusted provider of local handyman services in the UAE using high-quality materials and methods. We stand by the quality of our work.",
  },
  {
    id: "five",
    title: "Can I trust your handyman at my premises?",
    desc: "- Absolutely! Our expert technicians have been selected through strict screening and tests. Our technicians bring in long industry experience along with their advanced hand tools. We know the importance of trust and accountability, ensuring our technicians are honest, reliable, and friendly.",
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
                Solutions: Handyman services in Dubai
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
