angular.module('unHaze')
    .directive('navbar',[ function(){
       return {
           restrict: "EA",
           templateUrl: 'templates/directives/navbar.html',
           controller: 'navbarCtrl'
       };
    }]);
