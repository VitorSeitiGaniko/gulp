const gulp = require('gulp')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function depsCSS(){
    return gulp.src('node_modules/font-awesome/css/font-awesome.css')
        .pipe(uglifycss({"uglyComments": false}))
        
        //Por padrão se usa o "min" para dizer q este arquivo foi gerado a partir de um gulp ou pipe
        .pipe(concat('deps.min.css'))

        .pipe(gulp.dest('pastaBuild/assets/css'))
}

function depsFontes(){
    return gulp.src('node_modules/font-awesome/fonts/*.*')
        .pipe(gulp.dest('pastaBuild/assets/fontes'))

}

module.exports = {
    depsCSS,
    depsFontes
}