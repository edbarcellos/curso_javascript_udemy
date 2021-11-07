const fs = require('fs')

const caminho = __dirname + '/dados.txt'

function lerArquivo(caminho) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            // Assíncrono
            fs.readFile(caminho, 'utf8', (erro, dados) => {
                if (erro) {
                    resolve(erro)
                } else {
                    resolve(dados)
                }
            })
        }, 2000)
    })
}

lerArquivo(caminho)
    .then(console.log)