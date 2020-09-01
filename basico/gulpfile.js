const gulp = require('gulp')
const series = gulp.series

const antes1 = cb =>{
    console.log('Tarefa antes 1')
    return cb()
}

const antes2 = cb =>{
    console.log('Tarefa antes 2')
    return cb()
}

function copiar(cb){
    //Serve para referenciar quais arquivos vc quer copiar
    //gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
      
    gulp.src('pastaA/**/*.txt')
        /*Faz as tranformações dos arquivos, por exemplo
        .pipe(imagemPelaMetade())   
        .pipe(imagemEmPretoEBranco())*/

        //Essa pasta não existe, mas ele acaba criando automaticamente
        .pipe(gulp.dest('pastaB'))
    return cb()
}

const depois = cb =>{
    console.log('Tarefa depois')
    return cb()
}

//Tem q ter o default
module.exports.default = series(
    antes1,
    antes2,
    copiar,
    depois)

