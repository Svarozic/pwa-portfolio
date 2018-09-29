import React from 'react'

export default class CurriculumButton extends React.Component {

    handleClickDownloadCV() {
        if (window.gtag) {
            window.gtag('event', 'click', {
                'event_category': 'curriculum_button',
                'event_label': 'download_cv_link',
                'value': ''
            });
        }
    }

    render() {
        return (
            <a className="pp-download-cv-btn btn-large waves-effect waves-light"
               href="https://drive.google.com/open?id=1g8SQONeebuWAYGrd-4I9RteNcVSjXZS_9lVYVlo-kNM"
               rel="noopener noreferrer" target="_blank"
               onClick={this.handleClickDownloadCV.bind(this)}>
                <i className="fa fa-cloud-download left hide-on-small-only"/><b>Download my Curriculum
                vitae</b>
            </a>
        );
    }

}