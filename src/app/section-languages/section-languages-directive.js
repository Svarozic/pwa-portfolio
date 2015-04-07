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
            templateUrl: 'app/section-languages/section-languages.html',
            /**
             * Cez osobitny file
             */
            controller: 'SectionLanguagesCtrl',
          link: function (scope, element) {
            //jqlite verzia
            //element.children().eq(1).parallax("50%", 0.1);

            //JQuery lebo uz ho mam inde
            element.parallax('50%', 0.1);
          }
        };
    });
