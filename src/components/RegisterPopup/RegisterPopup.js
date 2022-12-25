import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import './registerpopup.css';
// import { CurrentUserContext } from '../../contexts/CurrentUserContext';
// import { Link } from "react-router-dom";

function RegisterPopup({isOpen, onClose, onLoginClick}) {
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
    isOpen={isOpen}
    onClose={onClose}
    onLoginClick = {onLoginClick}
    title= "Sign Up" >
      <fieldset className="form__fieldset">
      <label className="form__input-label">Email</label>
      <input
          type="email"
          name="email"
          className="form__input"
          placeholder="Email"
          //value={email}
          required
          /*onChange={handleChangeEmail}*/
        />
        <label className="form__input-label">Password</label>
        <input
          type="password"
          name="password"
          className="form__input"
          placeholder="Password"
         // value={password}
          required
          /*onChange={handleChangePassword}*/
        />
        <label className="form__input-label">Username</label>
        <input
          type="username"
          name="username"
          className="form__input"
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
