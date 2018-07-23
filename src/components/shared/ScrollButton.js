import React from 'react';

export default class ScrollButton extends React.Component {

	handleClick() {
		if (window.gtag) {
			window.gtag('event', 'click', {
				'event_category': 'scroll_button',
				'event_label': 'scroll_button_link',
				'value': this.props.targetID
			});
		}
	}

	render() {
		return (
			<a className="smoothscroll btn-floating btn-large waves-effect waves-light pp-scroll-button-component"
				 href={this.props.targetID}
				 onClick={this.handleClick.bind(this)}>
				<i className={this.props.faicon}/>
			</a>
		);
	}
}