angular.module('unHaze')
    .controller('mdCarouselCtrl',["$scope", "$element", "$data", "$compile",
        function($scope, $element, $data, $compile){
            $data.carousel(function(data){
                $scope.slideData = data;
                setTimeout(function(){
                    $scope.index = 0;
                    $scope.slideElements = $element.find('.slides').children();
                    $scope.slideParent = $element.find('.slides');
                    $scope.slideParent.css({'width': ($scope.slideElements.length*100) + '%'});
                }, 1);
            });

            $scope.changeToIndex = function(index){
                var translateFigure = (-(index*100)/$scope.slideElements.length) + '%,0,0';
                $scope.slideParent.css({'transform':'translate3d(' + translateFigure + ')'});
                $scope.index = index;
                $scope.$apply()

            };
            $element.on('click', '.left', function(){
                if($scope.index > 0){
                    $scope.changeToIndex($scope.index - 1);
                }

            });
            $element.on('click', '.right', function(){
                if($scope.index < ($scope.slideElements.length - 1)){
                    $scope.changeToIndex($scope.index + 1);
                }
            });

        }]);

