import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom';
import HomeScreen from './Components/HomeScreen';
import ImageSearchScreen from './Components/ImageSearchScreen';
import CreationScreen from './Components/CreationScreen'
// import LoginScreen from './Components/LoginScreen';

let Router = () => 
  <HashRouter>
    <div>
      <Switch>
        <Route exact path='/home' component={HomeScreen} />
        {/* <Route path='/login' component={LoginScreen}/> */}
        <Route path='/search' component={ImageSearchScreen}/>
        <Route path='/create' component={CreationScreen}/>
      </Switch>
    </div>
  </HashRouter>

export default Router;