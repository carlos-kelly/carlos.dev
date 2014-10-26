
/**
 * Publications
 * Gulp Configuration File
 * 2014 Michael Kelly and Carlos Paelinck
 */

function logError(err) {
  console.log(err)
}

var gulp = require('gulp'),
  less = require('gulp-less'),
  path = require('path')

var paths = {
  css: 'assets/stylesheets/*.less'
}

gulp.task('less', function() {
  return gulp.src('assets/stylesheets/style.less')
	.pipe(less({
	  paths: [ path.join(__dirname, 'less', 'includes') ]
	}).on('error', function(err) {
	  logError(err);
	}))
	.pipe(gulp.dest('assets/stylesheets/'))
})

gulp.task('watch', function() {
  gulp.watch(paths.css, ['less'])
})

gulp.task('default', ['less', 'watch'])
gulp.task('production', ['less'])
