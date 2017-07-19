import './LanguagesSection.css';

import React, { Component } from 'react';

import flagSK from './flag_language_slovak.png';
import flagEN from './flag_language_english.png';
import flagDE from './flag_language_german.png';
import flagSR from './flag_language_srpski.png';

export default class LanguagesSection extends Component {
    render() {
        return (
            <div className="pp-languages-component">
                <div className="container">
                    <h3>Languages</h3>

                    <div className="row">
                        <div className="col s12 m3 center">
                            <img src={flagSK} alt="Slovakia flag"/>
                            <h4>Slovensky</h4>
                            <p>Native</p>
                        </div>

                        <div className="col s12 m3 center">
                            <img src={flagEN} alt="Great Britain flag"/>
                            <h4>English</h4>
                            <p>Professional working proficiency</p>
                        </div>

                        <div className="col s12 m3 center">
                            <img src={flagDE} alt="German flag"/>
                            <h4>Deutsch</h4>
                            <p>Limited working proficiency</p>
                        </div>

                        <div className="col s12 m3 center">
                            <img src={flagSR} alt="Serbia flag"/>
                            <h4>Српски</h4>
                            <p>Beginner</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}