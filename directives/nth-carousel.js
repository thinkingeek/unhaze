angular.module('unHaze')
    .directive('nthCarousel',[function(){
        return {
            restrict: 'E',
            templateUrl:'templates/directives/nth_carousel.html',
            controller: "nthCarouselCtrl"
        }
    }]);
