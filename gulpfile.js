var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    babel = require('gulp-babel'),
    watch = require('gulp-watch');


const buildFunction = ()=> {
   // gulp.task('conmin', ()=> {

        gulp.src(['assets/js/!(app)*.js', 'assets/js/app.js'])
            .pipe(babel({
                presets: ['env']
            }))
            .pipe(uglify())
            .pipe(concat('myBuild.js'))
            .pipe(gulp.dest('myBuild'));

   // });
};
gulp.task('myWatch', ()=> {
    //gulp.src('assets/js/*.js');
    return watch('assets/js/*.js', buildFunction)
});


