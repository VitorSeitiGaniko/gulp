const gulp = require('gulp')
const webserver = require('gulp-webserver')
const watch = require('gulp-watch')

function monitorarArquivos(cb){
    //Ele vai monitorar a pasta desejada, e caso haja alguma mudança ele executa essa "task"
    watch('src/**/*.html', () => gulp.series('appHTML')())
    watch('src/**/*.scss', () => gulp.series('appCSS')())
    watch('src/**/*.js', () => gulp.series('appJS')())
    watch('src/**/*.png', () => gulp.series('appIMG')())

    return cb()

}

function servidor(cb){
    return gulp.src('pastaBuild')
        .pipe(webserver({
            port: 8080,
            open: true,
            livereload: true
        }))
}

module.exports = {
    monitorarArquivos,
    servidor
}