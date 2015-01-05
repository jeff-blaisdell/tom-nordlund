angular.module('app')
	.config(['$routeProvider',
		function($routeProvider) {
			$routeProvider
				.when('/preferences', {
					controller: 'PreferencesController',
					templateUrl: 'js/components/preferences/preferences.html'
				})
				.when('/dashboard', {
					controller: 'DashboardController',
					templateUrl: 'js/components/dashboard/dashboard.html',
					resolve: {
						coords: ['forecastService',
							function(forecastService) {
								return forecastService.getLocation();
							}
						]
					}
				})
				.otherwise({
					redirectTo: '/dashboard'
				});
		}
	]);