angular.module('unHaze')
    .controller('toolbarController',
        ["$scope", "$rootScope", '$mdSidenav', '$mdDialog',
            function($scope, $rootScope, $mdSidenav, $mdDialog){
                var sidenavToggle = angular.element(document.querySelector('.sidenav-toggle'));

                sidenavToggle.on('click', function(){
                    $mdSidenav('left').toggle();
                });
        }]
    );

