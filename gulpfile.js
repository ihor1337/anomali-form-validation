/**
 * Created by Ihor on 8/30/2016.
 */
"use strict";
var gulp = require('gulp'),
    connect = require('gulp-connect'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    autoprefixer = require('gulp-autoprefixer'),
    uglifyCSS = require('gulp-uglifycss'),
    rename = require('gulp-rename');

gulp.task('compile-bootstrap', function () {
    return gulp.src('./app/src/scss/bootstrap.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./app/dist/css'));
});

gulp.task('css', function () {
    return gulp.src('app/src/scss/main.scss')
        .pipe(sass())
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 9'))
        .pipe(uglifyCSS())
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('app/dist/css'))
});