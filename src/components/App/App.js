import React from "react";
import { Route, Routes, Redirect, useHistory } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import LoginPopup from '../LoginPopup/LoginPopup';
import RegisterPopup from '../RegisterPopup/RegisterPopup';
import SavedNews from '../SavedNews/SavedNews';
import InfoToolTip from '../InfoToolTip/InfoToolTip';
//import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { initialData } from '../../utils/initialData';


function App(){
    //const [currentUser, setCurrentUser] = React.useState({});
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    const [isSuccess, setIsSuccess] = React.useState("");
    const [isLoginPopupOpen, setIsLoginPopupOpen] = React.useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = React.useState(false);
  const [isInfoToolTipOpen, setIsInfoToolTipOpen] = React.useState(false);
  const [articles, setArticles] = React.useState(initialData);

  const username = 'Daniel';



  function closeAllPopups() {
    setIsLoginPopupOpen(false);
    setIsRegisterPopupOpen(false);
    setIsInfoToolTipOpen(false);
  }



    //event handlers

    function handleLoginClick() {
        setIsLoginPopupOpen(true);
      }
    
      function handleRegisterClick() {
        setIsRegisterPopupOpen(true);
      }

    return(
      //  <CurrentUserContext.Provider value={currentUser}>
        <div className="app">
        <Header 
           isLoggedIn={isLoggedIn}
           username={username}
           onLoginClick={handleLoginClick}
        />

        <Routes>
          <Route 
          path='/saved-news'
          element={
            <SavedNews
            username={username}
            articles={articles}
            />
          }
          />
          <Route
          path='/'
          element={
          <Main
          isLoading={isLoading}
          articles={articles}
          />
          } />
        </Routes>
        {/*
        <LoginPopup
            isOpen={isLoginPopupOpen}
            onRegisterClick={handleRegisterClick}
            onClose={closeAllPopups}
        />
        <RegisterPopup
        isOpen={isRegisterPopupOpen}
        onLoginClick={handleLoginClick}
        onClose={closeAllPopups}
        />
        <InfoToolTip
        isOpen={isInfoToolTipOpen}
        onClose={closeAllPopups}
        status={isSuccess}
      />
        */}
        <Footer />
        </div>
        //</CurrentUserContext.Provider>
    )
}


export default App;