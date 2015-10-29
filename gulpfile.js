var gulp = require('gulp');
var mincss = require('gulp-minify-css');


gulp.task('css',function(){
  gulp.src('./static/css/*.css')
    .pipe(mincss())
    .pipe(gulp.dest('./bin/public/css'));
});