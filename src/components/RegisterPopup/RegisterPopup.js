import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import './registerpopup.css';

// import { Link } from "react-router-dom";

function RegisterPopup({isOpen, onClose, onLoginClick, onRegister}) {
 
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [username, setUsername] = React.useState('');
  // const [errors, setErrors] = React.useState({email: false, password: false, username: false});
  // const [isButtonOn, setIsButtonOn] = React.useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { email, password, username };
  
    onRegister(userData);
  };

   const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  }

  // const handleChange = (e) => {
  //   const input = e.target;
  //    const {name, value} = e.target;
  //    const isValid = input.validity.valid;
  //    setUserData({...userData, [name]: value});
  //    setErrors({...errors, [name]: isValid ? false : input.validationMessage})
  //  };

  

  //  React.useEffect(() => {
  //   const isButtonOn = Object.keys(errors).every(key => errors[key] === false & userData[key] !== undefined);

  //   setIsButtonOn(isButtonOn)
  //  }, [errors])

  return (
    <PopupWithForm
    name= "register"
    isOpen={isOpen}
    onClose={onClose}
    onLoginClick = {onLoginClick}
    onSubmit = {handleSubmit}
    title= "Sign Up" 
    // isButtonOn = {isButtonOn}
    >
      <fieldset className="form__fieldset">
      <label className="form__input-label">Email</label>
      <input
          type="email"
          name="email"
          className="form__input"
          placeholder="Enter Email"
          value={email}
          required
          onChange={handleChangeEmail}
          minLength="2"
          maxLength='40'
        />
         {/* <span className="form__input-error">{errors.email}</span> */}
        <label className="form__input-label">Password</label>
        <input
          type="password"
          name="password"
          className="form__input"
          placeholder="Password"
          value={password}
          required
          onChange={handleChangePassword}
          minLength='2'
          maxLength='64'
        />
        <label className="form__input-label">Username</label>
        <input
          type="username"
          name="username"
          className="form__input"
          placeholder="Username"
          value={username}
          required
          onChange={handleChangeUsername}
          minLength='2'
          maxLength='15'
        />
         {/* <span className="form__input-error">{errors.username}</span> */}
      </fieldset>
    </PopupWithForm>
  );
}

export default RegisterPopup;
