'use strict';

angular.module('portfolio.factorySkills', [])
  .factory('SkillFactory', function () {

    // trba pridavat po 5, lebo 5 alebo 10 je responsive design
    //len tie ktore su na obrazok a treba ratat s reposnive riadkami inaksie
    //TODO JUnit, Atom.io (Editor), Selenium, WebStorm
    //TODO GWT update sexy logo
    //TODO remove UnderscoreJS

    return [
      {src: 'adobeillustrator.png', title: 'Adobe Illustrator CS6'},
      {src: 'android.png', title: 'Android'},
      {src: 'angular.jpg', title: 'AngularJS'},
      {src: 'ant.png', title: 'Apache Ant'},
      {src: 'apache-webserver.png', title: 'Apache HTTP Server'},
      {src: 'backbone.png', title: 'BackboneJS'},
      {src: 'bash.png', title: 'Linux Bash scripting'},
      {src: 'bootstrap.png', title: 'Boostrap 3'},
      {src: 'bower.png', title: 'Bower'},
      {src: 'c_sharp.jpg', title: 'C#'},

      {src: 'chrome-extension.png', title: 'Chrome Extension Development'},
      {src: 'css3.png', title: 'CSS 3'},
      {src: 'eclipse.png', title: 'Eclipse'},
      {src: 'eclipse-plugins.png', title: 'Eclipse Plugins Development'},
      {src: 'express.png', title: 'ExpressJS'},
      {src: 'gimp.png', title: 'Gimp'},
      {src: 'github.png', title: 'Git'},
      {src: 'gradle.png', title: 'Gradle'},
      {src: 'grunt.png', title: 'Grunt'},
      {src: 'gulp.png', title: 'Gulp'},

      {src: 'gwt.png', title: 'Google Web Toolkit'},
      {src: 'hibernate.png', title: 'Hibernate'},
      {src: 'html.png', title: 'HTML 5'},
      {src: 'intellijIdea.png', title: 'IntelliJ Idea'},
      {src: 'ivy.png', title: 'Apache Ivy'},
      {src: 'jade.png', title: 'Jade'},
      {src: 'java.png', title: 'Java SE6'},
      {src: 'javaee.png', title: 'JAVA EE'},
      {src: 'javascript.png', title: 'JavaScript'},
      {src: 'jenkins.png', title: 'Jenkins CI'},

      {src: 'jira.png', title: 'Jira'},
      {src: 'jquery.png', title: 'JQuery'},
      {src: 'less.png', title: 'Less Css'},
      {src: 'linux.png', title: 'Linux'},
      {src: 'maven.png', title: 'Maven'},
      {src: 'mongodb.png', title: 'MongoDB'},
      {src: 'mysql.png', title: 'MySQL'},
      {src: 'nodejs.png', title: 'NodeJS'},
      {src: 'npm.png', title: 'NPM'},
      {src: 'osgi.jpg', title: 'OSGi'},

      {src: 'postgresql.png', title: 'PostgreSQL'},
      {src: 'requirejs.png', title: 'RequireJS'},
      {src: 'scrum.png', title: 'Scrum Agile'},
      {src: 'solr.png', title: 'Apache Solr'},
      {src: 'sonarqube.png', title: 'SonarQube'},
      {src: 'sql_server.png', title: 'SQL Server 2008'},
      {src: 'sqlite.jpg', title: 'SQlite'},
      {src: 'subversion.png', title: 'Subversion'},
      {src: 'underscore.png', title: 'UnderscoreJS'},
      {src: 'vaadin.png', title: 'Vaadin 6'},

      {src: 'visual_studio.png', title: 'Visual Studio 2010'},
      {src: 'windows_phone.jpg', title: 'Windows Phone 7.5'},
      {src: 'xna.png', title: 'XNA'},
      {src: 'xpath.png', title: 'XPath'},
      {src: 'yeoman.png', title: 'Yeoman'}
    ];
  });
