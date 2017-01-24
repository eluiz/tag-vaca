var gulp = require('gulp');
var run = require('gulp-run');
var compass = require('gulp-compass');
var path = require('path');

gulp.task('webserver', function(){
    return run('php app/console server:run').exec();
});

gulp.task('compass', function(){
    gulp.src('./web/assets/scss/**/*')
        .pipe(compass({
            sass: './web/assets/scss',
            css: './web/assets/css'
        }))
        .pipe(gulp.dest('./web/assets/css'));
});

gulp.task('watch', function(){
    gulp.watch('./web/assets/scss/**/*', ['compass'])
});

gulp.task('default',['compass'], function(){
    gulp.start('watch','webserver');
});
