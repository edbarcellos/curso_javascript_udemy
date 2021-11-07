// Callback Hell -> Varias callbacks aninhadas para vários processamentos assíncronos em sequência
/* setTimeout(function() {
    console.log('Executando callback...')
    
    setTimeout(function() {
        console.log('Executando callback...')
        
        setTimeout(function() {
            console.log('Executando callback...')
        }, 2000)
    }, 2000)
}, 2000) */


// Uma forma de se livrar do Callback Hell é utilizar promises
function esperarPor([tempo, valor]) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log(`Executando promise ${valor++}`)
            resolve([tempo, valor])
        }, tempo)
    })
}

esperarPor([2000, 1])
    .then(esperarPor)
    .then(esperarPor)