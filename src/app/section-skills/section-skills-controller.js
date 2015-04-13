'use strict';

angular.module('portfolio.sectionSkills')
  .controller('SectionSkillsCtrl', function ($scope) {

    //TODO spravit ze filter na meno ak medzera tak dam ||

    $scope.skills = [
      'JavaScript',
      'AngularJS',
      'BackboneJS',
      'NodeJS',
      'Gulp',
      'Grunt',
      'Jade',
      'Less',
      'npm',
      'bower',
      'Boostrap',
      'MongoDB',
      'RequireJS',
      'JQuery',
      'ExpressJS',
      'UnderscoreJS',
      'Lodash',
      'RSVP.JS',

      'MySQL',
      'PostgreSQL',
      'Microsoft SQL Server',
      'SQLite',
      'SQL',

      'Android',
      'Java SE 6',
      'Java EE',
      'Hibernate',
      'GWT',
      'Vaadin',
      'OSGi',
      'C#',
      'XNA',
      'Windows Phone',

      //MWAY special
      'Jmeter',
      'REST',
      'Web Applications',
      'SSH Client',
      'Ant',
      'Ivy',
      'Curl',
      'Jenkins CI',
      'Maven',
      'Gradle',

      //DERIVATIVES special
      'Apache SOLR',

      'Scrum',
      'JIRA',

      'XML',
      'XPath',
      'JSON',
      'HTML',
      'CSS',

      'IntelliJ IDEA',
      'Eclipse',
      'Visual Studio 2010',

      'Subversion',
      'Git',

      'Gimp',
      'Adobe Illustrator',

      'Linux',


      //another type of skills
      'German',
      'English',
      'Sovak',
      'Kanban'
    ];

  });
