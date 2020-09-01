const gulp = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const sass = require('gulp-sass')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const htmlmin = require('gulp-htmlmin')



function appHTML(){
    //Pega todos os html's independente da pasta q se encontram
    return gulp.src('src/**/*.html')
        
        //Ele faz a msma função do "uglify"
        .pipe(htmlmin({collapseWhitespace: true}))  //Ele tira os espaços em branco
        .pipe(gulp.dest('pastaBuild'))
}

function appCSS(){
    return gulp.src('src/assets/sass/index.scss')
        //converte de ".scss" para ".css"
        //E caso tenha algum erro ele vai evidenciar
        .pipe(sass().on('error', sass.logError))

        //Deixando em "true" ele tira os comentarios
        .pipe(uglifycss({"uglycomments": true}))  

        .pipe(concat('app.min.css'))
        .pipe(gulp.dest('pastaBuild/assets/css'))  
}

function appJS(){
    return gulp.src('src/assets/js/**/*.js')
        .pipe(babel({presets: ['ENV']}))
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('pastaBuild/assets/js'))
}

function appIMG(){
    return gulp.src('src/assets/imgs/**/*.png')
        .pipe(gulp.dest('pastaBuild/assets/imgs'))
}

/*Registrando essa task para funções futuras, quando se 
usa o series ou parallel não precisa registra-las*/
gulp.task('appHTML', appHTML)
gulp.task('appCSS', appCSS)
gulp.task('appIMG', appIMG)
gulp.task('appJS', appJS)

module.exports = {
    appHTML,
    appCSS,
    appJS,
    appIMG
}