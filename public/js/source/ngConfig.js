angular.module('ngSteve', ['ui.router', 'ngMaterial', 'ngAnimate', 'ngMessages']);

angular.module('ngSteve').config(['$stateProvider', '$mdThemingProvider',
        function($stateProvider, $mdThemingProvider){
            $stateProvider
                .state('home', {
                    url         : '',
                    templateUrl : '/html/templates/home.html',
                    controller  : 'homeController as homeCtrl'
                });

            $mdThemingProvider.theme('default')
                .primaryPalette('indigo')
                .accentPalette('light-blue')
                .warnPalette('red')
        }
    ]);

angular.module('ngSteve').controller('mainController', [function(){
    var mainCtrl = this;
    console.log('mainController loaded');
}]);