import './Footer.css';

import React from 'react';
import SocialLinks from '../shared/SocialLinks';
import ScrollButton from '../shared/ScrollButton';

const AboutSection = () => {
    return (
        <div className="pp-footer-component">
            <div className="container">
                <div className="row center-align">
                    <div className="pp-social-links-container">
                        <SocialLinks/>
                    </div>

                    <ul className="pp-copyright">
                        <li>&copy; Copyright 2015 Ing.&nbsp;Peter&nbsp;Petraník</li>
                        <li>Check <a href="https://github.com/Svarozic/svarozic.github.io/commits/master"
                                     rel="noopener noreferrer" target="_blank">Last Update</a> of this page
                        </li>
                        <li>Inspired by <a title="Styleshout" href="http://www.styleshout.com/"
                                           rel="noopener noreferrer" target="_blank">Styleshout</a></li>
                    </ul>

                    <div className="pp-scrollbtn-container">
                        <ScrollButton faicon="fa fa-chevron-up" targetID="#pp-home"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;