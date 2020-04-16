const gulp = require("gulp");

const server = require("./gulp/server");
const style = require("./gulp/style");
const pug2html = require("./gulp/pug2html");
const imgmin = require("./gulp/imgmin");
const copyjs = require("./gulp/copyjs");
const copyimg = require("./gulp/copyimg");
const copycss = require("./gulp/copycss");
const convwebp = require("./gulp/convwebp");
const clean = require("./gulp/clean");
const w3cvalidator = require("./gulp/w3cvalidator");

const dev = gulp.parallel(style, pug2html, copyjs, copyimg, copycss);

const build = gulp.series(clean, dev);

module.exports.start = gulp.series(build, server);
module.exports.build = build;
module.exports.convwebp = convwebp;
module.exports.imgmin = imgmin;
module.exports.copyjs = copyjs;
module.exports.copyimg = copyimg;
module.exports.copycss = copycss;
module.exports.clean = clean;
module.exports.pug2html = pug2html;
module.exports.w3cvalidator = w3cvalidator;
