const  gulp = require('gulp'),
    sassdoc = require('sassdoc');
    sass = require('gulp-sass');
    sourcemaps = require('gulp-sourcemaps');
    watch = require('gulp-watch');
    minifyCSS = require('gulp-minify-css');
    concat = require('gulp-concat');
    gcmq = require('gulp-group-css-media-queries');

var sassdocOptions = {
      // dest: './sassdoc',
      // theme: './node_modules/sassdoc-theme-flippant'
  };

var paths = {
  scss: [
    'scss/**/*.scss'
  ]
};
gulp.task('watch', function () {
  gulp.watch("", ['sassdoc']);
});

gulp.task('sassdoc', function () {
  console.log("sassdoc task finished");
  return gulp.src(paths.scss)
    .pipe(sassdoc());
});

gulp.task('sass-compile', function () {
  return gulp.src('test/sass/**/*.sass')
      .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
      .pipe(sourcemaps.write('./test'))
      .pipe(concat('main.css'))
      .pipe(gulp.dest('test/css/')
      )
})

gulp.task('watch', function () {
  gulp.watch('test/sass/**/*.sass', gulp.series('sass-compile'))
})

gulp.task('css', function () {
    return gulp.src('test/css/main.css')
        .pipe(gcmq())
        .pipe(gulp.dest('test/css/'))
})