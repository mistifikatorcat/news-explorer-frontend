import React from "react";
import { Link } from "react-router-dom";
import "./infotooltip.css";

export default function InfoToolTip({ isOpen, onClose, onLoginClick }) {
  const enable = `${isOpen ? "popup_enabled" : ""}`;

  const handleLoginClick = () => {
    onClose();
    onLoginClick();
  };

  return (
    <section className={`tooltip popup ${enable}`}>
      <button className="tooltip__close" onClick={onClose}></button>
      <h2 className="tooltip__header">Registration successfully completed!</h2>
      <Link className="tooltip__redirect" onClick={handleLoginClick}>
        Sign In
      </Link>
    </section>
  );
}
