angular.module('forecast')
	.config(['$httpProvider',
		function($httpProvider) {
			$httpProvider.interceptors.push('forecastInterceptor');
		}
	])
	.factory('forecastService', function($resource, $q, geolocation) {
		var self = this;

		self.getLocation = function() {
			var deferred = $q.defer();

			if (angular.isUndefined(self.coords)) {
				geolocation.getLocation().then(
					function(data) {
						self.coords = data.coords;
						deferred.resolve();
					},
					function(reason) {
						deferred.reject(reason);
					});
			} else {
				deferred.resolve();
			}

			return deferred.promise;
		};

		self.getForecast = function() {
			var deferred = $q.defer(),
				url = 'https://api.forecast.io/forecast/8eb9d2bf4085e833ebcbeb5a740a033d/' + self.coords.latitude + ',' + self.coords.longitude,
				resource = $resource(
					url, {
						callback: "JSON_CALLBACK",
						exclude: 'currently,flags,hourly,minutely'
					}, {
						get: {
							method: "JSONP",
							isArray: false
						}
					}
				);

			resource.get().$promise.then(
				function(response) {
					self.forecast = response.daily;
					deferred.resolve(response);
				},
				function(reason) {
					console.error(reason);
					deferred.reject('There was a problem loading the forecast. Please try again.');
				}
			);

			return deferred.promise;
		};

		return self;
	});