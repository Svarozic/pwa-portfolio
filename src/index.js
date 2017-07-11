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
import NavBar from './components/NavBar/NavBar';
import HomeAppendix from './components/HomeSection/HomeAppendix';
import AboutSection from './components/AboutSection/AboutSection';
import ResumeSection from './components/ResumeSection/ResumeSection';
import PlaygroundSection from './components/PlaygroundSection/PlaygroundSection';
import LanguagesSection from './components/LanguagesSection/LanguagesSection';
import WorksSection from './components/WorksSection/WorksSection';
import Footer from './components/Footer/Footer';


ReactDOM.render(<NavBar />, document.getElementById('pp-navbar-container'));
ReactDOM.render(<HomeAppendix />, document.getElementById('pp-appendix-container'));

ReactDOM.render(<AboutSection />, document.getElementById('pp-about-container'));
ReactDOM.render(<ResumeSection />, document.getElementById('pp-resume-container'));
ReactDOM.render(<LanguagesSection />, document.getElementById('pp-languages-container'));
ReactDOM.render(<WorksSection />, document.getElementById('pp-works-container'));
ReactDOM.render(<PlaygroundSection />, document.getElementById('pp-playground-container'));


ReactDOM.render(<Footer />, document.getElementById('pp-footer-container'));


initExtJsPlugins();
registerServiceWorker();