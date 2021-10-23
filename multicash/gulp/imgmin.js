const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

module.exports = function imgmin () {
    return gulp.src('./src/img/**/*.+(png|jpg|gif|svg|webp)')
			   .pipe(imagemin([
					  imagemin.optipng({optimizationLevel: 3}),
					  imagemin.mozjpeg({quality: 75, progressive: true}),
					  imagemin.svgo()
					  ]))
			   .pipe(gulp.dest('./build/img'))
}