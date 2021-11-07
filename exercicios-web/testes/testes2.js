const pessoa = {
    nome: 'José',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}
 
let { endereco } = pessoa // destructuring do objeto endereco
console.log(endereco.numero) // imprime 1000
endereco.numero = 2500 // altero a variável nova, e não a do objeto
console.log(pessoa.endereco.numero) // imprime 2500 de dentro do obj

let {idade} = pessoa // desctructuring do atributo idade
console.log(idade) // imprime 5
idade = 10 // altero para 10
console.log(pessoa.idade) // o atributo está intacto