import './WorksSection.css';

import React, { Component } from 'react';
import pngScreenComoto from './screens/screen-comoto.png';
import pngScreenNemox from './screens/screen-nemox.png';
import pngScreenPriznaj from './screens/screen-priznaj.png';
import pngPwaPortfolio from './screens/screen-pwa-portfolio.png';
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
                                Android client for web student portal www.priznaj.sk. Published on Google Play as 'Priznaj.sk'. It was
                                created from my own initiative to improve my android skills, that I have learned during the summer holidays
                                2013. I have also learned basic of PHP, because I had to implement REST services in PHP on server side to
                                allowed communication with server database. Offline functionality, data synchronization, SQLite database,
                                Android Design Patterns, Tablet optimization. Application was unpublished by me from play google in last years,
                                because web portal was sold to different owner that did not want to cooperate anymore with me.
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
                                Web application that represents a dashboard with online / offline status of servers, provides important
                                information about the each server and entry-point links for another tools that are installed on that server.
                                I have created this web application, when I was working in AGFA Healthcare for all developers to improve our
                                productivity, it was very popular and used on daily base by everybody, from testers, developers to managers,
                                but also it was visible on monitor on kitchen/corridor during the day for everybody. I created it with
                                Angular and used it as an opportunity to improve my knowledge about that framework.
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
                                Another tool that I have created in AGFA Healthcare to improve our productivity and reduce the "pain" that
                                we had during the development of our main project XTend (check it in my resume). XTend as a web application
                                contained the entry-point that user could reach only with specific long URL link that would contain a lot of
                                parameters like CollaborationID, StudyUID, SeriesOfInterest etc. This tool was created as a small controller
                                to generate such URL by some dropdowns / buttons / inputs / etc, or to show preview of generated link and to
                                produce QR-code with that link to access XTend web application from mobile devices much faster. It was built
                                with Angular, but the project used a custom Gulp configuration to build two distribution versions of that
                                JavaScript app. One as single page application that people could find on one of our HTTP servers and the
                                second version as chrome extension with optimized layout for developers, to be able reload XTend in same
                                browser tab with already opened DevTools (with breaking-points in JS code). App also used browser local
                                storage to remember last used parameters.
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
                                The last of the tools that I have created in AGFA Healthcare to improve our development productivity on
                                XTend project. The name stands for NEtwork MOnitor for Xtend, it was a chrome extension written with Angular
                                that provided an additional tab in Chrome DevTools. This extension was connected to our main web application
                                XTend, opened in current browser tab and it was presenting the network messages that were sent between client
                                and server during the user session. XTend could use for communication HTTP or WebSockets, where the content
                                of messages was serialized by GWT framework into unreadable byte array. This extension helped us to "debug"
                                the communication, see all of messages in a list with filter option and color highlight. The most important
                                feature was the detail window of the message, where developer could see the message in human-readable form
                                (JSON). Also very important was the search feature, developer could search for any text in all of these messages
                                during the XTEND runtime, for example when he was expecting some incoming/outgoing message.
                            </p>
                        </div>
                    </div>

                    {/*PWA PORTFOLIO*/}
                    <div className="row">
                        <div className="col s12 m9 center">
                            <img className="pp-project-screen" src={pngPwaPortfolio} alt="screen web portfolio"/>
                        </div>

                        <div className="col s12 m3">
                            <h5 className="pp-project-title">PWA portfolio</h5>
                            <p className="pp-project-desc">
                                My it-portfolio created as Progresive Web Application (PWA) that you are using right now. For a long time I
                                had online the older version (on screenshot) written in AngularJS, but after two years I decided to update
                                it and bring it back alive. Because AngularJS as framework was obsolete and it would be hard to migrate all
                                JavaScript code to new Angular v2/3/4/.. (especially custom directives with ugly jquery code), I decided to
                                create it from scratch according to some HTML template but with React JS. I was also inspired by Google I/O 2017,
                                where one of the main topics were Progresive Web Applications, so I have used create-react-app tool to jump into
                                that and started to read more about service-workers and how to use them. This app is still in progress, I am not
                                happy at all with all of my code there, deployment procedure and especially with loading speed of PWA, so take
                                it more as my playground in next few days ;)
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}