import './HomeAppendix.css';

import React from 'react';
import SocialLinks from '../shared/SocialLinks';
import ScrollButton from '../shared/ScrollButton';

const HomeAppendix = () => {
    return (
        <div className="pp-home-appendix-component">
            <SocialLinks/>

            <div className="pp-scrollbtn-container">
                <ScrollButton faicon="fa fa-chevron-down" targetID="#pp-about-container"/>
            </div>
        </div>
    );
};

export default HomeAppendix;