var gulp    = require('gulp');
var argv    = require('yargs').argv;
var concat  = require('gulp-concat');
var uglify  = require('gulp-uglify');
var notify  = require('gulp-notify');
var plumber = require('gulp-plumber');
var gulpif  = require('gulp-if');

gulp.task('scripts', function (){
    gulp.src([
		'bower_components/angular/angular.js',
		'bower_components/angular-route/angular-route.js',
		'src/js/functions.js',
		'src/js/services/*.js',
		'src/js/modules/*.js',
		'src/js/routes.js',
		'src/js/app.js',
		'src/js/directives/*.js',
		'src/js/controllers/*.js',
	])
    .pipe(concat('scripts.js'))
    .pipe(gulpif(argv.production, uglify()))
    .pipe(gulpif(argv.production, notify('ngPress: Uglified scripts.')))
    .pipe(notify('ngPress: Compiled scripts.'))
    .pipe(gulp.dest('./dist/js/'));
});