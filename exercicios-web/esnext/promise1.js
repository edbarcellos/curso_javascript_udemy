/** 
 * Uma promisse serve para tratar um dado que será recebido
 * no futuro, em uma comunicação assíncrona.
 * 
 * A variável 'p' abaixo será um objeto do tipo Promise no final
 * da declaração
 * 
 * A Promise recebe como parâmetro uma função anônima, que por sua
 * vez recebe como parâmetro uma função nomeada (cumprirPromessa) que será executada
 * qdo. o programador quiser retornar o valor da Promise.
 * 
 * No exemplo abaixo simulou-se o valor '3' após um suposto processamento.
 * 
 * Para retornar o valor chamamos a função 'cumprirPromessa' passando o valor
 * como parâmetro.
 * 
 * Para acessar o valor fora da Promise chamamos o método '.then' no objeto
 * resultante (p) -> p.then().
 * 
 * O '.then()' só será executado qdo. a Promise for cumprida, ou seja, qdo. o valor
 * resultante da operação assíncrona já estiver disponível.
 * 
 * O '.then()' recebe como parâmetro uma função anônima que por sua vez recebe
 * como parâmetro o valor retornado da Promise (no exemplo abaixo, '3').
 * 
 * Dentro da função anônima do '.then()' podemos executar o processamento que quisermos
 * sobre o 'valor'
 * 
 * OBS1: A promessa só pode retornar um único valor/parâmetro. No exemplo abaixo é o '3'.
 * Se retornássemos dois parâmetros, somente o primeiro seria considerado. Isso não 
 * impede que retornemos um objeto ou um array, e esses sim, com diversos atributos/valores.
 * 
 * A assinatura de uma Promise é:
 * 
 * new Promise(function(resolve, reject) {})
 * 
 * ou com arrow Function:
 * 
 * new Promise((resolve, reject) => {})
 */
let p = new Promise(function(cumprirPromessa) {
    
    /** 
     * Nesse exemplo estamos usando a função setTimeout para simular uma chamada
     * assíncrona para um recurso externo que demorou 3 segundos para responder.
     * 
     * Perceba que o método .then() abaixo só é executado qdo. a operação assíncrona
     * é concluida.
     */
    setTimeout(function() {
        cumprirPromessa(3)
    }, 3000)
})

p.then(function(valor) {
    console.log(valor)
})

// Uma forma mais simples de escrever o .then acima seria:
p.then(valor => console.log(valor))

// Podemos aninhar várias chamadas ao .then() para executar algo sobre os dados
p
    .then(valor => valor + 1)
    .then(valor => valor.toFixed(2))
    .then(valor => valor.replace('.',','))
    .then(valor => console.log(`Preço: R$${valor}`))

/** 
 * O exemplo acima poderia ser feito de uma forma mais 'funcional/declarativa'.
 * 
 * Nas chamadas do .then() não há a necessidade de passar o parâmetro, pois já
 * é certo que só existe um único possível parâmetro, que é passado implicitamente.
 */
const increment = num => num + 1
const addDecimals = num => num.toFixed(2)
const toMoney = value => value.replace('.',',')
const printMoney = value => console.log(`Preço: R$${value}`)
p
    .then(increment)
    .then(addDecimals)
    .then(toMoney)
    .then(printMoney)