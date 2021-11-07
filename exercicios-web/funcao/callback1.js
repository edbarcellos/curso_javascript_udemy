const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)

fabricantes.forEach(function (a, b) {
    console.log(b)
})

fabricantes.forEach(param => console.log(param))

/**
 * A função callback é uma função que é chamada
 * sempre que um evento ocorrer.
 * 
 * No exemplo acima o evento é o loop do forEach em
 * cada elemento do array. Cada iteração é um evento.
 */