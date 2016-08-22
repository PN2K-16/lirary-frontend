var gulp = require('gulp');
var inject = require('gulp-inject');
var watch = require('gulp-watch');

gulp.task('hello', function (param) {
    console.log("hello world");
});



gulp.task('inject', function () {
    return injectJS();
});


gulp.task('watch', function () {
    return watch('app/**/*.js', injectJS);
});


function injectJS() {
    return gulp
        .src('./app/index.html')
        .pipe(inject(gulp.src([
            './app/src/app.js',
            './app/src/config.js',
            './app/src/shared/**/*.js',
            './app/src/modules/**/*.js'
        ])))
        .pipe(gulp.dest('./app'));

}