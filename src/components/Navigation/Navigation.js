import React from "react";
import './navigation.css'
import { useLocation, NavLink } from 'react-router-dom';
import signout_black from '../../images/signout_b.svg';
import signout_white from '../../images/signout_w.svg';
import burger_white from '../../images/burger.svg';
import burger_black from '../../images/burger_b.svg';


function Navigation({isLoggedIn, username, onLoginClick, onMobileMenuClick, signout}){

  const location = useLocation();
  const currentLocation = location.pathname;
  const isHome = currentLocation === '/';
  const darkButton = currentLocation === '/saved-articles' ? '_dark' : '';

  //const [isLoggedIn, setIsLoggedIn] = useState(false);

    return(
        <nav className="navbar">
           <div className="navbar__links">
            
            <NavLink
            to= "/" 
            className={`${isHome ? 'navbar__link_current' : ''} navbar__link navbar__link` + darkButton} //if not work try ? :
          >
            Home
          </NavLink>

          
          <NavLink
            to= "/saved-articles" 
            className={`${!isHome ? 'navbar__link_current' : ''} navbar__link navbar__link` + darkButton} //if not work try ? :
          >
            Saved News
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
              <img src={isHome ? signout_white : signout_black} alt="exit"/>
           </button>
           </>
          ) : (
            <>
          <button
          to="/signin"
          className={'navbar__button navbar__login ' + `${isHome ? '' : "navbar__button_black navbar__login_black"}`}
          onClick={onLoginClick}
        >
          Sign In
        </button>
            </>
          )}
          </div>
          <button onClick={onMobileMenuClick} className="navbar__burger">
            <img src={isHome ? burger_white : burger_black} alt="mobile menu" />
           </button>
        </nav>
    )
}

export default Navigation;