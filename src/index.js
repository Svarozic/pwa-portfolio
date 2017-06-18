// import './ceevee-static/css/default.css';
// import './ceevee-static/css/layout.css';
// import './ceevee-static/css/media-queries.css';
// import './ceevee-static/css/magnific-popup.css';
import './materialize-modules.css';
import 'font-awesome/css/font-awesome.css';
import './font-librebaskerville/librebaskerville.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import initExtJsPlugins from './initExtJsPlugins';
import PlaygroundSection from './components/PlaygroundSection/PlaygroundSection';
import PortfolioSection from './components/PortfolioSection/PortfolioSection';
import AboutSection from './components/AboutSection/AboutSection';
import HomeAppendix from './components/HomeSection/HomeAppendix';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';


ReactDOM.render(<NavBar />, document.getElementById('pp-navbar-container'));
ReactDOM.render(<HomeAppendix />, document.getElementById('pp-appendix-container'));

ReactDOM.render(<AboutSection />, document.getElementById('pp-about-container'));
ReactDOM.render(<PortfolioSection />, document.getElementById('pp-portfolio-container'));
ReactDOM.render(<PlaygroundSection />, document.getElementById('pp-playground-container'));


ReactDOM.render(<Footer />, document.getElementById('pp-footer-container'));


initExtJsPlugins();
registerServiceWorker();