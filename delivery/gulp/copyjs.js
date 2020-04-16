const gulp = require("gulp");

module.exports = function copyjs() {
  return gulp.src("./src/js/*.js").pipe(gulp.dest("./build/js"));
};
