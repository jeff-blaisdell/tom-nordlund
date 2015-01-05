module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		config: {
			app: 'app',
			dist: 'dist'
		},

		clean: ['<%= config.dist %>'],

		bower_concat: {
			all: {
				dest: '<%= config.dist %>/lib/_bower.js',
				cssDest: '<%= config.dist %>/lib/_bower.css'
			}
		},

		browserify: {
			js: {
				src: '<%= config.app %>/js/app.js',
				dest: '<%= config.dist %>/js/app.js',
			}
		},

		copy: {
			all: {
				expand: true,
				cwd: '<%= config.app %>',
				src: ['**/*.html'],
				dest: '<%= config.dist %>',
			}
		},

		connect: {
			server: {
				options: {
					base: '<%= config.dist %>',
					livereload: 35729,
					open: true
				}
			}
		},

		watch: {
			options: {
				livereload: 35729
			},
			files: [
				'<%= config.app %>/**/*.js',
				'<%= config.app %>/**/*.html',
			],
			tasks: ['browserify', 'copy']
		}
	});

	grunt.registerTask('default', [
		'clean',
		'bower_concat',
		'browserify',
		'copy',
		'connect',
		'watch'
	]);
};