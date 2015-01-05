angular.module('dashboard')
	.controller('DashboardController', ['$scope', 'forecastService',
		function($scope, forecastService) {
			$scope.dashboard = {
				loading: true,
				message: 'Loading...'
			};

			forecastService.getForecast().then(
				function() {
					$scope.dashboard.loading = false;
					$scope.forecast = forecastService.forecast;
				},
				function(reason) {
					$scope.dashboard.message = reason;
					$scope.error = reason;
				});
		}
	]);