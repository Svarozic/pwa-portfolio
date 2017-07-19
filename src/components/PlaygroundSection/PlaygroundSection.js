import './PlaygroundSection.css';

import React, { Component } from 'react';
import skillsRegister from './skills';

export default class PlaygroundSection extends Component {
    constructor(props) {
        super(props);
        this.state = {searchValue: ''};
    }

    render() {
        return (
            <div className="pp-playground-component">
                <div className="container">
                    <h3>Playground</h3>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="playground-search-input" type="text"
                                   placeholder="... type  'React' or 'Angular' etc."
                                   onChange={this.handleChangeSearchString.bind(this)}
                                   value={this.state.searchValue}/>
                            <label htmlFor="playground-search-input">Have I ever played with ...</label>
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
                        <div className="pp-title teal lighten-2">{skill.title}</div>
                    </div>
                </div>
            );
        });

        return skillsJSX;
    }

    handleChangeSearchString(e) {
        this.setState({searchValue: e.target.value.toUpperCase()});
    }

    isShadowed(skill) {
        //GRYF
        return skill.title.toUpperCase().indexOf(this.state.searchValue) === -1 ? 'shadowed' : '';
    }
}