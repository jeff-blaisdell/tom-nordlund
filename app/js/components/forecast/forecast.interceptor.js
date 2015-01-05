angular.module('forecast')
	.factory('forecastInterceptor', function(forecastEvaluationService) {
		return {
			response: function(response) {
				var daily, day;

				if (!angular.isUndefined(response.data.daily)) {
					daily = angular.copy(response.data.daily);

					response.data.daily = [];

					angular.forEach(daily.data, function(d, i) {
						day = {};
						day.time = d.time;
						day.icon = d.icon;
						day.summary = d.summary;

						day.temperature = forecastEvaluationService.temperature(d.temperatureMax);
						day.wind = forecastEvaluationService.wind(d.windSpeed);
						day.clouds = forecastEvaluationService.clouds(d.cloudCover);
						day.precipitation = forecastEvaluationService.clouds(d.precipType);

						response.data.daily.push(day);
					});
				}

				return response;
			}
		}
	});