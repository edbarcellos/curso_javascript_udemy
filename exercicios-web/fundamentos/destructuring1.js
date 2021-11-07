// novo recurso do ES2015

const pessoa = {
    nome: 'José',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

// tire de dentro do objeto pessoa, as propriedades nome e idade
const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

const { endereco } = pessoa
console.log(endereco.numero)
endereco.numero = 2500
console.log(pessoa.endereco.numero)