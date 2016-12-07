angular.module('unHaze')
    .controller('menuCtrl',
        ["$scope", '$http', '$element', '$state', '$mdSidenav', function($scope, $http, $element, $state, $mdSidenav){
            $http.get('data/menu.json').success(function(data){
                $scope.menu = data;
                $element.addClass('loaded');
            });
            $scope.stateName = $state.current.name;
            $scope.$state = $state;
            $scope.go = function($element, category){
                $state.go('categoryspecific', {'category': category, state: $scope.stateName});
                $mdSidenav('left').close();
            };
        }]
    );