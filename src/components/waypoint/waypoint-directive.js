'use strict';

/**
 * Requirements:
 * MODERNIZR    - pre checkovanie podpori csstransition
 *
 * WAYPOINTS    - pre spustenie ak na to nascrollujem
 * http://imakewebthings.com/waypoints/
 *
 * ANIMATE      - pre pridanie classy animated a konretnej animacie
 * http://daneden.github.io/animate.css/
 *
 * POUZITIE:
 * <e waypoint-animation animation="ANIMATION_CLASS" [hover-animation="ANIMATION_CLASS"] >
 */

/* global Modernizr */

angular.module('gryfonnlair.waypoint', [])
    .directive('waypointAnimation', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                if (Modernizr.csstransitions) {


                    if (attrs.animation) {
                        var createAnimation = function () {
                            var delayTime = 0;
                            element.css({opacity: '0'});
                            element.waypoint(function () {
                                    delayTime += 150;
                                    element.delay(delayTime).queue(function (next) {
                                        element.toggleClass('animated');
                                        element.toggleClass(attrs.animation);
                                        delayTime = 0;
                                        next();
                                    });
                                },
                                {
                                    offset: '95%',
                                    triggerOnce: true
                                });
                        };
                        createAnimation();
                    }
                    if (attrs.hoverAnimation) {
                        var createHoverAnimation = function () {
                            element.hover(function () {
                                element.css({opacity: 1});
                                element.addClass('animated');
                                element.removeClass(attrs.animation);
                                element.addClass(attrs.hoverAnimation);
                            }, function () {
                                element.removeClass('animated');
                                element.removeClass(attrs.hoverAnimation);
                            });
                        };
                        createHoverAnimation();
                    }


                }//endif Modernizr
            }
        };
    });
