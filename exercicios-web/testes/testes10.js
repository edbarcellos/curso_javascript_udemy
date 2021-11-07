const carrinho = [
    { produto: 'Notebook', valor: 2499, fragil: true },
    { produto: 'iPad Pro', valor: 4499, fragil: true },
    { produto: 'Copo de vidro', valor: 18.53, fragil: true },
    { produto: 'Copo de plástico', valor: 12.99, fragil: false }
]

const caro = e => e.valor > 2000
const fragil = e => e.fragil == true
const barato = e => e.valor <= 2000
const naoFragil = e => e.fragil == false

let especiais = carrinho.filter(caro).filter(fragil)
console.log(especiais)

especiais = carrinho.filter(fragil)
console.log(especiais)

especiais = carrinho.filter(naoFragil)
console.log(especiais)