"use strict";
let gulp = require('gulp');
let del = require('del');
let ts = require('gulp-typescript');
let mocha = require('gulp-mocha');
let rename = require('gulp-rename');
let babel = require('gulp-babel');

gulp.task('clean', function () {
  return del([
    'dist/**/*',
    'dist/'
  ]);
});

gulp.task('compile', ['clean'], function () {
  var tsProject = ts.createProject('tsconfig.json');

  return gulp.src('src/**/*.ts')
    .pipe(tsProject())
    .pipe(babel())
    .pipe(rename(function (path) {
      path.extname = '.js';
    }))
    .pipe(gulp.dest("dist"));

});

gulp.task('mocha-test', ['compile'], function () {
  gulp.src('dist/test/**/*.js', {read: false})
    .pipe(mocha());
});

gulp.task('default', ['mocha-test']);

gulp.task('monitor', ['mocha-test'], function() {

  gulp.watch('src/**/*.ts', ['mocha-test']);

});
