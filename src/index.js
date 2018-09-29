import './materialize-modules.css';
import 'font-awesome/css/font-awesome.css';
import './index.css';

import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import NavBar from './components/NavBar/NavBar';
import HomeAppendix from './components/HomeSection/HomeAppendix';
import AboutSection from './components/AboutSection/AboutSection';
import ResumeSection from './components/ResumeSection/ResumeSection';
import LanguagesSection from './components/LanguagesSection/LanguagesSection';
import WorksSection from './components/WorksSection/WorksSection';
import PlaygroundSection from './components/PlaygroundSection/PlaygroundSection';
import Footer from './components/Footer/Footer';

window.jQuery = window.$ = $;
require('./waypoints');
require('materialize-css');


ReactDOM.render(<NavBar />, document.getElementById('pp-navbar-container'));
ReactDOM.render(<HomeAppendix />, document.getElementById('pp-appendix-container'));

ReactDOM.render(<AboutSection />, document.getElementById('pp-about-container'));
ReactDOM.render(<ResumeSection />, document.getElementById('pp-resume-container'));
ReactDOM.render(<LanguagesSection />, document.getElementById('pp-languages-container'));
ReactDOM.render(<WorksSection />, document.getElementById('pp-works-container'));
ReactDOM.render(<PlaygroundSection />, document.getElementById('pp-playground-container'));

ReactDOM.render(<Footer />, document.getElementById('pp-footer-container'));

registerServiceWorker();

// Setup Smooth Scrolling for all rendered elements
$(document).ready(function ($) {
    $('.smoothscroll').on('click', function (e) {
        e.preventDefault();

        if (window.gtag) {
            window.gtag('event', 'click', {
                'event_category': 'navigation_bar',
                'event_label': 'navigation_bar_link',
                'value': this.hash
            });
        }

        let target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 800, 'swing', function () {
            window.location.hash = target;
        });
    });
});