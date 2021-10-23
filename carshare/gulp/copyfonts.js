const gulp = require("gulp");

module.exports = function copyfonts() {
  return gulp.src("./src/fonts/*").pipe(gulp.dest("./build/fonts"));
};
