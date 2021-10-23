const gulp = require ('gulp');
const webp = require('gulp-webp');

module.exports = function convwebp () {
    return gulp.src ('./src/img/webp/**')
                .pipe(webp({quality: 80}))
                .pipe (gulp.dest('./src/img/webp'))
}