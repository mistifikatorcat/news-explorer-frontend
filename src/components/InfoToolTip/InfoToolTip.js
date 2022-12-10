import React from "react";
import { Link } from 'react-router-dom';


export default function InfoToolTip({ isOpen, onClose, onLoginClick }) {
  const enable = `${isOpen ? "popup_enabled" : ""}`;
  return (
    <section className={`popup__tooltip popup ${enable}`}>
      <button className="popup__tooltip-close" onClick={onClose}></button>
        <h2 className="popup__tooltip_header">Registration successfully completed!</h2>
        <Link className='popup__redirect-link' onClick={onLoginClick}>Sign In</Link>
    </section>
  );
}
