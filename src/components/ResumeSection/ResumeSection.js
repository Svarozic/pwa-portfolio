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
                            <h4>Bachelor thesis</h4>
                            <p className="pp-info">Participant in Microsoft IMAGINE CUP
                                <span className="pp-date">&nbsp;&bull;&nbsp;September 2011 — May 2012 | Košice, Slovakia</span>
                            </p>
                            <p className="pp-desc">I was a member of four people team that participated in category ‘Game Design:Phone’ of
                                Microsoft’s Imagine Cup. The main part of project was also my bachelor thesis. My project task was a development
                                of strategy game on Windows Phone platform in XNA framework that would use also backend services developed
                                by other members of team.
                            </p>
                        </div>

                        <div className="pp-resume-item">
                            <h4>
                                <a href="https://www.mwaysolutions.com" rel="noopener noreferrer" target="_blank">
                                    M-Way Solutions Slovakia&nbsp;<i className="fa fa-link"/>
                                </a>
                            </h4>
                            <p className="pp-info">Junior Java Developer
                                <span className="pp-date">&nbsp;&bull;&nbsp;September 2012 — August 2013 | Košice, Slovakia</span>
                            </p>
                            <p className="pp-desc">When I have studied at the university, I have already worked as a Java developer. I was
                                a part of small development team that built MCap project, it was developed mostly in Java with GWT and OSGi
                                framework. I have worked there as a Java developer, but I was also responsible for setup and administration
                                of Jenkins CI tool, that was executing scheduled builds, deploys and JMeter tests on company’s development
                                and test servers. I have worked with OSGi, Google Web Toolkit, Java EE, Ant, JMeter and Linux.
                            </p>
                        </div>

                        <div className="pp-resume-item">
                            <h4>Master diploma thesis</h4>
                            <p className="pp-info">Participant in Microsoft IMAGINE CUP
                                <span className="pp-date">&nbsp;&bull;&nbsp;September 2011 — May 2012 | Košice, Slovakia</span>
                            </p>
                            <p className="pp-desc">One of the outputs of my master diploma thesis was a web application for database administration.
                                It was aimed to be study learning tool for SQL. Application was written with GWT framework, could connect
                                to database (MySQL by default) and was able to read meta information about stored tables, schemes, functions
                                and procedures, as well as to create and execute them. Application could execute SQL statements with a ‘debug option’.
                                Supported list of database types to connect with this application could be extended by applications “bundles”.
                                Bundles were defined by provided API and could be loaded to the system by admin during the runtime. For
                                example admin could create PostgreSQL bundle, upload it into this web application, and user would be able
                                in login screen to pick PostgreSQL connection type and use the same features as with the default MySQL database option.
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
                            <p className="pp-desc">As a developer I have worked on few projects for customer from Switzerland that collect
                                data from stock exchanges, store them in database and provide additional information for users to show them,
                                where they should or should not invest their money. Team has consisted of two developers from Slovakia and
                                three developers from Switzerland. Main project that I have worked on, was a web application, where people
                                from economic department could manage their data (products / underlyings). Web user interface contained many
                                forms, graphs to present data from database. In the past, this application was written in Java and main task
                                was to re-implement it. On the server-side was used NodeJS and on the client-side BackboneJS. Few technologies
                                that were also used in projects: Java, Maven, NodeJS, BackboneJS, AngularJS, Grunt, ActiveMQ, SQL Server, Solr and others.
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
                            <p className="pp-desc">I am working as software developer on Enterprise Imaging project. My team consists of five
                                people and our responsibility is to develop web application (codename ‘XTEND’) that extends Enterprise Imaging
                                desktop client and provides all his features in web browser. The work expects strong cooperation between our
                                and the other teams, because we share the same Java code, architecture designs and infrastructure of desktop
                                application (with same additional implementation layers). XTEND as a web application represents just a thin
                                client that ‘replaces’ the Swing frontend of Enterprise Imaging. Few technologies used in the project: Java,
                                OSGi, JavaScript, GWT, Angular, Maven, Docker etc.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResumeSection;