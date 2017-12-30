const gulp = require('gulp');
const babel = require('gulp-babel');
const del = require('del');

const folder = {
    dist: "./dist/"
};


gulp.task('clean:build', () => {
    // Remove the dist folder
    return del(folder.dist);
});


gulp.task('default', ['clean:build'], function (){
    gulp.src(['./src/**/*.js', './src/**/*.jsx'])
        .pipe(babel())
        .pipe(gulp.dest('./dist/'));
});