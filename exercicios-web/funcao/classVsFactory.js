class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}.`)
    }
}

const p1 = new Pessoa('João')
p1.falar()

const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}.`)
    }
}

const p2 = criarPessoa('João')
p2.falar()

const criarPessoa2 = function (nome) {
    return {
        falar: function () {
            console.log(`Meu nome é ${nome}.`)
        }
    }
}

const p3 = criarPessoa2('José')
p3.falar()