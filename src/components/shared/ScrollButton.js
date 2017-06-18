import React from 'react';

const ScrollButton = ({faicon, targetID}) => {
    return (
        <a className="smoothscroll btn-floating btn-large waves-effect waves-light pp-scroll-button-component"
           href={targetID}>
            <i className={faicon}/>
        </a>
    );
};

export default ScrollButton;