import React, { Component } from 'react';

let LoginForm = (props) => (
  <form className="signup-form"
    onSubmit = { (event) => {
      event.preventDefault();
// add function for submission
    }}>

    <h3 className="signup-account">
      Signup for an account:
    </h3>
    <label className="signup-account-email">
      <p>Email</p>
      <input 
        type="email" 
        className="signup-email-input" 
        value="" required />
    </label>

    <label className="signup-password">
      <p>Password</p>
      <input 
        type="password" 
        className="signup-password-input" 
        required />
    </label>
  
    <button type="submit" 
      className="signup-submit-button">
      Sign Up</button>
</form>
)

class LoginForm extends Component {
  constructor () {
    super();
    this.state = {
      email: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    
  }
  render () {
    return (
      <form className="signup-form">
        <h3 className="signup-account">
          Sign-up for an Account:
        </h3>

        <label className="signup-account-email">
          Email
        </label>
        <input type="text" 
          className="signup-email-input" 
          name="email" 
        />
        
        <label className="signup-account-password">
          Password
        </label>
        <input type="password"
          className="signup-password-input"
          name="password" />
        
      </form>
    );
  }
}

export default LoginForm;