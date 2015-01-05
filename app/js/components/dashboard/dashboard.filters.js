angular.module('dashboard')
	.filter('day', function() {
		return function(input) {
			var output;
			output = moment.unix(input);
			output = output.format('dddd, MMM d');
			return output;
		}
	})
	.filter('degrees', function() {
		return function(input) {
			return input + '\u00B0 ' + 'Fahrenheit';
		}
	})
	.filter('wind', function() {
		return function(input) {
			return input + ' mph';
		}
	})
	.filter('clouds', function() {
		return function(input) {
			var output;

			if (input === 0) {
				output = 'Clear';
			} else if (input > 0 && input <= 0.4) {
				output = 'Scattered';
			} else if (input > 0.4 && input <= 0.75) {
				output = 'Broken';
			} else if (input > 0.75) {
				output = 'Overcast';
			}

			return output;
		};
	})
	.filter('precipitation', function() {
		return function(input) {
			var output;

			if (!angular.isUndefined(input)) {
				output = input.charAt(0).toUpperCase() + input.substring(1);
			} else {
				output = 'None'
			}

			return output;
		}
	});