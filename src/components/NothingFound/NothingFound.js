import React from "react";

import "./nothingfound.css";

import sadface from "../../images/not-found_v1.svg";

function NothingFound() {
  return (
    <section className="nothing">
      <img className="nothing__image" src={sadface} alt="Nothing Found" />
      <div className="nothing__text">
        <h2 className="nothing__title">Nothing Found</h2>
        <p className="nothing__subtitle">
          Sorry, but nothing matched your search terms.
        </p>
      </div>
    </section>
  );
}

export default NothingFound;
