'use strict';

let gulp = require('gulp');
let sass = require('gulp-sass');

gulp.task('copy', function () {
  gulp.src([ '!./src/styles/*', 'src/**/*' ], { base: './src' })
    .pipe(gulp.dest('dist'));

});

gulp.task('scss', function () {
  gulp.src('./src/styles/includes.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/styles'));
});

let task = ['copy','scss'];

gulp.task('default', task, function (done) {
  gulp.watch('./src/**/*', task);
});

gulp.task('build', task, function (done) {
  done();
});
