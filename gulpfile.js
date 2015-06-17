var gulp = require('gulp');
var sass = require('gulp-sass');
var neat = require('node-neat').includePaths;

var paths = {
//  scripts: ['client/js/**/*.coffee', '!client/external/**/*.coffee'],
  scss: ['assets/scss/**/*', 'assets/scss/*'],
  images: 'assets/img/**/*'
};

gulp.task('sass', function () {
    gulp.src('assets/scss/**/*.scss')
        .pipe(sass({
          includePaths: ['sass'].concat(neat),
          style: 'compressed'
        }))
        .on('error', function (err) {
        	console.log(err)
		})
        .pipe(gulp.dest('./assets/css'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.scss, ['sass']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['sass','watch']);