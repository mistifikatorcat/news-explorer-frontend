import React from "react";
import { Link, useLocation } from "react-router-dom";


export default function PopupWithForm({name, children, isOpen, onClose, onLoginClick, onRegisterClick, title}) {

  
 const enable = `${isOpen ? "popup_enabled" : ""}`;
 
 


  React.useEffect(() => {

    if (!isOpen){
      return;
    };

    //close by esc


  const closeByEscape = (e) => {
    if (e.key === "Escape") {
      onClose(); //closeAllpopups on app.js will call that
    }
  };

  document.addEventListener("keydown", closeByEscape);

  return () => document.removeEventListener("keydown", closeByEscape);
}, [isOpen, onClose]);

const handleOverlay = (e) => {
  if (e.target === e.currentTarget) {
    onClose();
  }
}

const handleLoginClick = () => {
  onClose();
  onRegisterClick();
}

const handleRegisterClick = () => {
  onClose();
  onLoginClick();
}
  


  return (
    <section className={`${name} popup ${enable}`} id={`${name}`}>
      <div className={`${name}__container`} onClick={handleOverlay}>
        <button
          className={`popup__close ${name}__close`}
          onClick={onClose}
        ></button>
        <div className={`${name}__form`}>
          <h3 className={`${name}__title`}>{ title }</h3>
          <form
            className="form popup__form"
            id={`${name}Form`}
            //onSubmit={onSubmit}
          >
            {children}
            <span className="form__error">some error occured probably</span>
            <fieldset className="form__fieldset">
              <button className="form__button" type="submit">
                { title }
              </button>
            </fieldset>
          </form>
          <div className="popup__redirect">
            or{" "}
            <Link
              className="popup__redirect_link"
              to={(name === 'login' ? handleRegisterClick : handleLoginClick)}
            >
             {title === 'Sign In' ? 'Sign Up' : 'Sign In'}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}