'use strict';

angular.module('portfolio.factorySkills', [])
  .factory('SkillFactory', function () {

    // trba pridavat po 5, lebo 5 alebo 10 je responsive design
    //len tie ktore su na obrazok a treba ratat s reposnive riadkami inaksie
    //TODO WebSockets, redux

    return [
      {src: 'adobeillustrator.png', title: 'Adobe Illustrator CS6'},
      {src: 'android.png', title: 'Android'},
      {src: 'angular.jpg', title: 'AngularJS'},
      {src: 'ant.png', title: 'Apache Ant'},
      {src: 'apache-webserver.png', title: 'Apache HTTP Server'},
      {src: 'atom.jpg', title: 'Atom a hackable text editor'},
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
      {src: 'fedora.jpg', title: 'Fedora'},
      {src: 'gimp.png', title: 'Gimp'},
      {src: 'github.png', title: 'Git'},
      {src: 'gnome-shell.jpg', title: 'Gnome Shell'},
      {src: 'gradle.png', title: 'Gradle'},

      {src: 'grunt.png', title: 'Grunt'},
      {src: 'gulp.png', title: 'Gulp'},
      {src: 'gwt.jpg', title: 'Google Web Toolkit'},
      {src: 'hibernate.png', title: 'Hibernate'},
      {src: 'html.png', title: 'HTML 5'},
      {src: 'intellij.jpg', title: 'IntelliJ Idea'},
      {src: 'ivy.png', title: 'Apache Ivy'},
      {src: 'jade.png', title: 'Jade'},
      {src: 'java.png', title: 'Java SE6'},
      {src: 'javaee.png', title: 'JAVA EE'},

      {src: 'javascript.png', title: 'JavaScript'},
      {src: 'jenkins.png', title: 'Jenkins CI'},
      {src: 'jira.png', title: 'Jira'},
      {src: 'jquery.png', title: 'JQuery'},
      {src: 'junit.jpg', title: 'JUnit'},
      {src: 'less.png', title: 'Less Css'},
      {src: 'linux.png', title: 'Linux'},
      {src: 'maven.png', title: 'Maven'},
      {src: 'mongodb.png', title: 'MongoDB'},
      {src: 'mysql.png', title: 'MySQL'},

      {src: 'nodejs.png', title: 'NodeJS'},
      {src: 'npm.png', title: 'NPM'},
      {src: 'osgi.jpg', title: 'OSGi'},
      {src: 'play2.jpg', title: 'Play Framework'},
      {src: 'postgresql.png', title: 'PostgreSQL'},
      {src: 'reactjs.jpg', title: 'ReactJS'},
      {src: 'requirejs.png', title: 'RequireJS'},
      {src: 'scrum.png', title: 'Scrum Agile'},
      {src: 'selenium.jpg', title: 'Selenium test framework'},
      {src: 'semanticui.jpg', title: 'Semantic UI front-end development framework'},

      {src: 'solr.png', title: 'Apache Solr'},
      {src: 'sonarqube.png', title: 'SonarQube'},
      {src: 'sql_server.png', title: 'SQL Server 2008'},
      {src: 'sqlite.jpg', title: 'SQlite'},
      {src: 'subversion.png', title: 'Subversion'},
      {src: 'vaadin.png', title: 'Vaadin 6'},
      {src: 'visual_studio.png', title: 'Visual Studio 2010'},
      {src: 'webpack.jpg', title: 'Webpack Module Bundler'},
      {src: 'webstorm.jpg', title: 'WebStorm'},
      {src: 'windows_phone.jpg', title: 'Windows Phone 7.5'},

      {src: 'xna.png', title: 'XNA'},
      {src: 'xpath.png', title: 'XPath'},
      {src: 'yeoman.png', title: 'Yeoman'}
    ];
  });
