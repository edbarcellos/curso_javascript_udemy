const carro = {
    cor: 'Cinza Manitoba',
    tipo: 'Hatch',
    marca: 'Peugeot',
    modelo: '207',
    motor: '1.4',
    valvulas: 8,
    portas: 5,
    tracao: 'Dianteira',
    velocidade: 0,
    ocupantes: {
        motorista: null,
        passageiroDianteiro: null,
        passageiroTraseiroEsquerdo: null,
        passageiroTraseiroCentral: null,
        passageiroTraseiroDireito: null
    },

    ligar: function() {
        console.log('Carro ligado...')
    },

    acelerar: function(incremento) {
        this.velocidade = this.velocidade + incremento
        console.log(`Velocidade aumentada em ${incremento} km/h.`)
        console.log(`A velocidade atual é de ${this.velocidade} km/h.`)
    },

    frear: function() {
        console.log(`O carro desacelerou ${this.velocidade} km/h.`)
        this.velocidade = 0
        console.log('Carro parado!')
    },

    adicionarOcupante: function(posicao, nome) {
        this.ocupantes[posicao] = nome
    },

    retirarOcupante: function(posicao) {
        if (this.ocupantes[posicao] != null) {
            console.log(`${this.ocupantes[posicao]} saiu do carro!`)
            this.ocupantes[posicao] = null
        }
    },

    listarOcupantes: function() {
        console.log(this.ocupantes)
    }
}

carro.ligar()
carro.acelerar(60)
carro.frear()
carro.adicionarOcupante('motorista', 'Edgar')
carro.adicionarOcupante('passageiroDianteiro', 'Elianai')
carro.listarOcupantes()
carro.retirarOcupante('passageiroDianteiro')
carro.listarOcupantes()