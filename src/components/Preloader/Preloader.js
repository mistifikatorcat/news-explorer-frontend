import React from "react";
import "./preloader.css";

function Preloader() {
  return (
    <div className="preloader">
      <i className="preloader__icon" />
      <h2 className="preloader__text">Searching for news...</h2>
    </div>
  );
}

export default Preloader;
