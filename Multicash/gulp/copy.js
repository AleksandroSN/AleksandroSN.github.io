const gulp = require ('gulp');

module.exports = function copy () {
    return gulp.src ('./src/img/**/*')
                .pipe (gulp.dest('./build/img'))
}