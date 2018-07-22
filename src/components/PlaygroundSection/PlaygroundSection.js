import './PlaygroundSection.css';


import React, { Component } from 'react';
import skillsRegister from './skills';
import debounce from 'throttle-debounce/debounce';
import UtilMixpanel from '../../util-mixpanel';

export default class PlaygroundSection extends Component {
    constructor(props) {
        super(props);
        this.state = {searchValue: ''};

        this.debouncedCallMixpanel = debounce(300, UtilMixpanel.trackPlaygroundSearch);
        this.handleChangeSearchString = this.handleChangeSearchString.bind(this);
    }

    render() {
        return (
            <div className="pp-playground-component">
                <div className="container">
                    <h3>Playground</h3>
                    <p className="pp-description">
                        ... with technologies that I have touched
                    </p>

                    <div className="row">
                        <div className="input-field col s12">
                            <input id="playground-search-input" type="text"
                                   placeholder="... type the skill that you are looking for  ( 'React' / 'Angular' / etc.)"
                                   onChange={this.handleChangeSearchString}
                                   value={this.state.searchValue}/>
                            <label htmlFor="playground-search-input">Has Peter ever worked with ...</label>
                        </div>
                    </div>

                    <div className="row">
                        {this.renderSkills()}
                    </div>
                </div>
            </div>
        );
    }

    renderSkills() {
        let skillsJSX = [];
        const thatComponent = this;

        skillsRegister.forEach(function (skill) {
            skillsJSX.push(
                <div className="col s4 m2 xl1" key={skill.title}>
                    <div className={'pp-skill-item ' + thatComponent.isShadowed(skill)} title={skill.title}>
                        <div className="pp-img-container hide-on-small-only"><img src={skill.src} alt={skill.title}/></div>
                        <div className="pp-title">{skill.title}</div>
                    </div>
                </div>
            );
        });

        return skillsJSX;
    }

    handleChangeSearchString(e) {
        const searchValue = e.target.value.toUpperCase();
        this.setState({searchValue: searchValue});
        if (searchValue)
            this.debouncedCallMixpanel(searchValue);
    }

    isShadowed(skill) {
        return skill.title.toUpperCase().indexOf(this.state.searchValue) === -1 ? 'shadowed' : '';
    }
}