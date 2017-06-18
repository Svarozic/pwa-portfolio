import './HomeAppendix.css';

import React from 'react';
import SocialLinks from './SocialLinks';

const HomeAppendix = () => {
    return (
        <div className="pp-home-appendix-component">
            <SocialLinks/>

            <a className="pp-scrolldown-btn smoothscroll" href="#pp-about-container"><i className="fa fa-chevron-circle-down"/></a>
        </div>
    );
};

export default HomeAppendix;