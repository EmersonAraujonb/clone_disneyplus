const Gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function styles() {
    return Gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(Gulp.dest('./dist/css'));
}

exports.default = styles;
exports.watch = function() {
    Gulp.watch('./src/styles/*.scss', Gulp.parallel(styles));
}