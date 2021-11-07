const prod1 = {} // chaves definem objects
console.log(typeof prod1)

prod1.nome = 'Celular Ultra Mega'
prod1.estoque = 10
prod1.preco = 4998.90
prod1['Desconto legal'] = 0.40 // evitar atributos com espaço

/** Objeto em JavaScript é uma coleção de chave: valor */
console.log(prod1)

/** Atribuição de uma função arrow para o objeto */
prod1.up = texto => texto.toUpperCase()
console.log(prod1.up('edgar'))

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    up: texto => texto.toUpperCase(), // função arrow
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
}

console.log(prod2)
console.log(prod2.up('edgar'))

/** Exemplo de JSON (que é diferente de objetos) */
'{ "nome": "Camisa Polo", "preco": 79.90 }'