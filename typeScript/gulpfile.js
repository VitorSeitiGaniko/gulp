const {series} = require('gulp')
const gulp = require('gulp')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json')

function transformacaoTS(){

    //Não precisa informar o caminho pois ele usa o "tsconfig.json" como referencia
    return tsProject.src()
        .pipe(tsProject())
        .pipe(gulp.dest('pastaBuild'))
}

exports.default = series(transformacaoTS)