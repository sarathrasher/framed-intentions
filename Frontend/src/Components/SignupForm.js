import React, { Component } from 'react';
import { connect } from 'react-redux';
let SERVER_URL = process.env.REACT_APP_SERVER_URL;

 class SignupForm extends Component {
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
    let addUserFetch = () => {
      fetch(`${SERVER_URL}/signup`, {
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
        
        <button type="Submit"
          onClick={(e)=>{
            e.preventDefault();
            addUserFetch()
          }
        }
          > Submit </button>
        
      </form>
    );
  }
}
 export default connect(state => state)(SignupForm); 