/**
 * Dependencies
 */
var gulp          = require('gulp');
var concat        = require('gulp-concat');

gulp.task('scripts', function (){
    gulp.src([
		'bower_components/angular/angular.js',
		'bower_components/angular-route/angular-route.js',
		'src/js/services/*.js',
		'src/js/app.js',
		'src/js/models/*.js',
		'src/js/controllers/*.js',
	])
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('./dist/js/'));
});

gulp.task('watch', function(){
	gulp.watch("src/js/*.js", ['scripts']);
	gulp.watch("src/js/services/*.js", ['scripts']);
	gulp.watch("src/js/models/*.js", ['scripts']);
	gulp.watch("src/js/controllers/*.js", ['scripts']);
});
gulp.task('default', ['scripts', 'watch']);
