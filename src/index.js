import React from 'react';
import ReactDOM from 'react-dom';
import './Frontend/CSS/index.css';
import Router from './Frontend/router';
import registerServiceWorker from './Frontend/registerServiceWorker';
import store from './Frontend/store';
import LoginScreen from './Frontend/LoginScreen'
import { Provider } from 'react-redux';

let app = 
  <Provider store={store}>
    <Router />
  </Provider>

ReactDOM.render(<LoginScreen />, document.getElementById('root'));
registerServiceWorker();
