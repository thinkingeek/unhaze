angular.module('unHaze')
    .controller('toolbarController',
        ["$scope", "$rootScope", '$element', '$mdSidenav',
            function($scope, $rootScope, $element, $mdSidenav){
            $element.on('click', '.sidenav-toggle', function(){
                $mdSidenav('left').toggle();
            });
        }]
    );

