import gulp from 'gulp';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';

import imagemin, {
    gifsicle,
    mozjpeg,
    optipng,
    svgo
} from 'gulp-imagemin';

// cria o compilador de sass corretamente
const sass = gulpSass(dartSass);

// ------------------------------
// STYLES
// ------------------------------
export function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
}

// ------------------------------
// IMAGES
// ------------------------------
export function images() {
    return gulp.src('src/images/**/*.{png,jpg,jpeg,gif,svg}')
        .pipe(imagemin([
            gifsicle({ interlaced: true }),
            mozjpeg({ quality: 80 }),
            optipng({ optimizationLevel: 5 }),
            svgo()
        ]))
        .pipe(gulp.dest('./dist/images'));
}

// ------------------------------
// WATCH
// ------------------------------
export function watch() {
    gulp.watch('./src/styles/*.scss', styles);
    gulp.watch('./src/images/**/*.{png,jpg,jpeg,gif,svg}', images);
}

// ------------------------------
// DEFAULT
// ------------------------------
export default gulp.parallel(styles, images);
