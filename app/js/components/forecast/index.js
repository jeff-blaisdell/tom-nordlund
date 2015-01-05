angular.module('forecast', ['geolocation']);

require('./forecast.service');
require('./forecast.evaluation.service');
require('./forecast.interceptor');

module.exports = 'forecast';