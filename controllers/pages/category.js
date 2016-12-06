angular.module('unHaze')
    .controller('categoryPageCtrl',
        ["$scope", "$rootScope", '$state', '$http', function($scope, $rootScope, $state, $http){
            $http.get('data/menu.json').success(function(data){
                $scope.category = search($state.params.category, data);
                $scope.back = function(){
                    if($state.params.state != undefined){

                        $state.go($state.params.state);
                    }
                    else{
                        $state.go('home');
                    }
                }
            });

        }]
    );
function search(nameKey, array, callback){
    for (var i=0; i < array.length; i++) {
        if (array[i].route === nameKey) {
            return array[i];
        }
    }
}