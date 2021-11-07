function gerarNumerosEntre(min, max, tempo) {
    (min > max) ? [min, max] = [max, min] : null

    return new Promise(resolve => {
        setTimeout(function() {
            const aleatorio = parseInt(Math.random() * (max - min + 1)) + min
            resolve(aleatorio)
        }, tempo)
    })
}

/**
 * Promise.all() executa várias promises ao mesmo tempo.
 * As promises que serão executadas devem ser passadas dentro de
 * um array []. 
 */
function gerarVariosNumeros() {
    return Promise.all([
        gerarNumerosEntre(1, 60, 1000),
        gerarNumerosEntre(1, 60, 500),
        gerarNumerosEntre(1, 60, 3000),
        gerarNumerosEntre(1, 60, 100),
        gerarNumerosEntre(1, 60, 4000),
        gerarNumerosEntre(1, 60, 1500)
    ])
}

/**
 * As promises serão executadas todas aos mesmo tempo,
 * em paralelo.
 * 
 * Somente após a conclusão de todas as promises é que
 * o .then é chamado.
 */
 console.time('tempo') // Inicia um timer para ver qto. tempo passou
gerarVariosNumeros()
    .then(console.log)
    .then(() => {        
        console.timeEnd('tempo') // Finaliza o timer e mostra o tempo decorrido
    })