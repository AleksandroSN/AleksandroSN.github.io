const gulp = require("gulp");

module.exports = function copycss() {
  return gulp.src("./src/styles/**/*.css").pipe(gulp.dest("./build/css"));
};
