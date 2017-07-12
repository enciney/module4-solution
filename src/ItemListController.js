(function () {
'use strict';
angular.module('Data')
.controller('ItemListController',ItemListController)

ItemListController.$inject = ['allItems']
function ItemListController(allItems) {

     var menuItem = this ;
     menuItem.allItems =[];
     menuItem.allItems = allItems ;
  // console.log("short item : " + menuItem.allItems [1].short_name);
    menuItem.$onInit =  function () {
      // console.log("YEEES");

    }

}

})()
