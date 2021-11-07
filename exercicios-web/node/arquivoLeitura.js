const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// síncrono... -> NÃO RECOMENDADO
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assíncrono... -> RECOMENDADO
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

// Acesso direto exclusivo para arquivos JSON
const config = require('./arquivo.json')
console.log(config.db)

// Lendo o conteúdo de uma pasta
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteudo da pasta...')
    console.log(arquivos)
})

/**
 * OBS: __dirname é uma constante do note que aponta
 * para o diretório atual
 */