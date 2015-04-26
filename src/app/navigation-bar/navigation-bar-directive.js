'use strict';

/* global $ */

angular.module('portfolio.navigationBar')
  .directive('navigationBar', function () {
    return {
      restrict: 'E',
      replace: true,
      scope: true,
      templateUrl: 'app/navigation-bar/navigation-bar.html'
    };
  })

  /*
   Template nezatvarala menu tak som spravil custom handle situacie. Ak je menu roztiahnute tak
   znova kliknem button.
   */
  .directive('onClickCloseNav', function () {
    return {
      restrict: 'A',
      link: function (scope, element) {
        element.click(function () {
          var expandedNavMenu = $('#navigation');
          if (expandedNavMenu.hasClass('collapse') && expandedNavMenu.hasClass('in')) {
            $('.navbar-header button').click();
          }
        });
      }
    };
  });
