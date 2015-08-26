/*******************************
            Set-up
*******************************/

var
  gulp = require('gulp-help')(require('gulp')),
  less = require('gulp-less'),
  minifyCSS    = require('gulp-minify-css');

  gulp.task('default', function() {
   
      gulp.src(['less/semantic-dojo.less'])
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist'));


  });
