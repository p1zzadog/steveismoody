angular.module('ngSteve').controller('mainController', ['$mdSidenav', '$mdMedia', '$scope', function($mdSidenav, $mdMedia, $scope){
    var mainCtrl = this;

    mainCtrl.sideNavOpen = function(){
        $mdSidenav('left').open();
    };

    mainCtrl.sideNavClose = function(){
        $mdSidenav('left').close();
    };


    mainCtrl.grid = {
        left  : {
            flex   : "90",
            active : true
        },
        mid   : {
            flex   : "5",
            active : false
        },
        right : {
            flex   : "5",
            active : false
        },
        focus : function(id){

            console.log("'mainCtrl.grid.focus('" + id + "') runs");
            if (id === 'left'){
                mainCtrl.grid.left.flex    = '90';
                mainCtrl.grid.left.active  = true;
                mainCtrl.grid.mid.flex     = '5';
                mainCtrl.grid.mid.active   = false;
                mainCtrl.grid.right.flex   = '5';
                mainCtrl.grid.right.active = false;

            }
            if (id === 'mid'){
                mainCtrl.grid.left.flex    = '5';
                mainCtrl.grid.left.active  = false;
                mainCtrl.grid.mid.flex     = '90';
                mainCtrl.grid.mid.active   = true;
                mainCtrl.grid.right.flex   = '5';
                mainCtrl.grid.right.active = false;
            }
            if (id === 'right'){
                mainCtrl.grid.left.flex    = '5';
                mainCtrl.grid.left.active  = false;
                mainCtrl.grid.mid.flex     = '5';
                mainCtrl.grid.mid.active   = false;
                mainCtrl.grid.right.flex   = '90';
                mainCtrl.grid.right.active = true;
            }
        }
    };

    $scope.$watch(function() {
        return $mdMedia('sm');
    }, function() {
        mainCtrl.smallScreen = $mdMedia('sm')
    });

    //mainCtrl.smallScreen = $mdMedia('sm');

    console.log('mainController loaded');
}]);