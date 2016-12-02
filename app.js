angular.module('unHaze', ['ngAnimate', 'ngMaterial', 'ngMessages','ui.router']);

angular.module('unHaze').run(["$rootScope", function($rootScope){
    $rootScope.$on('$stateChangeStart',
        function(event, toState, toParams){
            if(toState.title != undefined){
                document.getElementsByTagName('title')[0].innerHTML = toState.title;
            }
            else if(toState.title == undefined && toParams.title != undefined){
                document.getElementsByTagName('title')[0].innerHTML = toParams.title;
            }

        })
}]);