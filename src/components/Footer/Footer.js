import './Footer.css';

import React from 'react';
import SocialLinks from '../shared/SocialLinks';
import ScrollButton from '../shared/ScrollButton';

const AboutSection = () => {
    return (
        <div className="pp-footer-component">
            <div className="row center-align">
                <SocialLinks/>


                <div className="pp-scrollbtn-container">
                    <ScrollButton faicon="fa fa-chevron-up" targetID="#pp-home"/>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;