import React, { useState } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
// import { CurrentUserContext } from '../../contexts/CurrentUserContext';
// import { Link } from "react-router-dom";

function RegisterPopup(isOpen, onClose, onLoginClick) {
  // const currentUser = React.useContext(CurrentUserContext)
  // const [email, setEmail] = React.useState("");
  // const [password, setPassword] = React.useState("");
  // const [username, setUsername] = React.useState("");

  // React.useEffect(() => {
  //   setEmail("");
  //   setPassword("");
  //   setUsername("");
  // }, [isOpen])

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const userData = { email, password, username };
  //   handleRegister(userData);
  // };

  // const handleChangeEmail = (e) => {
  //   setEmail(e.target.value);
  // };

  // const handleChangePassword = (e) => {
  //   setPassword(e.target.value);
  // };

  // const handleChangeUsername = (e) => {
  //   setUsername(e.target.value);
  // }

  return (
    <PopupWithForm
    name= "register"
    title= "Sign Up"
    isOpen={isOpen}
    onClose={onClose}
    onLoginClick={onLoginClick}
    /*onSubmit={handleSubmit}*/>
      <fieldset className="form__fieldset">
      <input
          type="email"
          name="email"
          className="register__input"
          placeholder="Email"
          //value={email}
          required
          /*onChange={handleChangeEmail}*/
        />

        <input
          type="password"
          name="password"
          className="register__input"
          placeholder="Password"
         // value={password}
          required
          /*onChange={handleChangePassword}*/
        />

        <input
          type="username"
          name="username"
          className="register__input"
          placeholder="Username"
         // value={username}
          required
          /*onChange={handleChangeUsername}*/
        />
      </fieldset>
    </PopupWithForm>
  );
}

export default RegisterPopup;
