angular.module('unHaze')
    .controller('toolbarController',
        ["$scope", "$rootScope", '$mdSidenav', '$window', '$element', '$mdDialog',
            function($scope, $rootScope, $mdSidenav, $window, $element, $mdDialog){
                var sidenavToggle = angular.element(document.querySelector('.sidenav-toggle'));
                sidenavToggle.on('click', function(){
                    $mdSidenav('left').toggle()
                        .then(function(){
                            angular.element(document.getElementsByTagName('body')).toggleClass('noscroll')
                        })
                });

                angular.element($window).bind('scroll', function(){
                    var toolbarHeightTarget = getOffset(document.querySelector('.main-content')).top;
                    if(this.pageYOffset <= toolbarHeightTarget){
                        var relativeHeight = this.pageYOffset*0.7/toolbarHeightTarget;
                        $element.css({
                            'background': 'linear-gradient(to bottom,  rgba(0,0,0,'+ (relativeHeight + 0.4) +') 0%, rgba(0,0,0,'+ relativeHeight +') 100%)'
                        });
                    }
                    if(this.pageYOffset > toolbarHeightTarget){
                        $element.css({
                            'background': 'linear-gradient(to bottom,  rgba(0,0,0,1) 0%, rgba(0,0,0,1) 100%)'
                        });
                    }
                });

                angular.element(document.querySelector('.signup-popup')).on('click', function($event){
                    $mdDialog.show({
                            controller: 'loginDialogCtrl',
                            templateUrl: 'templates/dialogs/login.html',
                            parent: angular.element(document.body),
                            targetEvent: $event,
                            clickOutsideToClose:true
                        })
                        .then(function(answer) {
                            $scope.status = 'You said the information was "' + answer + '".';
                        }, function() {
                            $scope.status = 'You cancelled the dialog.';
                        });
                });


        }]
    );