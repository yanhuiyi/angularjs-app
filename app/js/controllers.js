'use strict';

/* Controllers */

function OrderListCtrl($scope, $http, $filter) {
	var source = [];
	
	$http.get('orders/orders.json').success(function(data) {
		$scope.orders = data;
		source = data;

		
	});
	
	$scope.filter = function(){
	
		if($scope.search.track !== undefined && $scope.search.track === false) {
			delete $scope.search.track;
		}
		
		if($scope.datepicker.track !== undefined) {
			$scope.orders = $filter('filter')(source, $scope.datepicker.date);
		}
			
		$scope.orders = $filter('filter')(source, $scope.search);
	};
};
