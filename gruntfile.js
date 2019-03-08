/* Project configuration */
var themePath = 'www/content/themes/chilli-codes';

module.exports = function (grunt) {
	require('jit-grunt')(grunt);
	require('time-grunt')(grunt);

	grunt.initConfig(
		{
			watch:       {
				sass: {
					files: [themePath + '/assets/scss/**/*.scss'],
					tasks: ['sass', 'postcss', 'cssmin']
				},
				vendor_styles:   {
					files: [themePath + '/assets/css/vendor-styles.json'],
					tasks: ['cssmin:vendorStyles']
				},
				js:   {
					files: [
						themePath + '/assets/js/**/*.js',
						'!' + themePath + '/assets/js/app.js',
						'!' + themePath + '/assets/js/vendor.js',
						'!' + themePath + '/assets/js/script.min.js'
					],
					tasks: ['concat:app', 'uglify:default']
				},
				app_scripts:   {
					files: [themePath + '/assets/js/app-scripts.json'],
					tasks: ['concat:app', 'uglify:default']
				},
				vendor_scripts:   {
					files: [themePath + '/assets/js/vendor-scripts.json'],
					tasks: ['concat:vendor', 'uglify:default']
				},
				atomic: {
					files: [
						themePath + '/**/*.php'
					],
					tasks: ['atomizer', 'postcss', 'cssmin']
				}
			},
			atomizer: {
				dev: {
					options: {
						configFile: 'atomic.config.js'
					},
					files: [{
						src: [
							themePath + '/**/*.php'
						],
						dest: themePath + '/assets/css/atomic.css'
					}]
				}
			},
			sass:        {
				dist: {
					options: {
						outputStyle: 'compressed',
						sourceMap:   false
					},
					files:   {
						'www/content/themes/chilli-codes/assets/css/style.css' : themePath + '/assets/scss/style.scss'
					}
				}
			},
			postcss:     {
				options: {
					map: false,
					processors: [
						require('autoprefixer')({browsers: ['last 3 versions', 'ios 6', 'ie 9']}),
						require('postcss-flexbugs-fixes'),
						require('postcss-object-fit-images')
					]
				},
				dist:    {
					src: [
						themePath + '/assets/css/style.css',
						themePath + '/assets/css/atomic.css'
					]
				}
			},
			stylelint: {
				options: {
					failOnError: false,
					syntax: 'scss',
					fix: true
				},
				src: [
					themePath + '/assets/scss/**/*.scss'
				]
			},
			cssmin:      {
				options: {
					level: {
						1: {
							specialComments: 0
						}
					}
				},
				vendorStyles: {
					files: [{
						src: grunt.file.readJSON(themePath + '/assets/css/vendor-styles.json'),
						dest: themePath + '/assets/css/vendor.css'
					}]
				},
				combine: {
					files: [{
						src:  [
							themePath + '/assets/css/vendor.css',
							themePath + '/assets/css/style.css',
							themePath + '/assets/css/atomic.css'
						],
						dest: themePath + '/assets/css/style.min.css'
					}]
				}
			},
			uglify:      {
				options:   {
					manage: false
				},
				default: {
					files: [{
						src:  [
							themePath + '/assets/js/vendor.js',
							themePath + '/assets/js/app.js'
						],
						dest: themePath + '/assets/js/script.min.js'
					}]
				}
			},
			concat: {
				options: {
					separator: '\n;'
				},
				app: {
					files: [{
						src:  grunt.file.readJSON(themePath + '/assets/js/app-scripts.json'),
						dest: themePath + '/assets/js/app.js'
					}]
				},
				vendor: {
					files: [{
						src:  grunt.file.readJSON(themePath + '/assets/js/vendor-scripts.json'),
						dest: themePath + '/assets/js/vendor.js'
					}]
				}
			},
			shell:       {
				deployDev:  {
					command: 'php vendor/dg/ftp-deployment/deployment deployment.dev.php'
				},
				deployLive: {
					command: 'php vendor/dg/ftp-deployment/deployment deployment.live.php'
				}
			}
		}
	);

	grunt.registerTask('default', ['compile', 'watch']);
	grunt.registerTask('compile_css', ['atomizer', 'sass', 'stylelint', 'postcss', 'cssmin']);
	grunt.registerTask('compile_js', ['concat:vendor', 'concat:app', 'uglify:default']);
	grunt.registerTask('compile', ['compile_css', 'compile_js']);
	grunt.registerTask('deployDev', ['compile', 'shell:deployDev']);
	grunt.registerTask('deployLive', ['compile', 'shell:deployLive']);
};
