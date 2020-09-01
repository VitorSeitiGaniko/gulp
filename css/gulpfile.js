//Para executar as tasks em paralelo
const {parallel} = require('gulp')

//const {series} = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function transformacaoCSS(){

    return gulp.src('src/sass/index.scss') //No "index.scss" tem todas as referencias
        
        //".pipe(sass())" só isso ja faz a conversão do sass para css
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({"uglyComments": true}))

        //Concatena e cria o arquivo com esse nome
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('pastaBuild/css'))
}

function copiar(){
         
    return gulp.src('src/index.html')
        .pipe(gulp.dest('pastaBuild'))
  
}

//E aqui mude de "series" para "parallel"
exports.default = parallel(transformacaoCSS, copiar)