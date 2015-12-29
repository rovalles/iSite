(function() {
	'use strict';

	var gulp = require('gulp');
	var sass = require('gulp-sass');
	var connect = require('gulp-connect-php');
	var browserSync = require('browser-sync');

	gulp.task('sass', function () {
		gulp.src('./scss/**/*.scss')
			.pipe(sass().on('error', sass.logError))
			.pipe(gulp.dest('./assets/styles/'));
	});

	gulp.task('sass:watch', function () {
		gulp.watch('./scss/**/*.scss', ['sass']);
	});

	gulp.task('serve', function() {
		connect.server({}, function (){
			browserSync({
				proxy: 'localhost:8000'
			});
		});
		gulp.watch(['**/*.php', './assets/**/*']).on('change', function () {
			browserSync.reload();
		});
	});
	gulp.task('default', ['serve', 'sass:watch']);
})();