import React from 'react';
import SignupForm from './SignupForm';

 let SignupScreen = (props) => (
  <div className="sign-in-screen-container">
    <div className="logo" />
    <div className="signup-form-container">
        <SignupForm {...props}/>
    </div>
  </div>
)
 export default SignupScreen; 