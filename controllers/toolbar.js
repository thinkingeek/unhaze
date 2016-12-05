angular.module('unHaze')
    .controller('toolbarController',
        ["$scope", "$rootScope", '$mdSidenav', '$window', '$element',
            function($scope, $rootScope, $mdSidenav, $window, $element){
                var sidenavToggle = angular.element(document.querySelector('.sidenav-toggle'));
                sidenavToggle.on('click', function(){
                    $mdSidenav('left').toggle();
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
        }]
    );