import './ResumeSection.css';

import React from 'react';
import CurriculumButton from "../shared/CurriculumButton";

export default class ResumeSection extends React.Component {

	handleClickCompanyLink(companyName) {
		if (window.gtag) {
			window.gtag('event', 'click', {
				'event_category': 'resume_section',
				'event_label': 'resume_company_link',
				'value': companyName
			});
		}
	}

	render() {
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
									<span
										className="pp-date">&nbsp;&bull;&nbsp;September 2011 — May 2012 | Košice, Slovakia</span>
								</p>
								<p className="pp-desc">I was a member of four people team that participated in category
									‘Game Design:Phone’ of Microsoft’s Imagine Cup. The main part of project was also my
									bachelor thesis. My project task was a development of strategy game on Windows Phone
									platform in XNA framework that would use also backend services developed by other
									members of team.
								</p>
							</div>

							<div className="pp-resume-item">
								<h4>
									<a href="https://www.mwaysolutions.com" rel="noopener noreferrer" target="_blank"
										 onClick={this.handleClickCompanyLink.bind(this, 'M-Way Solutions Slovakia')}>
										M-Way Solutions Slovakia&nbsp;<i className="fa fa-link"/>
									</a>
								</h4>
								<p className="pp-info">Junior Java Developer
									<span className="pp-date">&nbsp;&bull;&nbsp;September 2012 — August 2013 | Košice, Slovakia</span>
								</p>
								<p className="pp-desc">When I have studied at the university, I have already worked as a
									Java developer. I was a part of small development team that built MCap project, it was
									developed mostly in Java with GWT and OSGi framework. I have worked there as a Java
									developer, but I was also responsible for setup and administration of Jenkins CI tool,
									that was executing scheduled builds, deploys and JMeter tests on company’s development
									and test servers. I have worked with OSGi, Google Web Toolkit, Java EE, Ant, JMeter and
									Linux.
								</p>
							</div>

							<div className="pp-resume-item">
								<h4>Master diploma thesis</h4>
								<p className="pp-info">Participant in Microsoft IMAGINE CUP
									<span
										className="pp-date">&nbsp;&bull;&nbsp;September 2011 — May 2012 | Košice, Slovakia</span>
								</p>
								<p className="pp-desc">One of the outputs of my master diploma thesis was a web application
									for database administration. It was aimed to be study learning tool for SQL. Application
									was written with GWT framework, could connect to database (MySQL by default) and was
									able to read meta information about stored tables, schemes, functions and procedures, as
									well as to create and execute them. Application could execute SQL statements with a
									‘debug option’. Supported list of database types to connect with this application could
									be extended by applications “bundles”. Bundles were defined by provided API and could be
									loaded to the system by admin during the runtime. For example admin could create
									PostgreSQL bundle, upload it into this web application, and user would be able in login
									screen to pick PostgreSQL connection type and use the same features as with the default
									MySQL database option.
								</p>
							</div>

							<div className="pp-resume-item">
								<h4>
									<a href="https://www.erni-consultants.com" rel="noopener noreferrer" target="_blank"
										 onClick={this.handleClickCompanyLink.bind(this, 'ERNI Slovakia')}>
										ERNI Slovakia&nbsp;<i className="fa fa-link"/>
									</a>
								</h4>
								<p className="pp-info">Software Engineer
									<span
										className="pp-date">&nbsp;&bull;&nbsp;July 2014 — July 2015 | Bratislava, Slovakia</span>
								</p>
								<p className="pp-desc">As a developer I have worked on few projects for customer from
									Switzerland that collect data from stock exchanges, store them in database and provide
									additional information for users to show them, where they should or should not invest
									their money. Team has consisted of two developers from Slovakia and three developers
									from Switzerland. Main project that I have worked on, was a web application, where
									people from economic department could manage their data (products / underlyings). Web
									user interface contained many forms, graphs to present data from database. In the past,
									this application was written in Java and main task was to re-implement it. On the
									server-side was used NodeJS and on the client-side BackboneJS. Few technologies that
									were also used in projects: Java, Maven, NodeJS, BackboneJS, AngularJS, Grunt, ActiveMQ,
									SQL Server, Solr and more.
								</p>
							</div>

							<div className="pp-resume-item">
								<h4>
									<a href="http://global.agfahealthcare.com" rel="noopener noreferrer" target="_blank"
										 onClick={this.handleClickCompanyLink.bind(this, 'AGFA HealthCare')}>
										AGFA HealthCare&nbsp;<i className="fa fa-link"/>
									</a>
								</h4>
								<p className="pp-info">Java Developer
									<span className="pp-date">&nbsp;&bull;&nbsp;August 2015 — December 2017 | Vienna, Austria</span>
								</p>
								<p className="pp-desc">I have worked as software developer on <a
									href="https://global.agfahealthcare.com/main/enterprise-imaging/" target="_blank" rel="noopener noreferrer">Enterprise
									Imaging</a> project. My
									team consisted of five people and our responsibility was to develop web application
									(codename ‘XTEND’) that extends Enterprise Imaging desktop client and to provide all his
									features into web browser. The work expected strong cooperation between our and the
									other teams, because we shared the same Java code, architecture designs and
									infrastructure of desktop application (with same additional implementation layers).
									XTEND as a web application represented just a thin client that ‘replaced’ the Swing
									frontend of Enterprise Imaging. Few technologies used in the project: Java, OSGi,
									JavaScript, GWT, Angular, React, Maven, Docker and more.
								</p>
							</div>

							<div className="pp-resume-item">
								<h4>
									<a href="https://www.celum.com/" rel="noopener noreferrer" target="_blank"
										 onClick={this.handleClickCompanyLink.bind(this, 'CELUM')}>
										CELUM&nbsp;<i className="fa fa-link"/>
									</a>
								</h4>
								<p className="pp-info">Fullstack Developer
									<span
										className="pp-date">&nbsp;&bull;&nbsp;January 2018 — September 2018 | Vienna, Austria</span>
								</p>
								<p className="pp-desc">
									I have worked in CELUM as Fullstack developer and I have participated on many projects for our
									products. Main development center of CELUM was located in Linz, but I was part of small team in Vienna
									(6 people). The main product was <a href="https://workrooms.net/en/"
																											target="_blank" rel="noopener noreferrer">Workrooms.net</a> and it has consisted of many
									Java Backend projects
									(microservices) and Angular/Javascript Frontend projects. The second product that I was part of was
									Tubemail, it represented standalone extension of Workrooms that let users send and share files easier.
									Tubemail was represented by Azure Serverless Backend and Angular Frontend (webapp and libraries for
									integration with Workrooms).
									As developer, I was also trying to help company to improve and simplify build, deployment and release
									processes, increase productivity in development environment by integration of new tools or
									technologies. I was also organizing weekly meetings for developers to discuss together our daily
									problems or to present new solutions that could improve our code and product quality.
									Few technologies used in projects: Java, VertX, Typescript, JavaScript, Angular, NodeJs, Maven,
									Docker, Azure and more.
								</p>
							</div>

							<div className="pp-resume-item">
								<h4>
									<a href="https://bitmovin.com/" rel="noopener noreferrer" target="_blank"
										 onClick={this.handleClickCompanyLink.bind(this, 'Bitmovin')}>
										Bitmovin&nbsp;<i className="fa fa-link"/>
									</a>
								</h4>
								<p className="pp-info">Fullstack Developer
									<span className="pp-date">&nbsp;&bull;&nbsp;October 2018 — <b>Present</b> | Vienna, Austria</span>
								</p>
								<p className="pp-desc">
									I am currently working for Bitmovin as Fullstack engineer. I work with our web projects written with
									JavaScript / TypeScript / React / NextJs / Gatsy
									like <a href="https://bitmovin.com/"
													target="_blank" rel="noopener noreferrer">Website</a>, <a
									href="https://bitmovin.com/docs" target="_blank" rel="noopener noreferrer">Bitmovin
									Docs</a>, <a href="https://bitmovin.com/dashboard/login" target="_blank" rel="noopener noreferrer">Bitmovin Dashboard</a>, <a
									href="https://bitmovin.com/demos/" target="_blank" rel="noopener noreferrer">Bitmovin
									Demos</a>, <a href="https://sales-demos.bitmovin.com/login" target="_blank" rel="noopener noreferrer">Bitmovin Sales Demos</a>,
									internal Admin Dashboard and internal WebUI components library. But I
									also work on some backend projects written with Java/Kotlin/Springboot as our backend consists of many
									microservices and as a fullstack engineer, it is part of my responsibilities to cover feature
									development from backend to frontend.
									Few technologies used in projects: JavaScript, Typescript, React, Redux, MobX, NextJs, Gatsy, Java,
									Kotlin, Springboot and more.
								</p>
							</div>

						</div>
					</div>

                    <br/>
                    <br/>
                    <div className="center-align">
                        <CurriculumButton/>
                    </div>
				</div>
			</div>
		);
	}
};
