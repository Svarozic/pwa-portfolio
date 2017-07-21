import './WorksSection.css';

import React, { Component } from 'react';
import pngScreenComoto from './screens/screen-comoto.png';
import pngScreenNemox from './screens/screen-nemox.png';
import pngScreenPriznaj from './screens/screen-priznaj.png';
import pngScreenServerDashboard from './screens/screen-server-dashboard.png';

export default class WorksSection extends Component {
    render() {
        return (
            <div className="pp-works-component">
                <div className="container">
                    <h3>Works</h3>
                    <p className="pp-description">
                        Some of projects that I have created
                    </p>

                    {/*PRIZNAJ*/}
                    <div className="row">
                        <div className="col s12 m9 center">
                            <img className="pp-project-screen" src={pngScreenPriznaj} alt="screen priznaj"/>
                        </div>

                        <div className="col s12 m3">
                            <h5 className="pp-project-title">Priznaj.sk Android client</h5>
                            <p className="pp-project-desc">
                                Android client for web student portal www.priznaj.sk. Published on Google Play as 'Priznaj.sk'. It was created from my own initiative to improve my android skills, that I have learned during the summer holidays 2013. I have also learned basic of PHP, because I had to implement REST services in PHP on server side to allowed communication with server database. Offline functionality, data synchronization, SQLite database, Android Design Patterns, Tablet optimalization. Application was unpublished by me from play google, because web portal was sold to different owner that did not want to cooperate anymore with me.
                            </p>
                        </div>
                    </div>

                    {/*SERVER DASHBOARD*/}
                    <div className="row">
                        <div className="col s12 m9 center">
                            <img className="pp-project-screen" src={pngScreenServerDashboard} alt="screen server dashboard"/>
                        </div>

                        <div className="col s12 m3">
                            <h5 className="pp-project-title">Server Dashboard</h5>
                            <p className="pp-project-desc">
                                TODO
                                Android client for web student portal www.priznaj.sk. Published on Google Play as 'Priznaj.sk'. It was created from my own initiative to improve my android skills, that I have learned during the summer holidays 2013. I have also learned basic of PHP, because I had to implement REST services in PHP on server side to allowed communication with server database. Offline functionality, data synchronization, SQLite database, Android Design Patterns, Tablet optimalization. Application was unpublished by me from play google, because web portal was sold to different owner that did not want to cooperate anymore with me.
                            </p>
                        </div>
                    </div>

                    {/*COMOTO*/}
                    <div className="row">
                        <div className="col s12 m9 center">
                            <img className="pp-project-screen" src={pngScreenComoto} alt="screen comoto"/>
                        </div>

                        <div className="col s12 m3">
                            <h5 className="pp-project-title">CoMoTo</h5>
                            <p className="pp-project-desc">
                                My agfa internal tool to generate URL link as entry point for internal web application. Built with AngularJS, used custom Gulp configuration to built two distribution versions of app, one as single page application and second as chrome extension with optimized layout. App uses browser local storage to remember last used parameters and presents URL link in more variations according to form selected values. Produce also QR code start links easily from mobile devices.
                            </p>
                        </div>
                    </div>

                    {/*NEMOX*/}
                    <div className="row">
                        <div className="col s12 m9 center">
                            <img className="pp-project-screen" src={pngScreenNemox} alt="screen comoto"/>
                        </div>

                        <div className="col s12 m3">
                            <h5 className="pp-project-title">NeMoX</h5>
                            <p className="pp-project-desc">
                                TODO
                                Android client for web student portal www.priznaj.sk. Published on Google Play as 'Priznaj.sk'. It was created from my own initiative to improve my android skills, that I have learned during the summer holidays 2013. I have also learned basic of PHP, because I had to implement REST services in PHP on server side to allowed communication with server database. Offline functionality, data synchronization, SQLite database, Android Design Patterns, Tablet optimalization. Application was unpublished by me from play google, because web portal was sold to different owner that did not want to cooperate anymore with me.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}