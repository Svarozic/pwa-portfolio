'use strict';

angular.module('portfolio.sectionLanguages')
    .directive('sectionLanguages', function () {
        return {
            restrict: 'E',
            /**
             * Nahradi cely element normal tempaltou
             */
            replace: true,
            /**
             * Vlastny scope pre directivu
             */
            scope: true,
            /**
             * Oddelena tmpl cesta od rootu indexu
             */
            templateUrl: 'app/section-languages/section-language.html',
            /**
             * Cez osobitny file
             */
            controller: 'SectionLanguagesCtrl'
        };
    });