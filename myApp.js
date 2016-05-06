angular.module('myApp', [])
	.controller('MultiplicationCtrl', function($scope, $attrs) {
		$scope.numberLimit = $attrs.initialNumberLimit || 10;
		$scope.numbers = function() {
			var numbers = [];
			for (var i=1; i<=$scope.numberLimit; i++) {
				numbers.push(i);
			}
			return numbers;
		}
	    $scope.compute = function(a,b) {
	        return a * b;
	    };
	});