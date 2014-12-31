'use strict';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license']
});

function handleError(err) {
  console.error(err.toString());
  this.emit('end');
}

gulp.task('styles', function () {
  return gulp.src('app/styles/*.less')
    .pipe($.less())
    .on('error', handleError)
    .pipe($.autoprefixer('last 1 version'))
    .pipe(gulp.dest('.tmp/styles'))
    .pipe($.size());
});

gulp.task('scripts', function () {
  return gulp.src('app/scripts/**/*.js')
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.size());
});


gulp.task('html', ['styles', 'scripts'], function () {
  var jsFilter = $.filter('**/*.js');
  var cssFilter = $.filter('**/*.css');
  var assets;

  return gulp.src('app/*.html')
    .pipe(assets = $.useref.assets())
    .pipe($.rev())
    .pipe(jsFilter)
    .pipe($.uglify({preserveComments: $.uglifySaveLicense}))
    .pipe(jsFilter.restore())
    .pipe(cssFilter)
    .pipe($.replace('bower_components/bootstrap/fonts','fonts'))
    .pipe($.csso())
    .pipe(cssFilter.restore())
    .pipe(assets.restore())
    .pipe($.useref())
    .pipe($.revReplace())
    .pipe(gulp.dest('dist'))
    .pipe($.size());
});

gulp.task('images', function() {

  var imgSrc = 'app/images/**/*';
  var imgDest = 'dist/images';

  // Add the newer pipe to pass through newer images only
  return gulp.src(imgSrc)
      .pipe($.newer(imgDest))
      .pipe($.imagemin())
      .pipe(gulp.dest(imgDest));

});

gulp.task('fonts', function () {
  return gulp.src($.mainBowerFiles())
    .pipe($.filter('**/*.{eot,svg,ttf,woff}'))
    .pipe($.flatten())
    .pipe(gulp.dest('dist/fonts'))
    .pipe($.size());
});

gulp.task('tpl', function () {
  return gulp.src('app/templates/**/*')
    .pipe(gulp.dest('dist/templates'));
});

gulp.task('data', function () {
  return gulp.src('app/scripts/data/**/*')
    .pipe(gulp.dest('dist/scripts/data/'));
});

gulp.task('favicon', function () {
  return gulp.src('app/*.ico')
    .pipe(gulp.dest('dist/'));
});

gulp.task('clean', function () {
  return gulp.src(['.tmp', 'dist'], { read: false }).pipe($.rimraf());
});

gulp.task('build', ['html', 'images', 'fonts']);
