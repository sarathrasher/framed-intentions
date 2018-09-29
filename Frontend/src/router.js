import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom';
import HomeScreen from './Components/HomeScreen';
import ImageSearchScreen from './Components/ImageSearchScreen';
import CreationScreen from './Components/CreationScreen'
import SignupScreen from './Components/SignupScreen';
import LoginScreen from './Components/LoginScreen';

let Router = () => 
  <HashRouter>
    <div>
      <Switch>
        <Route exact path='/load-board/:user_id' component={HomeScreen} />
        <Route exact path='/' component={LoginScreen} />
        {/* <Route path='/login' component={LoginScreen}/> */}
        <Route path='/signup' component={SignupScreen}/>
        <Route exact path='/search/:query' component={ImageSearchScreen}/>
        <Route path='/create' component={CreationScreen}/>
      </Switch>
    </div>
  </HashRouter>

export default Router;