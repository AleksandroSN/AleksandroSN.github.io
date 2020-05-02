const gulp = require('gulp');
const svgstore = require('gulp-svgstore');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');

module.exports = function svgsprite() {
	return gulp
		.src('./src/img/*.svg')
		.pipe(imagemin([ imagemin.svgo() ]))
		.pipe(
			svgstore({
				inlineSvg: true
			})
		)
		.pipe(rename('sprite.svg'))
		.pipe(gulp.dest('./build/img'));
};
