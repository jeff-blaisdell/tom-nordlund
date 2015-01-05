angular.module('forecast')
	.factory('forecastEvaluationService', function(preferencesService) {
		var self = this;

		self.temperature = function(temperatureMax) {
			var temperature = {},
				preference = preferencesService.preferences.temperature;

			temperature.val = Math.floor(temperatureMax);

			switch (preference) {
				case 'cold':
					temperature.nice = (temperature.val <= 40) ? true : false;
					break;
				case 'warm':
					temperature.nice = (temperature.val > 40 && temperature.val <= 80) ? true : false;
					break;
				case 'hot':
					temperature.nice = (temperature.val > 80) ? true : false;
					break;
			}

			return temperature;
		};

		self.wind = function(windSpeed) {
			var wind = {},
				preference = preferencesService.preferences.wind;

			wind.val = Math.ceil(windSpeed);

			switch (preference) {
				case 'no':
					wind.nice = (wind.val <= 10) ? true : false;
					break;
				case 'yes':
					wind.nice = (wind.val > 10) ? true : false;
					break;
			}

			return wind;
		};

		self.clouds = function(cloudCover) {
			var clouds = {},
				preference = preferencesService.preferences.clouds;

			clouds.val = cloudCover;

			switch (preference) {
				case 'clear':
					clouds.nice = (clouds.val === 0) ? true : false;
					break;
				case 'scattered':
					clouds.nice = (clouds.val <= 0.4) ? true : false;
					break;
				case 'broken':
					clouds.nice = (clouds.val > 0.4 && clouds.val <= 0.75) ? true : false;
					break;
				case 'overcast':
					clouds.nice = (clouds.val > 0.75) ? true : false;
					break;
			}

			return clouds;
		};

		self.precipitation = function(precipType) {
			var precipitation = {},
				preference = preferencesService.preferences.precipitation;

			if (!angular.isUndefined(precipType)) {
				precipitation.val = precipType;
			} else {
				precipitation.val = 'none';
			}

			switch (preference) {
				case 'rain':
					precipitation.nice = (precipitation.val === 'rain') ? true : false;
					break;
				case 'snow':
					precipitation.nice = (precipitation.val === 'snow') ? true : false;
					break;
				case 'sleet':
					precipitation.nice = (precipitation.val === 'sleet') ? true : false;
					break;
				case 'hail':
					precipitation.nice = (precipitation.val === 'hail') ? true : false;
					break;
				case 'none':
					precipitation.nice = (precipitation.val === 'none') ? true : false;
					break;
			}

			return precipitation;
		}

		return self;
	});