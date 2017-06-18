import './ResumeSection.css';

import React from 'react';

const ResumeSection = () => {
    return (
        <div className="pp-resume-component">
            <div className="container">
                <h3>Resume</h3>

                {/*EDUCATION*/}
                <div className="row">
                    <div className="col s12 m4">
                        <h5 className="pp-resume-level">Education</h5>
                    </div>

                    <div className="col s12 m8">
                        <div className="pp-resume-item">
                            <h4>Gymnázium duklianskych hrdinov Svidník</h4>
                            <p className="pp-info">High School
                                <span className="pp-date">&nbsp;&bull;&nbsp;2001 — 2009 | Svidník, Slovakia</span>
                            </p>
                        </div>

                        <div className="pp-resume-item">
                            <h4>Technical University of Košice</h4>
                            <p className="pp-info">Engineer’s Degree of Informatics
                                <span className="pp-date">&nbsp;&bull;&nbsp;2009 — 2014 | Košice, Slovakia</span>
                            </p>
                        </div>

                        <div className="pp-resume-item">
                            <h4>Oracle Java Certification Exam</h4>
                            <p className="pp-info">1Z0-851 - Java Standard Edition 6
                                <span className="pp-date">&nbsp;&bull;&nbsp;2014 | Bratislava, Slovakia</span>
                            </p>
                        </div>

                    </div>
                </div>

                {/*EXPERIENCES*/}
                <div className="row">
                    <div className="col s12 m4">
                        <h5 className="pp-resume-level">Experiences</h5>
                    </div>

                    <div className="col s12 m8">
                        <div className="pp-resume-item">
                            <h4>
                                <a href="https://www.mwaysolutions.com" rel="noopener noreferrer" target="_blank">
                                    M-Way Solutions Slovakia&nbsp;<i className="fa fa-link"/>
                                </a>
                            </h4>
                            <p className="pp-info">Junior Java Developer
                                <span className="pp-date">&nbsp;&bull;&nbsp;September 2012 — August 2013 | Košice, Slovakia</span>
                            </p>
                            <p className="pp-desc">I worked with other developers to build MCap project, developed mostly in Java with GWT
                                and OSGi framework. I was also responsible for setup and administration of Jenkins CI tool, that was
                                executing scheduled builds, deploys and JMeter tests of company project to company’s development and test
                                servers. I have worked with OSGi, Google Web Toolkit, Java EE, REST, Ant, JMeter and Linux, managed by SCRUM
                                software development process.
                            </p>
                        </div>

                        <div className="pp-resume-item">
                            <h4>
                                <a href="https://www.erni-consultants.com" rel="noopener noreferrer" target="_blank">
                                    ERNI Slovakia&nbsp;<i className="fa fa-link"/>
                                </a>
                            </h4>
                            <p className="pp-info">Software Engineer
                                <span className="pp-date">&nbsp;&bull;&nbsp;July 2014 — July 2015 | Bratislava, Slovakia</span>
                            </p>
                            <p className="pp-desc">I worked with other developers to build MCap project, developed mostly in Java with GWT
                                and OSGi framework. I was also responsible for setup and administration of Jenkins CI tool, that was
                                executing scheduled builds, deploys and JMeter tests of company project to company’s development and test
                                servers. I have worked with OSGi, Google Web Toolkit, Java EE, REST, Ant, JMeter and Linux, managed by SCRUM
                                software development process.
                            </p>
                        </div>

                        <div className="pp-resume-item">
                            <h4>
                                <a href="http://global.agfahealthcare.com" rel="noopener noreferrer" target="_blank">
                                    AGFA HealthCare&nbsp;<i className="fa fa-link"/>
                                </a>
                            </h4>
                            <p className="pp-info">Java Developer
                                <span className="pp-date">&nbsp;&bull;&nbsp;August 2015 — Present | Vienna, Austria</span>
                            </p>
                            <p className="pp-desc">I am working as web developer on IMPAX Agility project. My web development team consists
                                of 5 people, our responsibility is to present same IMPAX Agility features in web browser in form of web
                                application. Because of shared base code we have to strongly cooperate with another teams, not only from
                                Vienna. Main technologies used in project are OSGi, Java EE and GWT.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResumeSection;