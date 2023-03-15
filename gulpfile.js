const gulp        = require('gulp')
const gutil       = require('gulp-util')
const concat      = require('gulp-concat')
const minifycss   = require('gulp-minify-css')
const uglify      = require('gulp-uglify')

const cssFolder = {
  source: 'src/stylesheets',
  target: 'public/stylesheets'
};
const jsFolder = {
  source: 'src/javascripts',
  target: 'public/javascripts'
};

function css () {
  return gulp.src([
    cssFolder.source + '/normaset.css',
    cssFolder.source + '/*.css'
  ])
  .pipe(concat('all.min.css'))
  .pipe(minifycss({keepSpecialComments: false}))
  .pipe(gulp.dest(cssFolder.target))
}

function js () {
  return gulp.src([
    jsFolder.source + '/vendor/*.js',
    jsFolder.source + '/*.js'
  ])
  .pipe(concat('all.min.js'))
  .pipe(uglify({ mangle: true }).on('error', gutil.log))
  .pipe(gulp.dest(jsFolder.target))
}

function watch() {
  gulp.watch(cssFolder.source + '/*.css', css);
  gulp.watch(jsFolder.source + '/*.js', js);
}

const build = gulp.series(css, js)

exports.watch = watch
exports.default = build