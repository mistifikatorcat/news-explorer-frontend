import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import './loginpopup.css';
//import { Link } from "react-router-dom";

function LoginPopup({isOpen, onClose, onRegisterClick, onLogin}) {
  const [userData, setUserData] = React.useState({});
  const [errors, setErrors] = React.useState({email: false, password: false});
  const [isButtonOn, setIsButtonOn] = React.useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { email, password };
    onLogin(formData);
  };

   const handleChange = (e) => {
    const input = e.target;
     const {name, value} = e.target;
     const isValid = input.validity.valid;
     setUserData({...userData, [name]: value});
     setErrors({...errors, [name]: isValid ? false : input.validationMessage})
   };

  

   React.useEffect(() => {
    const isButtonOn = Object.keys(errors).every(key => errors[key] === false & userData[key] !== undefined);

    setIsButtonOn(isButtonOn)
   }, [formErrors])


  return (
    <PopupWithForm
    name= "login"
    isOpen={isOpen}
    onClose={onClose}
    onSubmit = {handleSubmit}
    onRegisterClick = {onRegisterClick}
    isButtonOn = {isButtonOn}
    title= "Sign In"
    
  >
      
        <label className="form__input-label">Email</label>
      <input
          type="email"
          name="email"
          className="form__input"
          placeholder="Enter Email"
          value={userData.email}
          required
          onChange={handleChange}
          minLength="2"
          maxLength='40'
        />
         <span className="form__input-error">{formErrors.email}</span>
        <label className="form__input-label">Password</label>
        <input
          type="password"
          name="password"
          className="form__input"
          placeholder="Password"
          value={password}
          required
          onChange={handleChange}
          minLength='2'
          maxLength='64'
        />
         <span className="form__input-error">{formErrors.password}</span>
    </PopupWithForm>
  );
}

export default LoginPopup;
