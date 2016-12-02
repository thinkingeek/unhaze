angular.module('unHaze')
    .controller('toolbarController',
        ["$scope", "$rootScope", '$element', '$mdSidenav', '$mdDialog',
            function($scope, $rootScope, $element, $mdSidenav, $mdDialog){
            $element.on('click', '.sidenav-toggle', function(){
                $mdSidenav('left').toggle();
            });
            $element.on('click', '.search-route', function(ev){
                $state.go('search');
            })
        }]
    );

