// File: chapter5/simple-angularjs-service/app.js
angular.module('notesApp', [])
.controller('MainCtrl', [function() {
var self = this;
self.tab = 'first';
self.open = function(tab) {
self.tab = tab;
};
}])
.controller('SubCtrl', ['ItemService',
function(ItemService) {
var self = this;
self.list = function(tabVal) {
return ItemService.list(tabVal);
};
self.add = function(tabVal) {
ItemService.add(tabVal,{
id: self.list(tabVal).length + 1,
label: 'Item ' + self.list(tabVal).length
});
};
}])
.factory('ItemService', [function() {
var items = [
{id: 1, label: 'Item 0'},
{id: 2, label: 'Item 1'}
];
var tabItems={'first':items,'second':items};
return {
list: function(tabVal) {
return tabItems[tabVal];
},
add: function(tabVal,item) {
console.log(tabVal);
console.log(item);
console.log(tabItems[tabVal]);	
tabItems[tabVal].push(item);
console.log(tabItems);
}
};
}]);