import './PlaygroundSection.css';

import React from 'react';
import skillsRegister from './skills';
import debounce from 'throttle-debounce/debounce';

export default class PlaygroundSection extends React.Component {
	constructor(props) {
		super(props);
		this.state = {searchValue: ''};

		this.debouncedCallMixpanel = debounce(300, (searchValue) => {
			if (window.gtag) {
				window.gtag('event', 'input', {
					'event_category': 'playground_section',
					'event_label': 'search_skill',
					'value': searchValue
				});
			}
		});
	}

	handleChangeSearchString(e) {
		const searchValue = e.target.value.toUpperCase();
		this.setState({searchValue: searchValue});
		if (searchValue)
			this.debouncedCallMixpanel(searchValue);
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
										 onChange={this.handleChangeSearchString.bind(this)}
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
				<div className={'col s4 m2 xl1 ' + thatComponent._isHidden(skill)} key={skill.title}>
					<div className="pp-skill-item" title={skill.title}>
						<div className="pp-img-container hide-on-small-only"><img src={skill.src} alt={skill.title}/>
						</div>
						<div className="pp-title">{skill.title}</div>
					</div>
				</div>
			);
		});

		return skillsJSX;
	}

	_isHidden(skill) {
		return skill.title.toUpperCase().indexOf(this.state.searchValue) === -1 ? 'col--hidden' : '';
	}
}