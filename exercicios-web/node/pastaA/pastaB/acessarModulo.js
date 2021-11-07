/**
 * O require respeita o CaseSensitive/CaseInsensitive
 * do sistema operacional. Como no Windows o shell é
 * case insensitive, 'moduloa' no exemplo abaixo
 * funcionaria.
 */
const moduloA = require('../../moduloA')
console.log(moduloA)

const c = require('./pastaC')
console.log(c.ola2)

const http = require('http')
const { reduce } = require('lodash')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8081)