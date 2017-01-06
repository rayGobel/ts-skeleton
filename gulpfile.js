"use strict";
let gulp = require('gulp');
let del = require('del');
let ts = require('gulp-typescript');
let tsProject = ts.createProject('tsconfig.json');
let mocha = require('gulp-mocha');

gulp.task('clean', function () {
  return del([
    'dist/**/*',
    'dist/'
  ]);
});

gulp.task('compile', ['clean'], function () {
  return tsProject.src()
    .pipe(tsProject())
    .js.pipe(gulp.dest("dist"));

});

gulp.task('mocha-test', ['compile'], function () {
  gulp.src('dist/test/**/*.js', {read: false})
    .pipe(mocha());
});

gulp.task('default', ['mocha-test']);

gulp.task('monitor', ['mocha-test'], function() {

  gulp.watch('src/**/*.ts', ['mocha-test']);

});
