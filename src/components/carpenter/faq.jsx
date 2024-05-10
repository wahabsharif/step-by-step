import React from "react";

const faq_items = [
  {
    id: "one",
    show: true,
    title: "What types of carpentry services do you offer?",
    desc: "We offer a wide range of carpentry services, including but not limited to, furniture assembly, door installation and repair, cabinetry, decking, and custom woodworking projects.",
  },
  {
    id: "two",
    title:
      "How experienced are your carpenters in handling different projects?",
    desc: "Our carpenters are highly experienced professionals with years of expertise in various carpentry tasks. They undergo rigorous training and have a proven track record of successfully completing diverse projects.",
  },
  {
    id: "three",
    title: "Can you assist with custom carpentry designs and installations?",
    desc: "Yes, we specialize in custom carpentry designs and installations. Whether you have a specific vision in mind or need assistance in conceptualizing a design, our team can work with you to bring your ideas to life.",
  },
  {
    id: "four",
    title: "What materials do you typically work with for carpentry projects?",
    desc: "We work with a wide range of materials, including wood, plywood, MDF, metal, and composite materials. The choice of material depends on the project requirements and your preferences.",
  },
  {
    id: "five",
    title:
      "Do you provide estimates for carpentry work before starting a project?",
    desc: "Yes, we offer free estimates for all carpentry projects. Our team will assess the scope of the work, discuss your requirements, and provide you with a detailed estimate outlining the cost and timeline for the project.",
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
                Solutions: Carpentry services in Dubai
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
