import React from 'react'
import { HashRouter, Route, NavLink, Switch } from 'react-router-dom';
import HomeScreen from './Components/HomeScreen';
import ImageSearchScreen from './Components/ImageSearchScreen';
// import LoginScreen from './Components/LoginScreen';

let Router = () => 
  <HashRouter>
    <div>
      <Switch>
        <Route exact path='/home' component={HomeScreen} />
        {/* <Route path='/login' component={LoginScreen}/> */}
        <Route path='/search' component={ImageSearchScreen}/>
      </Switch>
    </div>
  </HashRouter>

export default Router;