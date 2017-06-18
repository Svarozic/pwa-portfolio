// import './ceevee-static/css/default.css';
// import './ceevee-static/css/layout.css';
// import './ceevee-static/css/media-queries.css';
// import './ceevee-static/css/magnific-popup.css';
import './materialize-modules.css';
import 'font-awesome/css/font-awesome.css';

import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import PlaygroundSection from './components/PlaygroundSection/PlaygroundSection';
import PortfolioSection from './components/PortfolioSection/PortfolioSection';
import HomeAppendix from './components/HomeSection/HomeAppendix';


ReactDOM.render(<HomeAppendix />, document.getElementById('pp-appendix-container'));

ReactDOM.render(<PortfolioSection />, document.getElementById('pp-portfolio-container'));
ReactDOM.render(<PlaygroundSection />, document.getElementById('pp-playground-container'));


registerServiceWorker();