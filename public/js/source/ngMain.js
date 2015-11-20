angular.module('ngSteve').controller('mainController', ['$mdSidenav', function($mdSidenav){
    var mainCtrl = this;

    mainCtrl.sideNavOpen = function(){
        $mdSidenav('left').open();
    };

    mainCtrl.sideNavClose = function(){
        $mdSidenav('left').close();
    };


    mainCtrl.grid = {
        left  : "90",
        mid   : "5",
        right : "5"
    };

    mainCtrl.gridFocus = function(id){
        if (id === 'left'){
            mainCtrl.grid.left = '90';
            mainCtrl.grid.mid = '5';
            mainCtrl.grid.right = '5';
        }
        if (id === 'mid'){
            mainCtrl.grid.left = '5';
            mainCtrl.grid.mid = '90';
            mainCtrl.grid.right = '5';
        }
        if (id === 'right'){
            mainCtrl.grid.left = '5';
            mainCtrl.grid.mid = '5';
            mainCtrl.grid.right = '90';
        }

    };


    console.log('mainController loaded');
}]);