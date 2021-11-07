const Pessoa = function (nome) {
    let teste = 'Testado'

    this.falar = function () {
        console.log(`Meu nome é ${nome}`)
    }
}
const p1 = new Pessoa('José')
p1.falar()

/**
 * Minhas observações
 * 
 * 1. Com a classe ocorre o problema do 'this', com 
 * a função construtora não. Assim como com a factory
 * tb não.
 * 
 * 2. No caso da classe e da factory, não foi possível
 * setar a visibilidade dos atributos/métodos. No caso
 * da função construtora, isso foi possível.
 */