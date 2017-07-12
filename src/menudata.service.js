(function () {
'use strict';

angular.module('Data')
.service('MenuDataService',MenuDataService );

MenuDataService.$inject = ['$http'];
function MenuDataService ($http) {
var allCategories = [];
var menuData = this ;

menuData.getAllCategories = function () {

  return $http({

    method : "GET",
    url : ("https://davids-restaurant.herokuapp.com/categories.json")
  }).
  then(function (result) {

    allCategories = result.data;
    // console.log("data : " +  allCategories[1].short_name);
    return allCategories;
  });

};

menuData.getItemsForCategory = function (categoryShortName) {
// console.log("categoryShortName : " + categoryShortName);
  return $http ({

    method : "GET",
    url : ("https://davids-restaurant.herokuapp.com/menu_items.json"),
    params : {"category" : categoryShortName}
  }).
  then(function (result) {
    // console.log("SUCCESS");
    return result.data.menu_items;
  });

};



}

})();
