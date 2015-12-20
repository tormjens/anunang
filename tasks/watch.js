var gulp = require('gulp');

gulp.task('watch', function(){
	gulp.watch("src/js/*.js", ['scripts']);
	gulp.watch("src/js/services/*.js", ['scripts']);
	gulp.watch("src/js/models/*.js", ['scripts']);
	gulp.watch("src/js/modules/*.js", ['scripts']);
	gulp.watch("src/js/directives/*.js", ['scripts']);
	gulp.watch("src/js/controllers/*.js", ['scripts']);
});