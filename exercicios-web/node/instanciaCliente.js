const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')() // atenção para os parentes no final para invocar a função factory
const contadorD = require('./instanciaNova')() // atenção para os parentes no final para invocar a função factory

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor) // contadorA e contadorB apontam para a mesma instância do objeto

contadorC.inc()
contadorC.inc()
console.log(contadorD.valor) // contadorD aponta para uma instância DIFERENTE do contadorC