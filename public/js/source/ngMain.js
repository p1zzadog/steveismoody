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