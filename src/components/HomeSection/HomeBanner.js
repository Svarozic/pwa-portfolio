import './HomeBanner.css';

import React, { Component } from 'react';
import HomeAppendix from './HomeAppendix';

export default class HomeBanner extends Component {
    render() {
        return (
            <div className="pp-component-home-banner">
                <h1 className="responsive-headline">Ahoj Hallo Здраво&nbsp;!</h1>
                <h3 >Welcome in my portfolio PWA</h3>
                <h3 >My name is <span>Ing. Peter Petraník</span> and I am <span>Software Engineer</span></h3>
                <h3 >Let's <a className="smoothscroll" href="#about">start scrolling</a> and learn more
                    <a className="smoothscroll" href="#about">about me</a></h3>

                <HomeAppendix/>
            </div>
        );
    }
}