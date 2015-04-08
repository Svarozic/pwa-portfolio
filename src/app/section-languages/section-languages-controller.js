'use strict';

angular.module('portfolio.sectionLanguages')
  .controller('SectionLanguagesCtrl', function ($scope) {
    $scope.languages = [
      {
        title: 'Slovensky',
        level: 'Native',
        img: 'img/flags/flag_language_slovak.png'
      },
      {
        title: 'English',
        level: 'Professional working proficiency',
        img: 'img/flags/flag_language_english.png'
      },
      {
        title: 'Deutsch',
        level: 'Limited working proficiency',
        img: 'img/flags/flag_language_german.png'
      },
      {
        title: 'русский',
        level: 'Beginner',
        img: 'img/flags/flag_language_russian.png'
      }
    ];
  });
