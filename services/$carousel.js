angular.module('unHaze')
    .factory('$carousel',["$http", "$data", function($http, $data){
        var $this = this,
            carouselData = [];
/*        $this.getData = function(callback){
            return function(){

            }();

        }*/
        var obj = {};
        obj.getData = function(callback){
            $data.carousel(function(data){
                callback(data);
                obj.data = data;
            });
        };
        return obj;
    }]);
