const path = require('path');
const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const minifyCss = require('gulp-minify-css');
const rename = require('gulp-rename');
const plumber = require('gulp-plumber');
const gls = require('gulp-live-server');
const runSequence = require('run-sequence');
const clean = require('gulp-clean');

gulp.task('default', () => {
    console.log('开始编译');
    gulp.start('serve');
});

gulp.task('clean', () => {
    return gulp
        .src('./dist', {
            read: false
        })
        .pipe(clean());
});

gulp.task('css', () => {
    return gulp
        .src('./src/scss/ui.scss')
        .pipe(plumber())
        .pipe(
            sass({
                outputStyle: 'expanded'
            })
        )
        .pipe(autoprefixer('last 3 version', 'ie 8'))
        .pipe(gulp.dest('./dist/css'))
        .pipe(minifyCss())
        .pipe(rename('ui.min.css'))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('utilcss', () => {
    return gulp
        .src('./src/scss/utils.scss')
        .pipe(plumber())
        .pipe(
            sass({
                outputStyle: 'expanded'
            })
        )
        .pipe(autoprefixer('last 3 version', 'ie 8'))
        .pipe(rename('utils.css'))
        .pipe(gulp.dest('./dist/css'))
        .pipe(minifyCss())
        .pipe(rename('utils.min.css'))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('html', () => {
    return gulp.src('./src/**/*.html').pipe(gulp.dest('./dist'));
});

gulp.task('js', () => {
    // return gulp.src('./src/**/*.js').pipe(gulp.dest('./dist'));
});

gulp.task('images', function() {
    return gulp.src('./src/**/images/*').pipe(gulp.dest('./dist'));
});

gulp.task('build', ['css', 'utilcss', 'html', 'js', 'images'], () => {
    console.log('build done');
});

gulp.task('serve', () => {
    gulp.start('build');
    let server = gls.static('dist', 8888);
    server.start();

    // gulp.watch(
    //     ['./src/**/*.scss', './src/**/*.js', './src/**/*.html'],
    //     files => {
    //         runSequence('build', () => {
    //             server.notify.apply(server, [files]);
    //         });
    //     }
    // );

    gulp.watch(['./src/**/*.scss'], files => {
        runSequence('css', () => {
            // console.log(`${files.path} changed`)
            server.notify.apply(server, [files]);
        });
    });
    gulp.watch(['./src/**/*.scss'], files => {
        runSequence('utilcss', () => {
            server.notify.apply(server, [files]);
        });
    });
    gulp.watch(['./src/**/*.js'], files => {
        runSequence('js', () => {
            server.notify.apply(server, [files]);
        });
    });
    gulp.watch(['./src/**/*.html'], files => {
        runSequence('html', () => {
            server.notify.apply(server, [files]);
        });
    });
    gulp.watch(['./src/**/images/*'], files => {
        runSequence('images', () => {
            server.notify.apply(server, [files]);
        });
    });
    // watcher.on('change', (files) => {
    //     server.notify.apply(server, [files])
    // })
});
