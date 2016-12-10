angular.module('unHaze', ['ngAnimate', 'ngMaterial', 'ngMessages','ui.router']);

angular.module('unHaze').run(["$rootScope", "$window", function($rootScope, $window){
    $rootScope.$on('$stateChangeStart',
        function(event, toState, toParams){
            if(toState.title != undefined){
                document.getElementsByTagName('title')[0].innerHTML = toState.title;
            }
            else if(toState.title == undefined && toParams.title != undefined){
                document.getElementsByTagName('title')[0].innerHTML = toParams.title;
            }

        });
    angular.element($window).bind("scroll", function() {
        var mainContent = angular.element(document.querySelector('md-content.main-content'));
    });
}]);
angular.module('unHaze').config(function($mdThemingProvider){
/*
    $mdThemingProvider.definePalette('WhiteScale', {
        '50': 'ffebee',
        '100': 'ffcdd2',
        '200': 'ef9a9a',
        '300': 'e57373',
        '400': 'ef5350',
        '500': 'f44336',
        '600': 'e53935',
        '700': 'd32f2f',
        '800': 'c62828',
        '900': 'b71c1c',
        'A100': 'ff8a80',
        'A200': 'ff5252',
        'A400': 'ff1744',
        'A700': 'd50000',
        'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                            // on this palette should be dark or light

        'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
            '200', '300', '400', 'A100'],
        'contrastLightColors': undefined    // could also specify this if default was 'dark'
    });
*/

});