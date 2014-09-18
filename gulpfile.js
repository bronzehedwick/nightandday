// Dependencies
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var compass = require('gulp-compass');

// Compress scripts
gulp.task('compress', function() {
  'use strict';

  return gulp.src('./scripts/src/*.js')
    .pipe(uglify())
    .pipe(rename('main.min.js'))
    .pipe(gulp.dest('./scripts/build'));
});

// Compile SASS
gulp.task('sass', function() {
  'use strict';

  return gulp.src('./styles/sass/*.scss')
    .pipe(compass({
      config_file: './styles/config.rb',
      css: './styles/css',
      sass: './style/sass'
    }))
    .pipe(gulp.dest('./styles/css'));
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['compress', 'sass']);
