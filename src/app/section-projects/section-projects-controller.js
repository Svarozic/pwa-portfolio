'use strict';

/* global $ */

angular.module('portfolio.sectionProjects')
  .controller('SectionProjectsCtrl', function ($scope, ProjectsFactory) {

    //projekty cez factory
    $scope.projects = ProjectsFactory;

    //nakliknuta galeria pre projekt
    $scope.selectedProject = null;

    $scope.onGalleryOpen = function (project) {
      $scope.selectedProject = project;
      var modal = $('#projects-modal-window');
      modal.css('visibility', 'visible');
      enableScroll(false);
    };


    //TODO mobil dava event dalej na va bar
    $scope.onGalleryClose = function (e) {
      e.stopPropagation();
      e.preventDefault();
      var modal = $('#projects-modal-window');
      modal.css('visibility', 'hidden');
      enableScroll(true);
      $scope.selectedProject = null;
    };

    function enableScroll(flag) {
      $('body').css('overflow', flag ? 'auto' : 'hidden');
    }
  });
