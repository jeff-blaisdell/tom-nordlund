angular.module('preferences')
	.controller('PreferencesController', ['$scope', 'preferencesService',
		function($scope, preferencesService) {
			$scope.preferences = preferencesService.preferences;
		}
	]);