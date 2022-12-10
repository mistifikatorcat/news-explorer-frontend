import { useLocation } from "react-router-dom";
import './header.css';
import React from "react";
import Navigation from '../Navigation/Navigation';
import SearchForm from "../SearchForm/SearchForm";
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader'
import logo_b from '../../images/NewsExplorer_logo_b.svg';
import logo_w from '../../images/NewsExplorer_logo_w.svg';


function Header({isLoggedIn, username, onLoginClick}) {

  const location = useLocation();
  const currentLocation = location.pathname;
  const whichBackground = currentLocation === '/saved-articles' ? 'header__white' : '';


  return (
    <header className={`${currentLocation === '/' && 'header'} header` + whichBackground}>
      <div className="header__nav-wrapper">
        <img className="header__logo" alt="News Explorer Logo" src={currentLocation === '/' ? logo_w : logo_b} />
        <Navigation
        isLoggedIn={isLoggedIn}
        username={username}
        onLoginClick={onLoginClick} />
      </div>
      {currentLocation === '/' ? (
        <SearchForm />
      ) :
      <SavedNewsHeader />}
    </header>
  );
}

export default Header;
