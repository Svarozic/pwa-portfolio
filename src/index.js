// import './ceevee-static/css/default.css';
// import './ceevee-static/css/layout.css';
// import './ceevee-static/css/media-queries.css';
// import './ceevee-static/css/magnific-popup.css';

import React from 'react';
import ReactDOM from 'react-dom';
import PlaygroundSection from './components/PlaygroundSection/PlaygroundSection';
import PortfolioSection from './components/PortfolioSection/PortfolioSection';
import registerServiceWorker from './registerServiceWorker';
import initCeeVee from './initCeeVee';
import HomeAppendix from './components/HomeSection/HomeAppendix';

ReactDOM.render(<HomeAppendix/>, document.getElementById('pp-home-appendix'));

ReactDOM.render(<PortfolioSection />, document.getElementById('pp-portfolio-section'));

ReactDOM.render(<PlaygroundSection />, document.getElementById('pp-playground-section'));

registerServiceWorker();

// initCeeVee();