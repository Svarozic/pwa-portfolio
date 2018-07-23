import './AboutSection.css';

import React from 'react';
import LazyLoad from 'react-lazyload';
import photo from './photo.jpg';

export default class AboutSection extends React.Component {

	handleClickDownloadCV() {
		if (window.gtag) {
			window.gtag('event', 'click', {
				'event_category': 'about_section',
				'event_label': 'download_cv_link',
				'value': ''
			});
		}
	}

	render() {
		return (
			<div className="pp-about-component">
				<div className="container">
					<h3>About</h3>
					<div className="row">

						<div className="col s12 m4 center-align">
							<LazyLoad once={true} height={200} offset={500}>
								<img src={photo} alt="Ing. Peter Petraník"/>
							</LazyLoad>
						</div>

						<div className="col s12 m8">
							<p className="pp-description">
								Hello, my name is
								<b> Ing. Peter Petraník</b> and I am 27 years old developer with current location in
								Vienna.
								I am communicative, flexible, creative and responsible person. I prefer working with people in a team.
								In my
								free time I like team sports, running, fitness and in general healthy lifestyle because I feel the need
								to not
								let the “dark IT” site win over me.
								<br/>
								From a professional point of view, my hobby is studying and improving my programming skills. I do not
								like
								stagnation, every year I set down my personal development plan and define some goals that help me with
								my
								professional growth. I also like to join IT events for developers in my location, where I can take part
								in
								lectures and get to know new ideas, technologies or another development improvements.
							</p>

							<a className="pp-download-cv-btn btn-large waves-effect waves-light"
								 href="https://drive.google.com/open?id=1g8SQONeebuWAYGrd-4I9RteNcVSjXZS_9lVYVlo-kNM"
								 rel="noopener noreferrer" target="_blank"
								 onClick={this.handleClickDownloadCV.bind(this)}>
								<i className="fa fa-cloud-download left hide-on-small-only"/><b>Download my Curriculum
								vitae</b>
							</a>
						</div>

					</div>
				</div>
			</div>
		);
	}
}