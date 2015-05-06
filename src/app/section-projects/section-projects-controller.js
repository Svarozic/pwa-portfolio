'use strict';

angular.module('portfolio.sectionProjects')
  .controller('SectionProjectsCtrl', function ($scope) {

    //TODO dat desc ako html a pouzivat v nom linky ako adresy

    $scope.projects = [
      {
        title: 'Tuke Tank 3D',
        time: '2011-2012',
        desc: 'Special chosen way of school semester project for subject ‘Computer Graphic’. Remake of popular SEGA game Battle City in C# with XNA framework.',
        link: 'https://www.youtube.com/watch?v=Xjyhh-8bzRo',
        images: [
          'tuke-tank-3d/1.png',
          'tuke-tank-3d/2.png',
          'tuke-tank-3d/3.png'
        ]
      },

      {
        title: 'Bachelor Thesis',
        time: '2011-2012',
        desc: 'Participant in Imagine Cup by Microsoft, category Game Design: Phone. Team consisted of four people ' +
        'and my part of project was to develop Windows Phone application. This application, in form of game should ' +
        'represent mobile client for web application written in ASP.NET. Game was inspired by Travian.com, each building ' +
        'should represent individual functionality from server side.'
      },

      {
        title: 'PowerFood',
        time: '2012',
        desc: 'Semester project for school subject \'Web Technologies\',  Consists of android mobile client and Java Web application written in Vaadin 6 ' +
        'framework with Hibernate, MySQL, REST communication. It helps users to create their own diet plan, manage his ' +
        'ingredients, foods and food day plans, then sets up his calendar with this day plans. Mobile Android client ' +
        'downloads user plans, synchronizes data and sets up alarms for next food to eat. Also user can collect ingredients ' +
        'with camera of mobile and input his daily weights and send all of these to server.'
      },

      {
        title: 'Sojas',
        time: '2013',
        desc: 'Semester project for school subject \'Building Technologies of Software Development\'. Web application for ' +
        'overnight hospital ward, written with same technologies like PowerFood project. School subject was more oriented ' +
        'on team leading and agile methods than on programming.'
      },

      {
        title: 'MWay: Junior Java developer',
        time: '2012-2013',
        //TODO
        desc: '',
        linkJob: true
      },

      {
        title: 'Priznaj.sk',
        time: '2013',
        desc: 'Android client for web student portal www.priznaj.sk. Published on Google Play as \'Priznaj.sk\'. It was ' +
        'created from my own initiative to improve my android skills, that I have learned during the summer holidays 2013. ' +
        'I have also learned basic of PHP, because I had to implement REST services in PHP on server side to allowed ' +
        'communication with server database. Offline functionality, data synchronization, SQLite database, Android Design ' +
        'Patterns, Tablet optimalization.',
        link: 'https://play.google.com/store/apps/details?id=sk.gryfonnlair.priznaj'
      },


      {
        title: 'FastPhoto',
        time: '2014',
        desc: 'Android application made to order. Camera application for doorman to make evidence of incoming and outgoing ' +
        'vehicles by photos, that are sent to server also with thumbnails history. The whole project consists of PHP server ' +
        'side and android client side (my part of job). Custom camera interface implementation Rest communication with server.'
      },

      {
        title: 'Master Diploma Theses',
        time: '2013-2014',
        desc: 'Web application for database administration, supposed to be school learning tool for SQL. Application is ' +
        'written with GWT framework, can connect by default to server’s MySQL database and reads meta information about ' +
        'stored functions and procedures, creates and executes them also executes SQL statements with some debug option. ' +
        'Supported list of database types to connect with this application can be extended by application’s bundles. Bundles ' +
        'are defined by provided API and they can be load to system by admin during the runtime, for example admin can ' +
        'create PostGreSQL bundle, upload it, and user will see this connection option in login screen, where he enters ' +
        'connection parameters.'
      },

      {
        title: 'Pradelníček',
        time: '2014',
        desc: 'AngularJS single page application that represents washing machine. Tool to sort clothes for washing machine, ' +
        'navigation and sorting by keyboard shortcuts, result of sorting is send to e-mail. When I started to learn ' +
        'front-end technologies I wanted to test them on some project, but the real reason was that clothes washing was ' +
        'my big enemy so I created this tool for my mother to help me how to sort my clothes by color.'
      },

      {
        title: 'ERNI: Junior Software Engineer',
        time: '2014',
        //TODO
        desc: ''
      },

      {
        title: 'IT portfolio',
        time: '2015',
        //TODO
        desc: ''
      }
    ];
  });
