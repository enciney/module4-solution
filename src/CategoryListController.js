(function () {
'use strict';
angular.module('Data')
.controller('CategoryListController',CategoryListController);

CategoryListController.$inject = ['MenuDataService','allCategories']
function CategoryListController(MenuDataService,allCategories) {

     var cat = this ;
     cat.allCategories =[];
     cat.allCategories = allCategories ;
    //  console.log(cat.allCategories[1].short_name);
    cat.$onInit =  function () {
      // console.log("YEEES");

    }

}

})()
