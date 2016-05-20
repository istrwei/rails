'use strict';

var gulp = require('gulp');
var changedInPlace = require('gulp-changed-in-place');
var minifyHTML = require('gulp-htmlmin');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

const SITE_DIR = './_site';
const HTML_PATH = './_site/**/*.html';

var minifyHTMLOptions = {
  collapseWhitespace: true,
  keepClosingSlash: true
}

gulp.task('minifyHTML', function(){
  return gulp.src(HTML_PATH)
             .pipe(changedInPlace({firstPass: true}))
             .pipe(minifyHTML(minifyHTMLOptions))
             .pipe(gulp.dest(SITE_DIR));
});

gulp.task('minifyJS', function(){
    return gulp.src(['./_js/jquery-2.2.3.min.js', './_js/utils.js', './_js/collapse.js', './_js/dropdown.js'])
               .pipe(changedInPlace({firstPass: true}))
               .pipe(concat('global.js'))
               .pipe(uglify())
               .pipe(gulp.dest('./_site/assets/js'));
});

gulp.task('default', function(){
  console.log('No default task for gulp.');
});
