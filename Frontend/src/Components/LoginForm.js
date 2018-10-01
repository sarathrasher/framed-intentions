import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
let SERVER_URL = process.env.REACT_APP_SERVER_URL;

 class LoginForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: ''
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
      fetch(`${SERVER_URL}/login`, {
        method: 'POST',
        body: JSON.stringify(this.state),
        headers:{
          "Content-Type": "application/json"
        }
      })
      .then(responseObj => 
        responseObj.json())

      .then(data => { 
        if (data.token) {
        this.props.history.push('/create');
        window.localStorage.setItem('token', data.token);
        this.props.dispatch({
          type: 'STORE_USER_INFO',
          data: data,
        }) 
        } else {this.setState({error: data.error}) }
      })
    }
    return (
    <div>
      <form className="login-form">
        <div className="login-text"> 
          <h3 className="login-account">
            Login To Your Account:
          </h3>
        </div>
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
      <Link to="/signup">Not a User Yet? Sign Up </Link>
      <br/>
      <label> {this.state.error}
      </label>
    </div>
    );
  }
}
 export default connect(state => state)(LoginForm); 