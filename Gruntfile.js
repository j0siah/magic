module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		watch: {
			stylus: {
				files: [
				'*.styl'
				],
				tasks: ['stylus']
			}
		},

		stylus: {
			compile: {
				options: {
					compress: true,
					paths: ['stylus'],
					import: [
						'nib/*'
					]
				},
				files: {
					'<%= css_output_location %>': ['*.styl']
				}
			}
		},

		'css_output_location': 'magic.css',

	});

	// Load grunt plugins.
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-contrib-watch');

};