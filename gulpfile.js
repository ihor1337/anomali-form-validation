"use strict";
var gulp = require('gulp'),
    connect = require('gulp-connect'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    autoprefixer = require('gulp-autoprefixer'),
    uglifyCSS = require('gulp-uglifycss'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat');

gulp.task('connect', function() {
    connect.server({
        root: '',
        port: 8000,
        livereload: true
    });
});

gulp.task('server', function(){
   connect.server({
       root:'',
       port: 8000,
       livereload: false
   });
});

gulp.task('compile-bootstrap', function () {
    return gulp.src('./app/src/scss/bootstrap.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifyCSS())
        .pipe(rename('bootstrap.min.css'))
        .pipe(gulp.dest('./app/dist/css'))
        .pipe(connect.reload());
});

gulp.task('css', function () {
    return gulp.src('app/src/scss/main.scss')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(uglifyCSS())
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('app/dist/css'))
        .pipe(connect.reload());
});

gulp.task('js', function () {
    return gulp.src(['./app/src/js/modules.js', './app/src/js/controllers/*.js','./app/src/js/directives/*.js'])
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(rename('app.min.js'))
        .pipe(gulp.dest('app/dist/js'))
        .pipe(connect.reload());
});

gulp.task('html', function () {
    return gulp.src('index.html')
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch('index.html',['html']);
    gulp.watch('app/src/js/**/*.js', ['js']);
    gulp.watch('app/src/scss/main.scss', ['css']);
});

gulp.task('default', ['connect', 'js', 'css', 'watch']);