var gulp    = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var notify = require('gulp-notify');


gulp.task('scss', function (){
    gulp.src([
    	'src/scss/app.scss',
	])
    .pipe(sass({style: 'compressed', errLogToConsole: true}))
    .pipe(concat('styles.css'))
    .pipe(notify('ngPress: Compiled SCSS.'))
    .pipe(gulp.dest('./dist/css/'));
});