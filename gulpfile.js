var gulp = require('gulp'),
    sassdoc = require('sassdoc');

  var sassdocOptions = {
      // dest: './sassdoc',
      // theme: './node_modules/sassdoc-theme-flippant'
  };

var paths = {
  sass: [
    'scss/**/*.scss'
  ]
};
gulp.task('watch', function () {
  gulp.watch("", ['sassdoc']);
});

gulp.task('sassdoc', function () {
  console.log("sassdoc task finished");
  return gulp.src(paths.sass)
    .pipe(sassdoc());
});