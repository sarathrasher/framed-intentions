import React from 'react';
import LoginForm from './LoginForm';

 let LoginScreen = (props) => (
  <div className="log-in-screen-container">
    <div className="logo" />
    <div className="log-form-container">
        <LoginForm {...props}/>
    </div>
  </div>
)
 export default LoginScreen; 