import './ceevee-static/css/default.css';
import './ceevee-static/css/layout.css';
import './ceevee-static/css/media-queries.css';
import './ceevee-static/css/magnific-popup.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import initCeeVee from './initCeeVee';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

initCeeVee();