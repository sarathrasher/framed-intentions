import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

let clearLocalToken = () => {
  localStorage.removeItem("token");
}

const NavBar = (props) => {
  return (
  <div className='navigation-bar'>
    <NavLink className="navlinks" activeStyle={{fontWeight: 'bold', backgroundColor: 'white', color: '#17a2b8'}} to={`/load-board/${props.userId}`}>HOME</NavLink>
    <NavLink className="navlinks" activeStyle={{fontWeight: 'bold', backgroundColor: 'white', color: '#17a2b8'}} to="/create">CREATE NEW</NavLink>
    <div className="spacer"></div>
    <p className="user-email">{props.email}</p>
    <NavLink className="navlinks" onClick={clearLocalToken} activeStyle={{fontWeight: 'bold'}} to="/">LOGOUT</NavLink>
  </div>)
}

let SmartNavBar = connect(state => ({email: state.email, userId: state.userId }))(NavBar);
export default SmartNavBar;