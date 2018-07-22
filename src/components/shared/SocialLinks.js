import './SocialLinks.css';

import React from 'react';

const SocialLinks = () => {
    return (
        <ul className="pp-social-links-component">
            <li><a href="https://github.com/Svarozic"
                   rel="noopener noreferrer" target="_blank"><i className="fa fa-github-alt"/></a></li>
            <li><a href="https://www.linkedin.com/in/petranikpeter/"
                   rel="noopener noreferrer" target="_blank"><i className="fa fa-linkedin"/></a></li>
            <li><a href="mailto:petranikpeter@gmail.com"
                   rel="noopener noreferrer" target="_blank"><i className="fa fa-envelope"/></a></li>
            <li><a href="https://telegram.me/PeterPetranikAT"
                   rel="noopener noreferrer" target="_blank"><i className="fa fa-telegram"/></a></li>
        </ul>
    );
};

export default SocialLinks;
