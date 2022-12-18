import { useLocation } from "react-router-dom";
import './header.css';
import React from "react";
import Navigation from '../Navigation/Navigation';
import SearchForm from "../SearchForm/SearchForm";
import logo_b from '../../images/NewsExplorer_logo_b.svg';
import logo_w from '../../images/NewsExplorer_logo_w.svg';


function Header({isLoggedIn, username, onLoginClick, onMobileMenuClick}) {

  const location = useLocation();
  const currentLocation = location.pathname;
  const isHome = currentLocation === '/';
 


  return (
    <header className={`${isHome ? 'header' : 'header__white'}`}>
      <div className="header__nav-wrapper">
        <img className="header__logo" alt="News Explorer Logo" src={isHome ? logo_w : logo_b} />
        <Navigation
        isLoggedIn={isLoggedIn}
        username={username}
        onLoginClick={onLoginClick} 
        onMobileMenuClick={onMobileMenuClick}/>
      </div>
      {isHome ? (
        <SearchForm />
      ) :
      <></>}
    </header>
  );
}

export default Header;
