angular.module('unHaze')
    .service('$data',["$http", function($http){
        var $this = this,
            $baseUrl = "data/";
        $this.carousel = function(callback){
            return function(){
                $http.get($baseUrl + 'carousel.json')
                    .success(function(d){
                        callback(d);
                    })
            }();

        }
}]);