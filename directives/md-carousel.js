angular.module('unHaze')
    .directive('mdCarousel',[function(){
       return {
           restrict: 'E',
           templateUrl:'templates/directives/md_carousel.html',
           controller: "mdCarouselCtrl"
       }
    }]);
