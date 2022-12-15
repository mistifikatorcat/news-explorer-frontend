import React from "react";
import { NavLink } from "react-router-dom";

function MobileForm({name, children, isOpen, onClose, onMobileLoginClick, onMobileRegisterClick, title}){

    const enable = `${isOpen ? "popup_enabled" : ""}`;

    const handleMobileLoginClick = () => {
        onClose();
        onMobileRegisterClick();
      }
      
      const handleMobileRegisterClick = () => {
        onClose();
        onMobileLoginClick();
      }

      return(
        <section className={`${name} mobile-form ${enable}`}>
            <div className={`${name}__container`}>
            <button
          className={`mobile-form__close ${name}__close`}
          onClick={onClose}
        ></button>
        <div className={`${name}__form`}>
          <h3 className={`${name}__title`}>{ title }</h3>
          <form
            className="form mobile-form__form"
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
          <div className="mobile-form__redirect">
            or {" "}
            <NavLink
              className="mobile-form__redirect_link"
              to={(name === 'loginMobile' ? handleMobileRegisterClick : handleMobileLoginClick)}
            >
             {title === 'Sign In' ? ' ' + 'Sign Up' : ' ' + 'Sign In'}
            </NavLink>
          </div>
          </div>
            </div>
        </section>
      )
}

export default MobileForm;