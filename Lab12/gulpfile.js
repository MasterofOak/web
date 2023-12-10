const { src, dest, series } = require('gulp');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const cssnano = require('gulp-cssnano');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');
const concat = require('gulp-concat');

function ugly() {
  return src('./output/all.js').pipe(uglify()).pipe(dest('output/'));
}
function imageMin() {
  return src('./assests/*').pipe(imagemin()).pipe(dest('output/assests'));
}
function cssNative() {
  return src('./style.css').pipe(cssnano()).pipe(dest('./output'));
}
function SASS() {
  return src('./style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('./css'));
}
function renameFile() {
  return src('./index.html').pipe(rename('main.html')).pipe(dest('./output'));
}
function connect() {
  return src(['./gulpfile.js', './index.js'])
    .pipe(concat('all.js'))
    .pipe(dest('./output'));
}
exports.default = series(connect, imageMin, cssNative, SASS, renameFile, ugly);
