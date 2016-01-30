var gulp = require('gulp');
var jade = require('gulp-jade');
var styl = require('gulp-stylus');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');

gulp.task("jade", function() {
	gulp.src('./src/templates/index.jade')
		.pipe(plumber())
		.pipe(jade({
			pretty: true
		}))
		.pipe(gulp.dest('build'));
});

gulp.task('styl', function() {
	gulp.src('./src/styles/index.styl')
		.pipe(plumber())
		.pipe(styl())
		.pipe(gulp.dest('build'));
});


gulp.task('watch', function() {
	gulp.watch(['./src/templates/**/*.jade'], ['jade']);
	gulp.watch(['./src/styles/**/*.styl'], ['styl']);
});

gulp.task('default', ['jade', 'styl']);