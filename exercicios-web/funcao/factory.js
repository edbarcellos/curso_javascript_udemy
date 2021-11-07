// Factory simples
function criarPessoa() {
    return {
        nome: 'João',
        sobrenome: 'Silva'
    }
}
console.log(criarPessoa())

// Factory com parâmetros implicitos e fixos
function criarProduto(nome, preco) {
    return {
        nome, 
        preco,
        desconto: 0.10
    }
}
console.log(criarProduto('Computador', 2320.32))
console.log(criarProduto('Notebook', 3331.12))

// Factory com métodos
function criarCarro(nome, velocidadeMaxima = 200, delta = 5) {
    return {
        nome,
        velocidadeMaxima,
        delta,
        velocidadeAtual: 0,
        acelerar: function () {
            if ((this.velocidadeAtual + this.delta) < this.velocidadeMaxima) {
                this.velocidadeAtual += this.delta
            } else {
                this.velocidadeAtual = this.velocidadeMaxima
            }
        }
    }
}
let fusca = criarCarro('Fusca')
fusca.acelerar()
fusca.acelerar()
fusca.acelerar()
fusca.acelerar()
console.log(fusca.velocidadeAtual, fusca.velocidadeMaxima)