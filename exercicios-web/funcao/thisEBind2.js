/**
 * Na função abaixo, o 'this' dentro de setInterval
 * não está apontando para 'Pessoa'. Por isso do erro.
 * 
 * Existem duas formas de se resolver.
 * 
 * 1. Usando o bind no final da função declarada
 * dentro de 'setInterval' apontando para o 'this' que
 * de fato referencia o objeto de 'Pessoa'
 * 
 * 2. Criando uma constante (no exemplo chamada 'self')
 * e atribuindo a essa constante o this correto. Nesse
 * cenário, ao referenciar o this dentro das sub funções
 * usamos o self no lugar.
 * 
 * OBS: Abaixo estão os 3 cenários. Com erro, com bind
 * e com self. Comentado de forma que funcione. Necessário
 * alterar para testar.
 */
function Pessoa() {
    this.idade = 0

    const self = this
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa