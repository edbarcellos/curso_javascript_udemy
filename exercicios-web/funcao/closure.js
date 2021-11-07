/**
 * Closure é o escopo criado quando uma função é declarada.
 * Esse escopo permite à função acessar e manipular
 * variáveis externas à função.
 * 
 * É como se fosse criado uma borda ao redor da função
 * que engloba o contexto léxico imediatamente superior
 * ao da própria função. 
 * 
 * No exemplo abaixo esse contexto é a função fora()
 */

// Contexto léxico em ação
const x = 'Glocal'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())

/**
 * No exemplo acima, diferentemente do exemplo do
 * módulo contextoLexico.js, a função dentro() foi
 * criada dentro da função fora(). Ou seja, no momento
 * da declaração da função dentro(), foi criado um 
 * closure que engloba o contexto léxico na qual ela
 * foi criada. E o contexto léxico na qual ela foi
 * criada é a função fora(), e não o módulo/arquivo
 * como no exemplo anterior. 
 * 
 * Por conta disso ela imprime o valor da constante
 * que foi declarada dentro do mesmo contexto léxico.
 */