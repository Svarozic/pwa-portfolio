'use strict';

angular.module('gryfonnLair.morphingModalWindow')
  .directive('morphingModalWindow', function () {
    return {
      restrict: 'E',
      replace: true,
      //two-way binding, len koli tomu ze one-way sa berie ako text vzdy, a ja potrebuje objekt
      scope: {
        project: '=selectedProject'
      },
      templateUrl: 'app/section-projects/morphing-modal-window/morphing-modal-window.html'
    };
  });
