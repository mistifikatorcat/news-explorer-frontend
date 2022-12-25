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
import { initialData } from '../../utils/initialData';


function App(){
    // const [currentUser, setCurrentUser] = React.useState({});
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    const [isSuccess, setIsSuccess] = React.useState("");
    const [isLoginPopupOpen, setIsLoginPopupOpen] = React.useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isInfoToolTipOpen, setIsInfoToolTipOpen] = React.useState(false);
  const [articles, setArticles] = React.useState(initialData);

  const username = 'Daniel';


    // let location = useLocation();

    // React.useEffect(() => {
    //   if(location.pathname === '/login') {
    //     setIsLoginPopupOpen(true);
    //     setIsRegisterPopupOpen(false);
    //   }
    //   if(location.pathname === '/register') {
    //     setIsLoginPopupOpen(false);
    //     setIsRegisterPopupOpen(true);
    //   }
    // }, [location]);



  function closeAllPopups() {
    setIsLoginPopupOpen(false);
    setIsRegisterPopupOpen(false);
    setIsInfoToolTipOpen(false);
    setIsMobileMenuOpen(false);
  }



    //event handlers

    function handleLoginClick() {
        setIsLoginPopupOpen(true);
      }
    
      function handleRegisterClick() {
        setIsRegisterPopupOpen(true);
      }

      function handleMobileMenuClick(){
        setIsMobileMenuOpen(true);
      }


    return(
        <CurrentUserContext.Provider value={username}>
        <div className="app">
        <MobileMenu
        isOpen={isMobileMenuOpen}
        onLoginClick={handleLoginClick}
        onRegisterClick={handleRegisterClick}
        onClose={closeAllPopups}
        />
        <Header 
           isLoggedIn={isLoggedIn}
           username={username}
           onLoginClick={handleLoginClick}
           onRegisterClick={handleRegisterClick}
           onMobileMenuClick={handleMobileMenuClick}
        />
        <Routes>
          <Route 
          path='/saved-articles'
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
        <LoginPopup
            isOpen={isLoginPopupOpen}
            onClose={closeAllPopups}
            onRegisterClick={handleRegisterClick}
        />
        <RegisterPopup
        isOpen={isRegisterPopupOpen}        
        onClose={closeAllPopups}
        onLoginClick={handleLoginClick}
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