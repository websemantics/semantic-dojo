/*******************************
            Set-up
*******************************/

var
  gulp            = require('gulp-help')(require('gulp')),
  less            = require('gulp-less'),
  requireDotFile  = require('require-dot-file'),
  minifyCSS       = require('gulp-minify-css'),
  config;


  /*******************************
  Config
  *******************************/

  try {
    config = requireDotFile('config.json');
  }
  catch(error) {
    if(error.code === 'MODULE_NOT_FOUND') {
      console.error('No config.json file found');
    }
  }

  gulp.task('default', function() {
   
      console.info('Building Semantic-Dojo');
      console.info(config);

      gulp.src(['less/semantic-dojo.less'])
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist'));


  });
