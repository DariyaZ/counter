const gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', async function(){
    return gulp.src('src/**/*.scss')
    .pipe(sass())
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(gulp.dest('src/'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', async function() {
    browserSync({
        server: {
            baseDir: 'src'
        },
        notify: false
    });
});

gulp.watch('src/input.scss', gulp.parallel('sass'));

gulp.task('default', gulp.parallel('sass', 'browser-sync'));

