angular.module('unHaze')
    .controller('productsCtrl',
        ["$scope", "$rootScope", "$http", function($scope, $rootScope, $http){
            $rootScope.products = [];
            $http.get('data/products.json')
                .success(function(d){
                    $rootScope.products = d;
                });
            $scope.categorisedProducts = function(category){
                var products = [];
                for(var i = 0; i < $rootScope.products.length; i++){
                    if($rootScope.products[i].idealFor == category || $rootScope.products[i].type == category ){
                        products.push($rootScope.products[i]);
                    }
                }
                return products;
            }
        }]
    );