angular.module('unHaze')
    .filter('trust_as_html', ['$sce', function($sce){
        return function(text) {
            return $sce.trustAsHtml(text);
        };
    }]);
