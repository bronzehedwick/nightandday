// Dependencies
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// Minify images in the specified bucket
gulp.task('compress', function() {
  'use strict';

  // Minify the images
  return gulp.src('scripts/src/*.js')
    .pipe(uglify())
    .pipe(rename('main.min.js'))
    .pipe(gulp.dest('scripts/build'));
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['compress']);
