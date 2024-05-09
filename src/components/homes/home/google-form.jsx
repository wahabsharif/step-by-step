import React, { useState, useEffect } from "react";

function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          Close
        </button>
        <h3>{props.title}</h3>
        <div className="form-container">{props.formContent}</div>
      </div>
    </div>
  ) : null;
}

function GoogleForm() {
  const [popup, setPopup] = useState(false);
  const [formContent, setFormContent] = useState(null);

  useEffect(() => {
    // Fetch form content on component mount
    const formUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSe0EUB-SpjePeuZmabCVamo3_mvcxMfcWKcBjwqg9SWD9IUGw/viewform?embedded=true";
    fetchGoogleFormContent(formUrl);
  }, []);

  const fetchGoogleFormContent = async (formUrl) => {
    try {
      const response = await fetch("/api/fetchForm"); // Assuming you have a proxy setup
      const data = await response.json();
      setFormContent(data.formContent);
    } catch (error) {
      console.error("Error fetching Google Form content:", error);
      setFormContent(<div>Error loading form</div>);
    }
  };

  return (
    <div>
      <main>
        <button
          onClick={() => {
            console.log("Button clicked");
            setPopup(true);
          }}
        >
          Open Popup
        </button>
      </main>
      <Popup
        trigger={popup}
        setTrigger={setPopup}
        title="My Popup"
        formContent={formContent}
      />
    </div>
  );
}

export default GoogleForm;
