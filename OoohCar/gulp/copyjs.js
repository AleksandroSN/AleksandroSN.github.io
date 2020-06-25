const gulp = require("gulp");

module.exports = function copyjs() {
  return gulp
    .src([
      "./src/js/*.js",
      "./node_modules/swiper/js/swiper.min.*",
      "./node_modules/filepond/dist/filepond.min.js",
      "./node_modules/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.js",
      "./node_modules/filepond-plugin-image-exif-orientation/dist/filepond-plugin-image-exif-orientation.min.js",
      "./node_modules/filepond-plugin-image-crop/dist/filepond-plugin-image-crop.min.js",
      "./node_modules/filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.min.js",
    ])
    .pipe(gulp.dest("./build/js"));
};
