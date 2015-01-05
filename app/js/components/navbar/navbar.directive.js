angular.module('navbar')
	.directive('navbar', function() {
		return {
			restrict: 'E',
			templateUrl: 'js/components/navbar/navbar.html'
		}
	});