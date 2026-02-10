const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function scripts() {
  return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
}

function styles() {
  return gulp.src('./src/styles/main.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(gulp.dest('./dist/css'));
}

function images() {
  return gulp.src('./src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'));
}

// copia o index.html da raiz para o dist
function html() {
  return gulp.src('./index.html')
    .pipe(gulp.dest('./dist'));
}

// copia fontes para dentro do dist
function fonts() {
  return gulp.src('./assents/fonts/**/*')
    .pipe(gulp.dest('./dist/fonts'));
}

exports.default = gulp.parallel(styles, scripts, images, html, fonts);

exports.watch = function () {
  gulp.watch('./src/styles/**/*.scss', styles);
  gulp.watch('./src/scripts/*.js', scripts);
  gulp.watch('./src/images/**/*', images);
  gulp.watch('./index.html', html);
  gulp.watch('./assents/fonts/**/*', fonts);
}