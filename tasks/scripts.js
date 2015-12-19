var gulp   = require('gulp');
var concat = require('gulp-concat');

gulp.task('scripts', function (){
    gulp.src([
		'bower_components/angular/angular.js',
		'bower_components/angular-route/angular-route.js',
		'src/js/functions.js',
		'src/js/services/*.js',
		'src/js/routes.js',
		'src/js/app.js',
		'src/js/directives/*.js',
		'src/js/controllers/*.js',
	])
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('./dist/js/'));
});