angular.module('stockMarketApp')
.directive('stockWidget', [function() {
return {
template: '<div class="stock-dash">' +
'Name: ' +
'<span class="stock-name"' +
'ng-bind="stock.name">' +
'</span>' +
';	Price: ' +
'<span class="stock-price"' +
'ng-bind="stock.price | currency">' +
'</span>' +
';	Percentage Change: ' +
'<span class="stock-change"' +
'ng-bind="mainCtrl.getChange(stock) + \'%\'">' +
'</span>' +
'</div>'
};
}]);