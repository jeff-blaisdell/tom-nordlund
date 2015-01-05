require('./dashboard');
require('./forecast');
require('./navbar');
require('./preferences');

angular.module('components', [
	'dashboard',
	'forecast',
	'navbar',
	'preferences'
]);

module.exports = 'components';