import React from "react";
import MobileForm from "../MobileForm/MobileForm";

function MobileRegister({isOpen, onClose, onMobileLoginClick}){

    return (
        <MobileForm
        name= "loginMobile"
        title= "Sign In"
        isOpen={isOpen}
        onClose={onClose}
        /*onSubmit = {handleSubmit}*/
        onMobileLoginClick = {onMobileLoginClick}
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
          type="username"
          name="username"
          className="form__input"
          placeholder="Username"
         // value={username}
          required
          /*onChange={handleChangeUsername}*/
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
    
    export default MobileRegister;
