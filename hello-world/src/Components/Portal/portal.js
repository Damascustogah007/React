import React from "react";
import ReactDOM from "react-dom";

function portalDemo() {
  return ReactDOM.createPortal(
    <div>
      <h1> Portal Demo</h1>
    </div>,
    document.getElementById("portal-root")
  );
}

export default portalDemo;

//Creating another root div element in the DOM and passing value to them.
