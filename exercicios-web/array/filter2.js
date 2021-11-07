Array.prototype.filter2 = function(callback) {
    const result = []
    for (let i = 0; i < this.length; i++) {
        if (!!callback(this[i], i, this)) {
            result.push(this[i])
        }
    }
    return result
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de plástico', preco: 18.99, fragil: false }
]

const caro = p => p.preco >= 500
const fragil = p => p.fragil

console.log(produtos.filter2(caro).filter2(fragil))