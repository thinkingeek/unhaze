angular.module('unHaze')
    .service('$data',["$http", "preloader", "$rootScope", function($http, preloader, $rootScope){
        var $this = this,
            $baseUrl = "data/";
        $this.carousel = function(callback, $scope){
            return function(){
                $http.get($baseUrl + 'carousel.json')
                    .success(function(d){
                        var imageLocations = [];
                        for(var i = 0; i < d.length; i++){
                            imageLocations.push(d[i].background);
                        }
                        preloader.preloadImages( imageLocations ).then(
                            function handleResolve( imageLocations ) {
                                // Loading was successful.
                                $scope.isLoading = false;
                                angular.element(document.querySelector('body')).removeClass('loading');
                            },
                            function handleReject( imageLocation ) {
                                // Loading failed on at least one image.
                                $scope.isLoading = false;
                                $scope.isSuccessful = false;
                                console.error( "Image Failed", imageLocation );
                                console.info( "Preload Failure" );
                            },
                            function handleNotify( event ) {
                                $scope.percentLoaded = event.percent;
                                console.log( "Percent loaded:", event.percent );
                            }
                        );
                        callback(d);
                    })
            }();

        }
}]);