'use strict';

angular.module('portfolio', [
  'portfolio.sectionAbout',
  'portfolio.sectionExperiences',
  'portfolio.sectionLanguages',
  'portfolio.sectionSkills',
  'portfolio.sectionEducation',
  'portfolio.sectionProjects',
  'portfolio.sectionSkillsGallery',
  'portfolio.sectionContact',

  'gryfonnlair.waypoint',
  'gryfonnlair.scrollTo',

  'ngMaterial',
  'ngCookies',
  'ngTouch',
  'ngSanitize'
])
  .config(function ($mdThemingProvider) {
    //bootstrap 5091da


    $mdThemingProvider.definePalette('amazingPaletteName', {
      '50': 'ffebee',
      '100': 'ffcdd2',
      '200': 'ef9a9a',
      '300': 'e57373',
      '400': 'ef5350',
      '500': '5091DA', //stadart
      '600': 'e53935',
      '700': 'd32f2f',
      '800': '0E5FBA', //button text contact
      '900': 'b71c1c',
      'A100': 'ff8a80',
      'A200': 'ff5252',
      'A400': 'ff1744',
      'A700': 'd50000',
      'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                          // on this palette should be dark or light
      'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
        '200', '300', '400', 'A100'],
      'contrastLightColors': undefined    // could also specify this if default was 'dark'
    });
    $mdThemingProvider.theme('default')
      .primaryPalette('amazingPaletteName');
  });
