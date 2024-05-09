import React, { useState } from "react";

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
