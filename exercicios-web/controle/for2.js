const teste = [6.2, 8.4, 9.1, 7.3, 4.3]

for (i in teste) {
    console.log(`${i} = ${teste[i]}`)
}

const pessoa = {
    nome: 'José',
    sobrenome: 'Saramago',
    idade: 120,
    peso: 1000
}

for (atributo in pessoa) {
    console.log(`${atributo.toUpperCase()} = ${pessoa[atributo]}`)
}