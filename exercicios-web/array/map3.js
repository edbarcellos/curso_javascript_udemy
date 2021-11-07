Array.prototype.map2 = function(callback) {
    const result = []
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this))
    }
    return result
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }',
]

// Retornar um array apenas com os preços

// Minha versão (destructuring)
const precos = carrinho.map2(function(e) {
    let {preco} = JSON.parse(e)
    return preco
})

console.log(precos)

// Versão do professor (dois maps)
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)