angular.module('unHaze')
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/',
                views: {
                   "page":{
                       templateUrl: 'templates/pages/home.html',
                       controller: "homeCtrl"
                   }
                },
                title:'unHaze - Home',
                onEnter: function($state){
                    angular.element(document.querySelector('body')).addClass($state.name);
                },
                onExit: function($state){
                    angular.element(document.querySelector('body')).removeClass($state.name);
                }
            })
            .state('search', {
                url: '/search',
                views: {
                    "page":{
                        templateUrl: 'templates/pages/search.html',
                        controller: "searchCtrl"
                    }
                },
                title:'unHaze - Search',
                onEnter: function($state){
                    angular.element(document.querySelector('body')).addClass($state.name);

                },
                onExit: function($state){
                    angular.element(document.querySelector('body')).removeClass($state.name);
                }
            });
    });
