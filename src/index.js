import React from 'react';
import ReactDOM from 'react-dom';
import './Frontend/CSS/index.css';
import App from './Frontend/App';
import registerServiceWorker from './Frontend/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
