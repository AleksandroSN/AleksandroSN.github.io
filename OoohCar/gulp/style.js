const gulp = require("gulp");

const autoprefixer = require("autoprefixer");
const minify = require("gulp-clean-css");
const gcmq = require("gulp-group-css-media-queries");
const condition = require("gulp-if");
const less = require("gulp-less");
const plumber = require("gulp-plumber");
const postcss = require("gulp-postcss");
const rename = require("gulp-rename");
const sourcemaps = require("gulp-sourcemaps");
const gulpStylelint = require("gulp-stylelint");

module.exports = function lessstyles() {
  return gulp
    .src("./src/styles/*.less")
    .pipe(plumber())
    .pipe(
      gulpStylelint({
        failAfterError: false,
        reporters: [
          {
            formatter: "string",
            console: true,
          },
        ],
        fix: true,
      })
    )
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(gcmq())
    .pipe(postcss([autoprefixer()]))
    .pipe(
      minify({
        level: 2,
      })
    )
    .pipe(
      rename(function (path) {
        path.basename += ".min";
        path.extname = ".css";
      })
    )
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("./build/css"));
};
