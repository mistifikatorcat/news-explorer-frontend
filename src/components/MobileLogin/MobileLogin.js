import React from "react";
import MobileForm from "../MobileForm/MobileForm";

function MobileLogin({isOpen, onClose, onMobileRegisterClick}){

    return (
        <MobileForm
        name= "loginMobile"
        title= "Sign In"
        isOpen={isOpen}
        onClose={onClose}
        /*onSubmit = {handleSubmit}*/
        onRegisterClick = {onMobileRegisterClick}
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
        </MobileForm>
      );
    }
    
    export default MobileLogin;
