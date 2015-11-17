var gulp = require('gulp');
var concat = require('gulp-concat');
var makeItUgly = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');

gulp.task('default', function(){
    console.log('gulp!');
});

gulp.task('build-js', function(){
   gulp.src('./public/js/source/**/*.js')
       .pipe(concat('client.js'))
       .pipe(makeItUgly())
       .pipe(gulp.dest('./public/js/build/'))
});

gulp.task('build-css', function(){
    gulp.src('./public/css/source/**/*.css')
        .pipe(concat('client.css'))
        .pipe(minifyCss())
        .pipe(gulp.dest('./public/css/build/'))

});

gulp.task('ticktock', function(){
    gulp.watch('./public/js/source/**/*.js', ['build-js']);
    gulp.watch('./public/css/source/**/*.css', ['build-css']);

});