'use strict'

/* Single Thread */

function singleThread() {

    console.log('-----------------------------------------------------------')
    console.log('                   El proceso de NODE JS                   ')
    //Cada ves que se inicialize un proceso en NODE este va a crear un nuevo Id,
    //sabiendo el Id del proceso podremos manipular ese mismo proceso
    console.log('Id del proceso ..............................' + process.pid)
    console.log('Título del proceso ..........................' + process.title)
    console.log('Directorio de Node ..........................' + process.execPath)
    console.log('Directorio actual ...........................' + process.cwd())
    console.log('Version de Node .............................' + process.version)
    console.log('Versiones Dependencias ......................' + process.versions)
    console.log('Plataforma S.O. .............................' + process.platform)
    console.log('Arquitectura S.O. ...........................' + process.arch)
    console.log('Tiempo activo de Node .......................' + process.uptime())
    console.log('Argumentos del proceso ......................' + process.argv)
    console.log('------------------------------------------------------------')
    console.log()
}

singleThread();