(function () {
'use strict';
angular.module('Data')
.component('category',{
    templateUrl : "src/views/categoriesComponent.html",
    bindings : {
        allCategories : '<'

    }

});
})()
