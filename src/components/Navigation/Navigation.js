import React from "react";
import './navigation.css'
import { useLocation, NavLink } from 'react-router-dom';
import signout_black from '../../images/signout_b.svg';
import signout_white from '../../images/signout_w.svg';
import burger_white from '../../images/burger.svg';
import burger_black from '../../images/burger_b.svg';


function Navigation({isLoggedIn, username, onLoginClick, onMobileClick, signout}){

  const location = useLocation();
  const currentLocation = location.pathname;
  const darkButton = currentLocation === '/saved-articles' ? '_dark' : '';

  //const [isLoggedIn, setIsLoggedIn] = useState(false);

    return(
        <nav className="navbar">
           <div className="navbar__links">
            <NavLink
            to= "/" 
            className={`${currentLocation === '/' && 'navbar__link_current'} navbar__link navbar__link` + darkButton} //if not work try ? :
          >
            Home
          </NavLink>
          {isLoggedIn ? (
           <>
             <NavLink
             to= "/saved-articles" 
             className={`${currentLocation === '/saved-articles' && 'navbar__link_current'} navbar__link navbar__link` + darkButton}
           >
             Saved Articles
           </NavLink>
           <button className="navbar__button navbar__logout"
            onClick={signout}>
              {username}
              <img src={currentLocation === '/' ? signout_white : signout_black} alt="exit"/>
           </button>
           <button onClick={onMobileClick} className="navbar__burger">
            <img src={currentLocation === '/' ? burger_white : burger_black} alt="mobile menu" />
           </button>
           </>
          ) : (
            <>
          <button
          to="/signin"
          className={'navbar__button navbar__login ' + `${currentLocation === '/' ? '' : "navbar__button_black navbar__login_black"}`}
          onClick={onLoginClick}
        >
          Sign In
        </button>
        <button onClick={onMobileClick} className="navbar__burger">
         <img src={currentLocation === '/' ? burger_white : burger_black} alt="mobile menu" />
        </button>
            </>
          )}
          </div>
        </nav>
    )
}

export default Navigation;