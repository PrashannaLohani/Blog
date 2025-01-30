import React from "react";
import "./style.css"; // Import custom CSS

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="bouncing-dots">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
};

export default Loader;
