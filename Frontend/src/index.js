import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import Router from './router';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import { Provider } from 'react-redux';

let app = 
  <Provider store={store}>
    <Router />
  </Provider>

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
