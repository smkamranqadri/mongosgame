var gulp = require('gulp');
var ts = require('gulp-typescript');
 
gulp.task('default', ['watch'])

gulp.task('transpile', function () {
  return gulp.src('src/**/*.ts')
    .pipe(ts({target: 'ES5',}))
    .pipe(gulp.dest('src/'));
});

gulp.task('watch', ['transpile'], function() {
  gulp.watch('src/**/*.ts',['transpile'])
});