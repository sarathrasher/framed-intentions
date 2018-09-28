import React, { Component } from 'react';
import { connect } from 'react-redux';
let SERVER_URL = process.env.REACT_APP_SERVER_URL;

 class LoginForm extends Component {
  constructor (props) {
    super(props);
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
    let getUserInfoFetch = () => {
      fetch(`http://localhost:3001/signup`, {
        method: 'POST',
        body: JSON.stringify(this.state),
        headers:{
          "Content-Type": "application/json"
        }
      })
      .then(responseObj => 
        responseObj.json())

      .then(data => {
        this.props.history.push('/create');
        window.localStorage.setItem('token', data.token);
        this.props.dispatch({
          type: 'STORE_USER_INFO',
          data: data,
        })
      })
    }
    return (
      <form className="loginu-form">
        <p className="login-text"> 
          <h3 className="login-account">
            Login To Your Account:
        </h3>
        </p>
         <label className="login-account-email">
          Email
        </label>
        <input type="text" 
          className="login-email-input" 
          placeholder="enter e-mail"
          name="email" 
          onChange={this.handleChange}
        />
        
        <label className="login-account-password">
          Password
        </label>
        <input type="password"
          className="login-password-input"
          placeholder="enter password"
          name="password" 
          onChange={this.handleChange}/>
        
        <button type="Submit"
          onClick={(e)=>{
            e.preventDefault();
            getUserInfoFetch()
          }
        }
          > Submit </button>
        
      </form>
      <button type="Submit"
        onClick=
    );
  }
}
 export default connect(state => state)(LoginForm); 