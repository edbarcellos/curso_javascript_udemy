/**
 * Em JavaScript, sempre que fazemos uma atribuição de valores primitivos (ex: number, string, boolean),
 * a atribuição é "POR VALOR". E quando fazemos uma atribuição de valores complexos (ex: Object, Function),
 * a atribuição é "POR REFERÊNCIA".
 */

// Valores básicos / tipos primitivos -> atribuição por valor
let a = 3
let b = a
b++
console.log(a, b)

// Valores complexos -> atribuição por referência
const c = {nome: 'Teste'}
const d = c
d.nome = 'Edgar'
console.log(c, d)

//######################

let valor // não inicializada, logo "undefined"
console.log(valor)

valor = null // ausência de valor (não aponta para nenhum lugar de memória)
console.log(valor)
// Atribuir null qdo. quiser zerar o valor de uma variável

//console.log(valor.toString()) // Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)