import './SocialLinks.css';

import React from 'react';

export default class SocialLinks extends React.Component {

	handleClickSocialLink(linkName) {
		if (window.gtag) {
			window.gtag('event', 'click', {
				'event_category': 'social_link',
				'event_label': 'social_link',
				'value': linkName
			});
		}
	}

	render() {
		return (
			<ul className="pp-social-links-component">
				<li><a href="https://github.com/Svarozic"
							 rel="noopener noreferrer" target="_blank"
							 onClick={this.handleClickSocialLink.bind(this, 'github')}><i className="fa fa-github-alt"/></a></li>
				<li><a href="https://www.linkedin.com/in/petranikpeter/"
							 rel="noopener noreferrer" target="_blank"
							 onClick={this.handleClickSocialLink.bind(this, 'linkedin')}><i className="fa fa-linkedin"/></a></li>
				<li><a href="mailto:petranikpeter@gmail.com"
							 rel="noopener noreferrer" target="_blank"
							 onClick={this.handleClickSocialLink.bind(this, 'gmail')}><i className="fa fa-envelope"/></a></li>
				<li><a href="https://telegram.me/PeterPetranikAT"
							 rel="noopener noreferrer" target="_blank"
							 onClick={this.handleClickSocialLink.bind(this, 'telegram')}><i className="fa fa-telegram"/></a></li>
			</ul>
		);
	}
}
