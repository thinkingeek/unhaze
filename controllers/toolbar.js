angular.module('unHaze')
    .controller('toolbarController',
        ["$scope", "$rootScope", '$mdSidenav', '$window', '$element', '$mdDialog',
            function($scope, $rootScope, $mdSidenav, $window, $element, $mdDialog){
                var sidenavToggle = angular.element(document.querySelector('.sidenav-toggle'));
                sidenavToggle.on('click', function(){
                    $mdSidenav('left').toggle()
                        .then(function(){
                            if(!angular.element(document.getElementsByTagName('menu')).hasClass('loaded')){
                                angular.element(document.getElementsByTagName('menu')).addClass('loaded');
                            }
                        })
                });

                angular.element(document.querySelector('.parent-content')).bind('scroll', function(){
                    var toolbarHeightTarget = 140;
                    if(this.scrollTop >= toolbarHeightTarget){
                        $element.addClass('opaque');
                        angular.element(document.getElementsByTagName('body')).addClass('toolbar-opaque');

                    }
                    else if(this.scrollTop < toolbarHeightTarget && $element.hasClass('opaque')){
                        $element.removeClass('opaque');
                        angular.element(document.getElementsByTagName('body')).removeClass('toolbar-opaque')
                    }
                });

                angular.element(document.querySelector('.signup-popup')).on('click', function($event){
                    $mdDialog.show({
                            template: '<md-dialog><h1>Hello World!</h1></md-dialog>',
                            parent: angular.element(document.body),
                            clickOutsideToClose:true
                        })
                        .finally(function() {
                            console.log("Hello World!!")
                        });

                });


        }]
    );