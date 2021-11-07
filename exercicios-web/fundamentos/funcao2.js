// Armazenando uma função em uma variável/constante
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma função arrow em uma variável/constante
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

// Retorno implícito em função arrow
const subtracao = (a, b) => a - b
console.log(subtracao(3, 2))

const imprimir2 = a => console.log(a)
imprimir2('Edgar')