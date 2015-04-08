'use strict';

angular.module('portfolio.sectionEducation')
  .controller('SectionEducationCtrl', function ($scope, $timeout) {
    $scope.items = [
      {
        title: 'Gymnázium DH Svidník',
        description: 'High School',
        period: {
          from: '2001',
          to: '2009'
        }
      },
      {
        title: 'Technical University of Košice',
        description: 'Bachelor\'s Degree, Informatics',
        period: {
          from: '2009',
          to: '2012'
        }
      },
      {
        title: 'Technical University of Košice',
        description: 'Engineer\'s Degree, Informatics',
        period: {
          from: '2012',
          to: '2014'
        }
      },
      {
        title: 'Java Certified Professional',
        description: 'Java SE 6 Programmer',
        period: {
          from: '2015',
          to: ''
        }
      }
    ];

    /**
     * PRECO toto ??
     * Specialny pristup, lebo neslo to v link funcii direktivy, kedze direktiva este
     * nebola vyhodnotena s ctrl datami co boli cisla. Takze ked zbehne tento controller
     * tak po dealy malom sa setne counter up
     * Doslova ide o to aby zbehol ctrl, vykreslil data, a potom hned nato, preto 0 sec,
     * sa spustil JQuery plugin a aktivoval coutner efekty
     */
    $timeout(function () {
      $('#education').find('.counter').counterUp({
        delay: 12,
        time: 1000
      });
    }, 0);
  });
