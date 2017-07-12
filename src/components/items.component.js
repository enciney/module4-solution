(function () {
'use strict';
angular.module('Data')
.component('items',{
  templateUrl : "src/views/itemsComponent.html",
  bindings : {
      allItems : '<'
}
});
})()
