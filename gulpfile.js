	
const gulp = require("gulp");
const sass = require("gulp-sass");

const paths = {
        src:"sass/*.scss",
        dest:"css"
}

const compile = () => {
    return(
        gulp
        .src(paths.src)
        .pipe(sass())
        .on("error",sass.logError)
        .pipe(gulp.dest(paths.dest))
    );    
}

const watch = () => {
    compile();
    gulp.watch(paths.src,compile)
}

exports.watch = watch;