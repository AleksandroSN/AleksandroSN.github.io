const gulp = require("gulp");

module.exports = function copyimg() {
  return gulp.src("./src/img/**/*").pipe(gulp.dest("./build/img"));
};
