/* function f1(nome) {
    console.log(this.nome)
}

global.nome = 'João'
f1('Edgar')

function f2(nome) {
    this.nome = nome
    console.log(this.nome)
}
f2('José')
console.log(global.nome) */

console.log('fora');

(function () {
    console.log('teste')
})()