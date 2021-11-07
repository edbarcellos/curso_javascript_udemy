const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!`

console.log(concatenacao, template)

const frase = `Olá ${nome}! Como você está hoje? ${template}`
console.log(frase)

// expressões
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(up(nome))
console.log(`Ei... ${up('cuidado')}!`)