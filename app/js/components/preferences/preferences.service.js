angular.module('preferences')
	.factory('preferencesService', function() {

		var self = this;

		self.preferences = {
			temperature: 'warm',
			precipitation: 'none',
			wind: 'no',
			clouds: 'clear'
		};

		return self;

	});