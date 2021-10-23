const   gulp = require('gulp');
        bemValidator = require('gulp-html-bem-validator');
        plumber = require ('gulp-plumber');
        pug = require ('gulp-pug');
        puglinter = require ('gulp-pug-linter');
        htmlValidator = require('gulp-w3c-html-validator');

module.exports = function pug2html () {
    return gulp.src ('./src/pages/*.pug')
            .pipe(plumber())
            .pipe(puglinter({ reporter: 'default' }))
            .pipe(pug({pretty: true}))            
            .pipe(htmlValidator())
            .pipe(bemValidator())
            .pipe(gulp.dest('build'))
}        


