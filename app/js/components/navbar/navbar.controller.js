angular.module('navbar')
	.controller('NavbarController', ['$scope', '$location',
		function($scope, $location) {
			$scope.changePath = function(path) {
				$location.path(path);
			};
		}
	]);