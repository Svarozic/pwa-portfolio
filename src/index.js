// import './ceevee-static/css/default.css';
// import './ceevee-static/css/layout.css';
// import './ceevee-static/css/media-queries.css';
// import './ceevee-static/css/magnific-popup.css';
import './materialize-modules.css';

import React from 'react';
import ReactDOM from 'react-dom';
import PlaygroundSection from './components/PlaygroundSection/PlaygroundSection';
import PortfolioSection from './components/PortfolioSection/PortfolioSection';
import registerServiceWorker from './registerServiceWorker';
import { HomeBanner } from './components/HomeSection';


ReactDOM.render(<HomeBanner/>, document.getElementById('pp-home-banner'));

ReactDOM.render(<PortfolioSection />, document.getElementById('pp-portfolio-section'));
ReactDOM.render(<PlaygroundSection />, document.getElementById('pp-playground-section'));


registerServiceWorker();