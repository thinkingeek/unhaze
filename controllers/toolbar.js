angular.module('unHaze')
    .controller('toolbarController',
        ["$scope", "$rootScope", '$element', '$mdSidenav', '$mdDialog',
            function($scope, $rootScope, $element, $mdSidenav, $mdDialog){
            $element.on('click', '.sidenav-toggle', function(){
                $mdSidenav('left').toggle();
            });
            $element.on('click', '.search-route', function(ev){
                $mdDialog.show(
                    $mdDialog.alert()
                        .parent(angular.element(document.querySelector('.popup-container')))
                        .clickOutsideToClose(true)
                        .title('This is an alert title')
                        .textContent('You can specify some description text in here.')
                        .ariaLabel('Alert Dialog Demo')
                        .ok('Got it!')

                );
            })
        }]
    );

