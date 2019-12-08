const gulp = require("gulp")
const sass = require("gulp-sass")
const watchSass = require("gulp-watch-sass")
const cleanCSS = require('gulp-clean-css');

 
gulp.task("sass:watch", () => watchSass([
  "assets/scss/*.scss",
])
  .pipe(sass())
  .pipe(gulp.dest("assets/css")));

 
gulp.task('minify-css', () => {
  return gulp.src('assets/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('assets/css/'));
});