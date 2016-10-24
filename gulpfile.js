var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');

// CSS
gulp.task('css', function() {
  return gulp.src('assets/scss/site.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
          outputStyle: 'compressed'
        }))
        .on('error', sass.logError)
        .pipe(rename('site.min.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('assets/css'));
});

// Watch
gulp.task('watch', function() {
     gulp.watch('assets/scss/*.scss', ['css']);
});
