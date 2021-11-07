const nums = [1, 2, 3, 4, 5]

let resultado = nums.reduce(function(acumulador, valor) {
    console.log(`Acumulador atual: ${acumulador} / Valor atual: ${valor} / Resultado atual: ${(acumulador + valor) / 0.5}`)
    return (acumulador + valor) / 0.5
})
console.log(resultado)

const acumula = (acumulador, valor) => acumulador + valor
resultado = nums.reduce(acumula)
console.log(resultado)

const produtos = [
    { nome: 'Notebook', preco: 2499 },
    { nome: 'Celular', preco: 1049 },
    { nome: 'Óleo DoTerra', preco: 890 },
    { nome: 'Pulverizador', preco: 540 }
]

resultado = produtos.map(e => e.preco).reduce((acumulador, valor) => acumulador + valor)
console.log(resultado)