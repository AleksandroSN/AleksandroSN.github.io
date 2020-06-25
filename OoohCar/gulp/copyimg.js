const gulp = require('gulp');

module.exports = function copyimg() {
	return gulp.src('./src/img/**/*.{png,jpg,webp}').pipe(gulp.dest('./build/img'));
};
