const gulp = require('gulp');

module.exports = function copyjs() {
	return gulp.src([ './src/js/*.js', './node_modules/swiper/js/swiper.min.*' ]).pipe(gulp.dest('./build/js'));
};
