// Funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 10, 4, 5, 6, 7, 9)
imprimirSoma()

// Funcao com retorno
function soma(a, b = 0) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))

const teste = function (a , b) {
    return a * b
}
console.log(teste(2, 4))

const teste2 = (a, b) => a * b
console.log(teste2(10, 50))