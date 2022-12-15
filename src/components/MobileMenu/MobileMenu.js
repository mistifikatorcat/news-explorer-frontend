import React from "react";
import { useLocation, NavLink } from "react-router-dom";
import './mobilemenu.css';
import logo_b from '../../images/NewsExplorer_logo_b.svg';
import logo_w from '../../images/NewsExplorer_logo_w.svg';
import signout_black from '../../images/signout_b.svg';
import signout_white from '../../images/signout_w.svg';



function MobileMenu({isLoggedIn, username, onLoginClick, signout, isOpen, onClose}){
    const enable = `${isOpen ? "mobile-menu_enabled" : ""}`;
    const location = useLocation();
    const currentLocation = location.pathname;
    const isHome = currentLocation === '/';

    const handleOverlay = (e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }

    return(
        <section className={`mobile-menu ${enable}`}>
            <div className={`mobile-menu__container ${isHome ? ' ' : 'mobile-menu__container_white'}`} onClick={handleOverlay}>
            <img className="mobile-menu__logo" alt="News Explorer Logo" src={isHome ? logo_w : logo_b} />
            <button
          className={`mobile-menu__close`}
          onClick={onClose}
        ></button>
        <NavLink
            to={`${isHome ? '/saved-articles' : '/'}` }
            className='mobile-menu__link'
          >
            {`${isHome ? 'Saved Articles' : 'Home' }`}
          </NavLink>
          {isLoggedIn ? (
           <>
           <button className="mobile-menu__button mobile-menu__logout"
            onClick={signout}>
              {username}
              <img src={isHome ? signout_white : signout_black} alt="exit"/>
           </button>
           </>
          ) : (
            <>
          <button
          to="/signin"
          className={'mobile-menu__button mobile-menu__login ' + `${isHome ? '' : "mobile-menu__button_black mobile-menu__login_black"}`}
          onClick={onLoginClick}
        >
          Sign In
        </button>
            </>
          )}
                </div> 
        </section>
    )
}