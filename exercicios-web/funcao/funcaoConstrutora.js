/**
 * Uma função construtora funciona como uma classe
 * onde são definidos atributos e métodos, públicos
 * ou não.
 * 
 * Ao se instanciar essa classe em um novo objeto
 * através do 'new', o comportamento é idêntico ao
 * de uma classe, resultando em um objeto.
 * 
 * Em JavaScript, classe é função.
 */

function Carro(velocidadeMaxima = 200, delta = 5) {
    /**
     * Ao declarar um atributo/método com let/var/const
     * ele se torna privado dentro da função/classe.
     * 
     * Para criar um atributo/método público, usar o 'this'
     */

    // atributo privado
    let velocidadeAtual = 0

    // metodo publico
    this.acelerar = function () {
        if ((velocidadeAtual + delta) <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)