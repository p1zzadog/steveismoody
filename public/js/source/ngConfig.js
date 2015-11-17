angular.module('ngSteve', ['ui.router', 'ngMaterial', 'ngAnimate', 'ngMessages']);

angular.module('ngSteve').config(['$stateProvider', '$mdThemingProvider',
        function($stateProvider, $mdThemingProvider){
            $stateProvider
                .state('index', {
                    url         : '',
                    templateUrl : '/html/templates/home.html',
                    controller  : 'homeController as homeCtrl'
                })
                .state('home', {
                    url         : '/home',
                    templateUrl : '/html/templates/home.html',
                    controller  : 'homeController as homeCtrl'
                })
                .state('about', {
                    url         : '/about',
                    templateUrl : '/html/templates/about.html',
                    controller  : 'aboutController as aboutCtrl'
                })
                .state('projects', {
                    url         : '/projects',
                    templateUrl : '/html/templates/projects.html',
                    controller  : 'projectController as projectCtrl'
                });

            $mdThemingProvider.theme('default')
                .primaryPalette('indigo')
                .accentPalette('light-blue')
                .warnPalette('red')
        }
    ]);

angular.module('ngSteve').controller('mainController', ['$mdSidenav', function($mdSidenav){
    var mainCtrl = this;

    mainCtrl.sideNavOpen = function(){
        $mdSidenav('left').open();
    };

    mainCtrl.sideNavClose = function(){
        $mdSidenav('left').close();
    };


    console.log('mainController loaded');
}]);