import React from "react";
import { Route, Routes/*, useLocation, useHistory*/ } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import LoginPopup from '../LoginPopup/LoginPopup';
import RegisterPopup from '../RegisterPopup/RegisterPopup';
import SavedNews from '../SavedNews/SavedNews';
import InfoToolTip from '../InfoToolTip/InfoToolTip';
import MobileMenu from "../MobileMenu/MobileMenu";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

//api imports
import * as auth from "../../utils/auth";
import newsApi from "../../utils/NewsApi";
import mainApi from "../../utils/MainApi";

function App(){

  //authorization & context

  const [username, setUsername] = React.useState({});
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isCheckingToken, setIsCheckingToken] = React.useState(true);

  //search

  const [isLoading, setIsLoading] = React.useState(false);
  const [isSearching, setIsSearching] = React.useState(false);
  const [isCardsFound, setIsCardsFound] = React.useState(false);

  //popups

  const [isSuccess, setIsSuccess] = React.useState("");
  const [isLoginPopupOpen, setIsLoginPopupOpen] = React.useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isInfoToolTipOpen, setIsInfoToolTipOpen] = React.useState(false);

  //articles

  const [savedArticles, setSavedArticles] = React.useState([]);
  const [foundArticles, setFoundArticles] = React.useState([]);
  const [keyword, setKeyword] = React.useState('');

  
  //checking token

  React.useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      auth
        .checkTokenValidity(token)
        .then((res) => {
          console.log('checking token ', res);
          if (res._id) { //(res._id)
            setIsLoggedIn(true);
            setUserData({ email: res.email });
            history.push("/");
          } else {
            localStorage.removeItem("jwt");
            history.push("/signin");
            setIsLoggedIn(false);
          }
        })
        .catch((err) => {
          console.log(err);
          history.push("/signin");
          setIsLoggedIn(false);
          localStorage.removeItem("jwt");

        })
        .finally(() => {
          setIsCheckingToken(false);
        });
    }
  }, []);

//popups

  function closeAllPopups() {
    setIsLoginPopupOpen(false);
    setIsRegisterPopupOpen(false);
    setIsInfoToolTipOpen(false);
    setIsMobileMenuOpen(false);
  }

    function handleLoginClick() {
        setIsLoginPopupOpen(true);
      }
    
      function handleRegisterClick() {
        setIsRegisterPopupOpen(true);
      }

      function handleMobileMenuClick(){
        setIsMobileMenuOpen(true);
      }

//authorization

function handleRegister({ username, email, password }) {
  auth
    .register(username, email, password)
    .then((res) => {
      if (res._id) { 
        setIsSuccess("success");
        closeAllPopups();
        console.log('user added')
        setIsInfoToolTipOpen(true);
      } else {
        setIsSuccess("fail");
      }
    })
    .catch((err) => {
      console.log(err);
      console.log('user not added')
      setIsSuccess("fail");
    })
}

function handleLogin({ email, password }) {
  auth
    .login(email, password)
    .then((res) => {
      if (res.token) {
        setIsLoggedIn(true);
        setUserData({ email });
        setUsername(res.user);
        localStorage.setItem('jwt', res.token);
        //setToken(res.token);
        history.push("/");
      } else {
        setIsSuccess("fail");
        
      }
    })
    .catch((err) => {
      console.log(err);
      setIsSuccess("fail");
    })
    .finally(() => {
      setIsCheckingToken(false);
    });
}

function signout() {
  setIsLoggedIn(false);
  setUsername({});
  localStorage.removeItem('jwt');
  setIsLoginPopupOpen(true);
}


//article handlers

//search

function handleSearch(keyword){
  setIsSearching(true);
  setIsLoading(true);
  newsApi.getArticles(keyword)
  .then((res) => {
    if (res.articles.length === 0)
    {
      setIsCardsFound(false)
    }
    else
    {
      setFoundArticles(res.articles);
      setKeyword(keyword);
      setIsCardsFound(true);
    }
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    setIsLoading(false);
  })
}



    return(
        <CurrentUserContext.Provider value={username}>
        <div className="app">
        <MobileMenu
        isOpen={isMobileMenuOpen}
        onLoginClick={handleLoginClick}
        onRegisterClick={handleRegisterClick}
        onClose={closeAllPopups}
        onLogout={signout}
        />
        <Header 
           isLoggedIn={isLoggedIn}
           username={username}
           onLoginClick={handleLoginClick}
           onRegisterClick={handleRegisterClick}
           onMobileMenuClick={handleMobileMenuClick}
           onLogout={signout}
           onSearch={handleSearch}
           isSearching={isSearching}
        />
        <Routes>
          <Route 
          path='/saved-articles'
          element={
            <SavedNews
            username={username}
            savedArticles={savedArticles}
            />
          }
          />
          <Route
          path='/'
          element={
          <Main
          isCardsFound={isCardsFound}
          isLoading={isLoading}
          savedArticles={savedArticles}
          foundArticles={foundArticles}
          keyword={keyword}
          />
          } />
        </Routes>
        <LoginPopup
            isOpen={isLoginPopupOpen}
            onClose={closeAllPopups}
            onRegisterClick={handleRegisterClick}
            onLogin={handleLogin}
        />
        <RegisterPopup
        isOpen={isRegisterPopupOpen}        
        onClose={closeAllPopups}
        onLoginClick={handleLoginClick}
        onRegister={handleRegister}
        />
        <InfoToolTip
        isOpen={isInfoToolTipOpen}
        onClose={closeAllPopups}
        status={isSuccess}
      />
        <Footer />
        </div>
        </CurrentUserContext.Provider>
    )
}


export default App;