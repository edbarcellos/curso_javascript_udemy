// pessoa -> endereço de memória 123 -> {...}
const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro'
console.log(pessoa)

/* pessoa <- novo endereço de memória 456 -> {...}
aqui de fato não será permitido pq a tentativa
de alteração é diretamente na constante pessoa */
// pessoa = { nome: 'Manoel' }

/* Congela o objeto não permitindo que ocorram
novas alterações nos atributos. Ele não gera
um erro, mas os atributos não são mais alterados */
Object.freeze(pessoa)
pessoa.nome = 'Josefina'
delete pessoa.nome
console.log(pessoa.nome)

// Criação de um objeto constante desde o nascimento
const pessoaContante = Object.freeze({ nome: 'João' })
pessoaContante.nome = 'Maria'
console.log(pessoaContante)