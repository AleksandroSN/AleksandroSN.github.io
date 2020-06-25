// Imports
const gulp =          require('gulp');
const htmlValidator = require('gulp-w3c-html-validator');
 
// Tasks
module.exports = function
   validateHtml() {
      return gulp.src('build/**/*.html')
         .pipe(htmlValidator())
         .pipe(htmlValidator.reporter())
      }
   
 