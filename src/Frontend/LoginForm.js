import React, { Component } from 'react';

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
    this.setState({ 
      [event.target.name]: event.target.value
    })

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
          placeholder="enter e-mail"
          name="email" 
          onChange={this.handleChange}
        />
        
        <label className="signup-account-password">
          Password
        </label>
        <input type="password"
          className="signup-password-input"
          placeholder="enter password"
          name="password" 
          onChange={this.handleChange}/>
        
      </form>
    );
  }
}

export default LoginForm;