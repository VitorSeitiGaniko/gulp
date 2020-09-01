//Juntando dois arquivos em um só

const {series} = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglyif = require('gulp-uglify')
const babel = require('gulp-babel')

function padrao(cb){
    gulp.src('src/**/*.js')
        
        //O babel converte o código do js para sua versão mais nova no mercado
        .pipe(babel({
            comments: false,
            presets:["env"]     //Pega a versão mais nova do javascript 
        }))

        //Não precisa passar parametro nenhum, ele faz a minificação do codigo
        .pipe(uglyif())

        //Unifica os arquivos selecionados, que estão definidos na linha 10
        .pipe(concat('codigoUnificado.min.js'))

        .pipe(gulp.dest('pastaBuild'))
    return cb()
}

function fim (cb) {
    console.log('fim !!!')
    return cb()
}

exports.default = series(padrao, fim)