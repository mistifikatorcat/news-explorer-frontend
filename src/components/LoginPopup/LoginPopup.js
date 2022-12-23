import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import './loginpopup.css';
//import { Link } from "react-router-dom";

function LoginPopup({isOpen, onClose, onRegisterClick}) {
  //const [email, setEmail] = React.useState("");
  //const [password, setPassword] = React.useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const userData = { email, password };
  //   handleLogin(userData);
  // };

  // const handleChangeEmail = (e) => {
  //   setEmail(e.target.value);
  // };

  // const handleChangePassword = (e) => {
  //   setPassword(e.target.value);
  // };

  return (
    <PopupWithForm
    name= "login"
    isOpen={isOpen}
    onClose={onClose}
    /*onSubmit = {handleSubmit}*/
    onRegisterClick = {onRegisterClick}
    title= "Sign In"
    
  >
      <fieldset className="form__fieldset">
      <input
          type="email"
          name="email"
          className="form__input"
          placeholder="Enter Email"
         // value={email}
          required
          /*onChange={handleChangeEmail}*/
        />

        <input
          type="password"
          name="password"
          className="form__input"
          placeholder="Password"
         // value={password}
          required
          /*onChange={handleChangePassword}*/
        />
      </fieldset>
    </PopupWithForm>
  );
}

export default LoginPopup;
