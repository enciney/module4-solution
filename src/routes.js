(function () {
'use strict';
angular.module('MenuApp')
.config(RouterFunct);
RouterFunct.$inject = ['$stateProvider', '$urlRouterProvider'];
function RouterFunct($stateProvider,$urlRouterProvider) {

  $urlRouterProvider.otherwise('/');


  $stateProvider.state('homePage',{
      url : '/',
      templateUrl:'src/views/home.html'

  })

  .state('categoryList',{

      url : '/category',
      templateUrl:'src/views/category.html',
      controller: 'CategoryListController as cat',
      resolve:
      {
        allCategories : ['MenuDataService',function (MenuDataService) {

          return MenuDataService.getAllCategories().then(function (result) {
            return result;
          })


        }]
      }

  })

  .state('itemList',{
       url : '/items/{shortName}',   // URL olmadan da yönlenme yapılabilir
      templateUrl : 'src/views/item.html',
      controller: 'ItemListController as menuItem',
      resolve:
      {
        allItems : ['MenuDataService','$stateParams',function (MenuDataService,$stateParams) {
          console.log("aaaa");
          return MenuDataService.getItemsForCategory($stateParams.shortName).then(function (result) {
            return result;
          })


        }]
      }


  })

}


})()
