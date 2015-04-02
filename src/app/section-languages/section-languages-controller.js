'use strict';

//TODO Desc pre jazyky napisat

angular.module('portfolio.sectionLanguages')
    .controller('SectionLanguagesCtrl', function ($scope) {
        $scope.languages = [
            {
                title: 'Slovensky',
                level: 'Native',
                img: 'img/flags/flag_language_slovak.png',
                description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ' +
                'Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus ' +
                'et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ' +
                'ultricies nec, pellentesque eu, pretium'
            },
            {
                title: 'English',
                level: 'Professional working proficiency',
                img: 'img/flags/flag_language_english.png',
                description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ' +
                'Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus ' +
                'et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ' +
                'ultricies nec, pellentesque eu, pretium'
            },
            {
                title: 'German',
                level: 'Limited working proficiency',
                img: 'img/flags/flag_language_german.png',
                description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ' +
                'Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus ' +
                'et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ' +
                'ultricies nec, pellentesque eu, pretium'
            },
            {
                title: 'Russian',
                level: 'Beginner',
                img: 'img/flags/flag_language_russian.png',
                description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ' +
                'Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus ' +
                'et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ' +
                'ultricies nec, pellentesque eu, pretium'
            }
        ];
    });
