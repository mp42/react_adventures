var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var react = require('gulp-react');
var htmlreplace = require('gulp-html-replace');

// defining paths of resources
var path = {
	HTML: 'src/index.html',
	ALL: ['src/js/*.js', 'src/js/**/*.js', 'src/index.html'],
	JS: ['src/js/*.js', 'src/js/**/*.js'],
	MINIFIED_OUT: 'build.min.js',
	DEST_SRC: 'dist/src',
	DEST_BUILD: 'dist/build',
	DEST: 'dist'
};

// defining gulp tasks
// 'transform' - take all files defined in path.JS and pipes each fall to the
// react method and then piping the result to the path defined by DEST_SRC
gulp.task('transform', function() {
	gulp.src(path.JS)
	    .pipe(react())
	    .pipe(gulp.dest(path.DEST_SRC));
});

// 'copy' - take the file defined by path.HTML and copy over to the path 
// defined by path.DEST_SRC
gulp.task('copy', function() {
	gulp.src(path.HTML)
	    .pipe(gulp.dest(path.DEST));
});

// 'watch' - watch the files defined below and apply tasks to them whenever
// a change is detected
gulp.task('watch', function() {
	gulp.watch(path.ALL, ['transform', 'copy']);
});

// 'default' - set up a default task
gulp.task('default', ['watch']);
