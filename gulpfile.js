const gulp        = require('gulp')
const gutil       = require('gulp-util')
const concat      = require('gulp-concat')
const minifycss   = require('gulp-minify-css')
const uglify      = require('gulp-uglify')

const css = {
  source: 'src/stylesheets',
  target: 'public/stylesheets'
};
const js = {
  source: 'src/javascripts',
  target: 'public/javascripts'
};

gulp.task('css', function () {
  gulp.src([
    css.source + '/normaset.css',
    css.source + '/*.css'
  ])
  .pipe(concat('all.min.css'))
  .pipe(minifycss({keepSpecialComments: false}))
  .pipe(gulp.dest(css.target))
});

gulp.task('js', function() {
  gulp.src([
    js.source + '/vendor/*.js',
    js.source + '/*.js'
  ])
  .pipe(concat('all.min.js'))
  .pipe(uglify({ mangle: true }).on('error', gutil.log))
  .pipe(gulp.dest(js.target))
});

gulp.task('watch', function() {
  gulp.watch(css.source + '/*.css', ['css']);
  gulp.watch(js.source + '/*.js', ['js']);
});

gulp.task('default', ['css', 'js']);
