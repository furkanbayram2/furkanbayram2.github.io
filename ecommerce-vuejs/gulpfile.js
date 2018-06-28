var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
notify: false;

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./",
        notify: false
    });

    gulp.watch("./assets/scss/*.scss", ['sass']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("./assets/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./assets/css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);