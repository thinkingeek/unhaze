angular.module('unHaze').controller('nthCarouselCtrl', ['$scope', '$data',
    function($scope, $data){
        $data.carousel(function(data){
            $scope.slides = data;
            $scope.selectedIndex = 0;
        }, $scope);
        var controlLeft = angular.element(document.querySelector('.control.left'));
        var controlRight = angular.element(document.querySelector('.control.right'));
        var indicator = angular.element(document.querySelector('.indicator li'));

        controlLeft.on('click', function(){
            if($scope.selectedIndex > 0){
                var selected = $scope.selectedIndex;
                $scope.selectedIndex = selected - 1;
                $scope.$apply()
            }
        });
        controlRight.on('click', function(){
            if($scope.selectedIndex < ($scope.slides.length - 1)){
                var selected = $scope.selectedIndex;
                $scope.selectedIndex = selected + 1;
                $scope.$apply()
            }
        });
        $scope.setSelectedIndex = function(index){
            if(-1 < index < $scope.slides.length){
                $scope.selectedIndex = index;
            }
        }
    }
]);
