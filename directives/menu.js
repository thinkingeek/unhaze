angular.module('unHaze')
    .directive('menu',[ function(){
        return {
            restrict: "EA",
            templateUrl: 'templates/directives/menu.html',
            controller: 'menuCtrl'
        };
    }]);