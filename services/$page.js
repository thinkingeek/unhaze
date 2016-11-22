angular.module('unHaze')
    .service("$page",["$rootScope", function($rootScope){
        var $this = this;
        $this.changeTitle = function(title){
            $rootScope.page.title = title;
        }
    }]);
