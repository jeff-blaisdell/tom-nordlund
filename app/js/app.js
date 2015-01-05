require('angular-route/angular-route');
require('angular-resource/angular-resource');

require('./components');

angular.module('app', [
	'ngRoute',
	'ngResource',
	'components'
]);

require('./config');