module.exports = () => {
  $.gulp.task('sass', () => {
    return $.gulp.src('./sass/style.scss')
        .pipe($.gp.plumber())
        .pipe($.gp.sourcemaps.init())
        .pipe($.gp.sassGlob())
        .pipe($.gp.sass())
        .pipe($.gp.autoprefixer())
        .pipe($.gp.csso())
        .pipe($.gp.rename('style.min.css'))
        .pipe($.gp.sourcemaps.write(''))
        .pipe($.gulp.dest('build/css'))
        .pipe($.browserSync.stream());
  });
};