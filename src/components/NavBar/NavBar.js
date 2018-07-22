import './NavBar.css';
import React, { Component } from 'react';

const $ = window.jQuery || window.$;

export default class NavBar extends Component {
    componentDidMount() {
        /*----------------------------------------------------*/
        /* Highlight the current section in the navigation bar
         ------------------------------------------------------*/
        const sections = $("section");
        const navigation_links = $("#nav-wrap a");
        sections.waypoint({
            handler: function (event, direction) {
                let active_section = $(this);
                if (direction === "up") active_section = active_section.prev();
                const active_link = $('#nav-wrap a[href="#' + active_section.attr("id") + '"]');
                navigation_links.parent().removeClass("current");
                active_link.parent().addClass("current");
            },
            offset: '35%'
        });


        /*----------------------------------------------------*/
        /*	Fade In/Out Primary Navigation
         ------------------------------------------------------*/
        $(window).on('scroll', function () {
            const h = $('#pp-home').height();
            const y = $(window).scrollTop();
            const nav = $('#nav-wrap');

            if ((y > h * .20) && (y < h) && ($(window).outerWidth() > 768 )) {
                nav.fadeOut('fast');
            }
            else {
                if (y < h * .20) {
                    nav.removeClass('opaque').fadeIn('fast');
                }
                else {
                    nav.addClass('opaque').fadeIn('fast');
                }
            }
        });
    }

    render() {
        return (
            <nav id="nav-wrap">

                <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                <a className="mobile-btn" href="#!" title="Hide navigation">Hide navigation</a>

                <ul id="nav" className="nav">
                    <li className="current waves-effect waves-light"><a className="smoothscroll" href="#pp-home">Home</a></li>
                    <li className="waves-effect waves-light"><a className="smoothscroll" href="#pp-about-container">About</a></li>
                    <li className="waves-effect waves-light"><a className="smoothscroll" href="#pp-works-container">Works</a></li>
                    <li className="waves-effect waves-light"><a className="smoothscroll" href="#pp-playground-container">Playground</a></li>
                    <li className="waves-effect waves-light"><a className="smoothscroll"
                                                                href="#pp-resume-container">Resume</a></li>
                </ul>

            </nav>
        );
    }
}