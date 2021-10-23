const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const style = require('./style');
const pug2html = require('./pug2html');

module.exports = function serv (cb) {
    browserSync.init({
        server: 'build',
        notify: false,
        open: true,
        cors: true
    })

gulp.watch('./src/styles/**/*.less', gulp.series(style, cb => gulp.src('build/css').pipe(browserSync.stream()).on('end',cb)))
gulp.watch('src/pages/**/*.pug', gulp.series(pug2html))
gulp.watch('build/*.html').on('change', browserSync.reload)

return cb()

}